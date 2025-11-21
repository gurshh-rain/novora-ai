"use client";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import HoverScrollText from "./HoverScrollText";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Page transition animation
  function triggerPageTransition() {
    document.documentElement.animate(
      [
        { clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (path) => (e) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }
    router.push(path, { onTransitionReady: triggerPageTransition });
  };

  // Check for authenticated user
  useEffect(() => {
    checkUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
          setUsername(session.user.user_metadata?.username || session.user.email?.split('@')[0]);
        } else {
          setUser(null);
          setUsername(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      setUsername(user.user_metadata?.username || user.email?.split('@')[0]);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUsername(null);
    setShowDropdown(false);
    router.push('/');
  };

  // Scroll listener for nav transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .user-dropdown {
          position: relative;
        }

        .user-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: inherit;
          font-family: inherit;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 15px;
          text-transform: uppercase;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 1000;
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .dropdown-menu.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .dropdown-item {
          padding: 12px 16px;
          cursor: pointer;
          transition: background 0.2s ease;
          border-bottom: 1px solid #f3f4f6;
          color: #374151;
        }

        .dropdown-item:first-child {
          border-radius: 12px 12px 0 0;
          font-weight: 600;
          color: #111827;
          background: #f9fafb;
        }

        .dropdown-item:last-child {
          border-bottom: none;
          border-radius: 0 0 12px 12px;
          color: #090909ff;
        }

        .dropdown-item:hover:not(:first-child) {
          background: #f3f4f6;
        }

        .dropdown-item:last-child:hover {
          background: rgba(197, 197, 197, 1);
        }

        @media (max-width: 768px) {
          .dropdown-menu {
            min-width: 180px;
          }
        }
      `}</style>

      <div className={`nav ${scrolled ? "scrolled" : ""}`}>
        {/* Left */}
        <div className="col left">
          <div className="nav-item">
            <Link href="/" onClick={handleNavigation("/")}>
              <img src="novora-logo.png" className="nav-img"/>
              <HoverScrollText>Novora</HoverScrollText>
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="col center">
          <div className="nav-item">
            <Link href="/dashboard">
              <HoverScrollText>Dashboard</HoverScrollText>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/pricing">
              <HoverScrollText>Pricing</HoverScrollText>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/about">
              <HoverScrollText>About</HoverScrollText>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/help">
              <HoverScrollText>Help</HoverScrollText>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/blog">
              <HoverScrollText>Blog</HoverScrollText>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="col right btns">
          {user ? (
            <div className="user-dropdown">
              <button
                className="user-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="user-avatar">
                  {username?.[0] || 'U'}
                </div>
              </button>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <div className="dropdown-item">
                  {user.email}
                </div>
                <Link href="/dashboard" onClick={() => setShowDropdown(false)}>
                  <div className="dropdown-item">Dashboard</div>
                </Link>
                <Link href="/settings" onClick={() => setShowDropdown(false)}>
                  <div className="dropdown-item">Settings</div>
                </Link>
                <div className="dropdown-item" onClick={handleSignOut}>
                  Sign Out
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link href="/login" className="login-link">
                <HoverScrollText>Login</HoverScrollText>
              </Link>
            </div>
          )}
          <div className="login-btn">
            <Link href="/download" className="download-link">
              <HoverScrollText>Download</HoverScrollText>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;