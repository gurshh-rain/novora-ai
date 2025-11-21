"use client";
import { useState, useEffect } from 'react';
import { FaGoogle, FaApple, FaGithub, FaEye, FaEyeSlash, FaArrowRight, FaCheck } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    checkUser();
    
    // Check for URL parameters (confirmation, errors)
    const searchParams = new URLSearchParams(window.location.search);
    const confirmed = searchParams.get('confirmed');
    const urlError = searchParams.get('error');
    
    if (confirmed) {
      setMessage('Email confirmed! You can now sign in.');
    }
    
    if (urlError) {
      setError(decodeURIComponent(urlError));
    }
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      router.push('/dashboard');
    }
  };

  const benefits = [
    "Track 100+ apps & websites automatically",
    "Get AI-powered productivity insights",
    "Set and achieve your goals faster",
    "Access detailed analytics dashboard",
    "Join 97,000+ productive developers"
  ];

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        // Sign in with email and password
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password,
        });

        if (error) throw error;

        setMessage('Successfully logged in!');
        console.log('Logged in user:', data.user);
        
        // Small delay to show success message, then redirect
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        // Validate username for signup
        if (!username.trim()) {
          throw new Error('Username is required');
        }

        // Sign up with email, password, and username
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: {
              username: username.trim(),
              display_name: username.trim(),
            }
          }
        });

        if (error) throw error;

        if (data?.user?.identities?.length === 0) {
          throw new Error('An account with this email already exists. Please sign in instead.');
        }

        setMessage('Check your email for the confirmation link!');
        console.log('Signed up user:', data.user);
      }
    } catch (error) {
      setError(error.message);
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          skipBrowserRedirect: false,
        }
      });

      if (error) throw error;
      
      // The browser will redirect automatically
      // No need to set loading back to false
    } catch (error) {
      setError(error.message);
      console.error('Social login error:', error);
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;

      setMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          background: #fafafa;
          color: #151515;
        }

        .login-container {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .login-left {
          color: black;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 20px) rotate(10deg); }
        }

        .brand {
          position: relative;
          z-index: 1;
          animation: slideInLeft 0.8s ease;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .brand h1 {
          font-size: 3em;
          font-weight: 700;
          letter-spacing: -0.05em;
          margin-bottom: 16px;
        }

        .brand p {
          font-size: 1.2em;
          color: black;
          line-height: 1.6;
        }

        .benefits {
          position: relative;
          z-index: 1;
          animation: slideInLeft 0.8s ease 0.2s backwards;
        }

        .benefits h3 {
          font-size: 1.5em;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 1em;
          color: black;
        }

        .benefit-icon {
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8em;
          flex-shrink: 0;
        }

        .stats {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 40px;
          animation: slideInLeft 0.8s ease 0.4s backwards;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9em;
          color: rgba(1, 1, 1, 0.7);
        }

        .login-right {
          background: #ffffff;
          padding: 80px 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-form-container {
          width: 100%;
          max-width: 480px;
          animation: slideInRight 0.8s ease;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000000;
          letter-spacing: -0.02em;
        }

        .form-header p {
          font-size: 1.05em;
          color: black;
        }

        .alert {
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 0.95em;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert-error {
          background: #fee;
          color: #c00;
          border: 1px solid #fcc;
        }

        .alert-success {
          background: #efe;
          color: #080;
          border: 1px solid #cfc;
        }

        .form-toggle {
          display: flex;
          gap: 8px;
          background: #f3f4f6;
          padding: 6px;
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .toggle-btn {
          flex: 1;
          padding: 12px 24px;
          border: none;
          background: transparent;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
          color: black;
        }

        .toggle-btn.active {
          background: #ffffff;
          color: #000000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .toggle-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .social-login {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          border: 2px solid #e5e7eb;
          background: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #374151;
        }

        .social-btn:hover:not(:disabled) {
          border-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .social-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .social-btn svg {
          font-size: 1.3em;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 32px 0;
          color: #9ca3af;
          font-size: 0.9em;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #374151;
          font-size: 0.95em;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 1.2em;
        }

        .input-field {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1em;
          transition: all 0.3s ease;
          background: #ffffff;
        }

        .input-field:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .input-field:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .password-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          font-size: 1.2em;
          padding: 4px;
          transition: color 0.2s ease;
        }

        .password-toggle:hover {
          color: #000000;
        }

        .password-toggle:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .checkbox-wrapper input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #000000;
        }

        .checkbox-wrapper input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .checkbox-wrapper label {
          font-size: 0.9em;
          color: #374151;
          cursor: pointer;
          user-select: none;
        }

        .forgot-link {
          color: #000000;
          text-decoration: none;
          font-size: 0.9em;
          font-weight: 600;
          transition: opacity 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .forgot-link:hover {
          opacity: 0.7;
        }

        .forgot-link:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn {
          width: 100%;
          padding: 16px 32px;
          background: #000000;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .submit-btn:hover:not(:disabled) {
          background: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-footer {
          text-align: center;
          color: #6b7280;
          font-size: 0.95em;
        }

        .form-footer a {
          color: #000000;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .form-footer a:hover {
          opacity: 0.7;
        }

        .terms {
          margin-top: 24px;
          text-align: center;
          font-size: 0.85em;
          color: #9ca3af;
          line-height: 1.5;
        }

        .terms a {
          color: #000000;
          text-decoration: none;
          font-weight: 600;
        }

        .terms a:hover {
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .login-container {
            grid-template-columns: 1fr;
          }

          .login-left {
            display: none;
          }

          .login-right {
            padding: 40px 24px;
          }

          .form-header h2 {
            font-size: 2em;
          }
        }

        @media (max-width: 480px) {
          .social-btn {
            font-size: 0.9em;
            padding: 12px 20px;
          }

          .form-header h2 {
            font-size: 1.75em;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-left">
          <div className="brand">
            <h1>NOVORA.AI</h1>
            <p>
              Transform your productivity with AI-powered insights. 
              Track, analyze, and optimize your digital workflow.
            </p>
          </div>

          <div className="benefits">
            <h3>Why Novora?</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                {benefit}
              </div>
            ))}
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">97K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">User Rating</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Apps Tracked</div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="form-header">
              <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p>
                {isLogin 
                  ? 'Enter your credentials to access your account'
                  : 'Start your productivity journey today'
                }
              </p>
            </div>

            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            {message && (
              <div className="alert alert-success">
                {message}
              </div>
            )}

            <div className="form-toggle">
              <button
                className={`toggle-btn ${isLogin ? 'active' : ''}`}
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                  setMessage('');
                }}
                disabled={loading}
              >
                Sign In
              </button>
              <button
                className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                  setMessage('');
                }}
                disabled={loading}
              >
                Sign Up
              </button>
            </div>

            <div className="social-login">
              <button 
                className="social-btn" 
                onClick={() => handleSocialLogin('google')}
                disabled={loading}
              >
                <FaGoogle />
                Continue with Google
              </button>
              <button 
                className="social-btn" 
                onClick={() => handleSocialLogin('apple')}
                disabled={loading}
              >
                <FaApple />
                Continue with Apple
              </button>
              <button 
                className="social-btn" 
                onClick={() => handleSocialLogin('github')}
                disabled={loading}
              >
                <FaGithub />
                Continue with GitHub
              </button>
            </div>

            <div className="divider">OR</div>

            <div>
              {!isLogin && (
                <div className="input-group">
                  <label className="input-label" htmlFor="username">
                    Username
                  </label>
                  <div className="input-wrapper">
                    <MdEmail className="input-icon" />
                    <input
                      id="username"
                      type="text"
                      className="input-field"
                      placeholder="johndoe"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="input-group">
                <label className="input-label" htmlFor="email">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <MdEmail className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="password">
                  Password
                </label>
                <div className="input-wrapper">
                  <MdLock className="input-icon" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="input-field"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="form-options">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={loading}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <button
                    type="button"
                    className="forgot-link"
                    onClick={handlePasswordReset}
                    disabled={loading}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button className="submit-btn" type="button" onClick={handleEmailAuth} disabled={loading}>
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                {!loading && <FaArrowRight />}
              </button>

              <div className="form-footer">
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <a onClick={() => {
                      setIsLogin(false);
                      setError('');
                      setMessage('');
                    }}>
                      Sign up for free
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <a onClick={() => {
                      setIsLogin(true);
                      setError('');
                      setMessage('');
                    }}>
                      Sign in
                    </a>
                  </>
                )}
              </div>

              <div className="terms">
                By continuing, you agree to our{' '}
                <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}