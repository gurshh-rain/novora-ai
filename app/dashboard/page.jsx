"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/useAuth';

import { IoAnalyticsOutline } from "react-icons/io5";
import { LuGoal } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";


export default function Dashboard() {
  const { user, loading } = useAuth(true); // Require authentication
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setUsername(user.user_metadata?.username || user.email?.split('@')[0]);
    }
  }, [user]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'white',
        color: 'white',
        fontSize: '24px',
        fontWeight: '600'
      }}>
        Loading your workspace...
      </div>
    );
  }

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dashboard-container {
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .welcome-section {
          margin-top: 20vh;
          color: black;
        }

        .welcome-section h1 {
          font-size: 3em;
          font-weight: 700;
          margin-bottom: 8px;
          animation: fadeInUp 0.6s ease;
        }

        .welcome-section p {
          font-size: 1.2em;
          opacity: 0.9;
          animation: fadeInUp 0.6s ease 0.1s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-actions {
          display: flex;
          gap: 12px;
          animation: fadeInUp 0.6s ease 0.2s backwards;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: white;
          color: #000000ff;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .card {
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(182, 182, 182, 1);
          padding: 32px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease backwards;
        }

        .card:nth-child(1) { animation-delay: 0.3s; }
        .card:nth-child(2) { animation-delay: 0.4s; }
        .card:nth-child(3) { animation-delay: 0.5s; }

        .card:hover {
          border: 1px solid rgba(85, 85, 85, 1);
        }

        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 28px;
        }
        .card-icon svg {
          width: 50px;
          height: auto;
        }

        .card h3 {
          font-size: 1.5em;
          margin-bottom: 12px;
          font-weight: 650;
          color: #090909ff;
        }

        .card p {
          color: #020202ff;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .card-link {
          color: #000000ff;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s ease;
        }

        .card-link:hover {
          gap: 12px;
        }

        .user-info-card {
          background: white;
          border-radius: 10px;
          border: 1px solid rgba(181, 181, 181, 1);
          padding: 32px;
          animation: fadeInUp 0.6s ease 0.6s backwards;
        }

        .user-info-card h2 {
          font-size: 2em;
          margin-bottom: 24px;
          color: #0a0a0aff;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .info-label {
          font-weight: 600;
          color: #151515ff;
        }

        .info-value {
          color: #383838ff;
        }

        .badge {
          display: inline-block;
          padding: 6px 12px;
          background: #10b981;
          color: white;
          border-radius: 6px;
          font-size: 0.85em;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .welcome-section h1 {
            font-size: 2em;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div className="welcome-section">
              <h1>Welcome back, {username}!</h1>
              <p>Ready to boost your productivity today?</p>
            </div>
            <div className="header-actions">
              <button className="btn btn-primary" onClick={() => router.push('/settings')}>
                Settings
              </button>
              <button className="btn btn-secondary" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="card">
              <div className="card-icon"><IoAnalyticsOutline /></div>
              <h3>Analytics</h3>
              <p>Track your productivity metrics and see how you're improving over time.</p>
              <a href="#" className="card-link">
                View Analytics →
              </a>
            </div>

            <div className="card">
              <div className="card-icon"><LuGoal /></div>
              <h3>Goals</h3>
              <p>Set and achieve your productivity goals with AI-powered insights.</p>
              <a href="#" className="card-link">
                Manage Goals →
              </a>
            </div>

            <div className="card">
              <div className="card-icon"><RxLightningBolt /></div>
              <h3>Quick Actions</h3>
              <p>Access your most-used features and shortcuts in one place.</p>
              <a href="#" className="card-link">
                View Actions →
              </a>
            </div>
          </div>

          <div className="user-info-card">
            <h2>Account Information</h2>
            <div className="info-row">
              <span className="info-label">Username</span>
              <span className="info-value">{username}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">User ID</span>
              <span className="info-value">{user?.id?.substring(0, 20)}...</span>
            </div>
            <div className="info-row">
              <span className="info-label">Status</span>
              <span className="badge">Active</span>
            </div>
            <div className="info-row">
              <span className="info-label">Member Since</span>
              <span className="info-value">
                {new Date(user?.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Last Sign In</span>
              <span className="info-value">
                {new Date(user?.last_sign_in_at).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}