"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';


export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Wait a bit for the URL to be fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check for error in URL params
        const searchParams = new URLSearchParams(window.location.search);
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');
        
        if (error) {
          throw new Error(errorDescription || error);
        }

        // Get hash parameters (for OAuth)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type');

        console.log('Callback type:', type);
        console.log('Has access token:', !!accessToken);

        // Handle email confirmation
        if (type === 'signup' || type === 'email') {
          setStatus('success');
          setTimeout(() => {
            router.push('/login?confirmed=true');
          }, 2000);
          return;
        }

        // Handle OAuth tokens
        if (accessToken && refreshToken) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
          
          if (sessionError) throw sessionError;

          setStatus('success');
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
          return;
        }

        // If we have a session already, just redirect
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          setStatus('success');
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        } else {
          throw new Error('No authentication data found. Please try logging in again.');
        }
      } catch (err) {
        console.error('Auth callback error:', err);
        setStatus('error');
        setErrorMessage(err.message || 'Authentication failed');
        setTimeout(() => {
          router.push('/login?error=' + encodeURIComponent(err.message));
        }, 3000);
      }
    };

    handleCallback();
  }, [router]);

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
        }

        .callback-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 20px;
        }

        .callback-card {
          background: rgba(8, 8, 8, 0.95);
          backdrop-filter: blur(10px);
          padding: 60px 40px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 500px;
          width: 100%;
          animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(233, 233, 233, 0.2);
          border-top: 4px solid #f9f9f9ff;
          border-radius: 50%;
          margin: 0 auto 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 30px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.5s ease;
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .success-icon::after {
          content: '✓';
          font-size: 48px;
          color: white;
          font-weight: bold;
        }

        .error-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 30px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: shake 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .error-icon::after {
          content: '✕';
          font-size: 48px;
          color: white;
          font-weight: bold;
        }

        .callback-title {
          font-size: 2em;
          font-weight: 700;
          margin-bottom: 16px;
          color: #ffffffff;
        }

        .callback-message {
          font-size: 1.1em;
          color: #e5e5e5ff;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .callback-submessage {
          font-size: 0.95em;
          color: #e4e4e4ff;
        }

        .error-message {
          background: #fee;
          border: 1px solid #fcc;
          color: #c00;
          padding: 16px;
          border-radius: 12px;
          margin-top: 20px;
          font-size: 0.95em;
          line-height: 1.5;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          margin-top: 30px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: black;
          animation: progress 3s linear;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 768px) {
          .callback-card {
            padding: 40px 30px;
          }

          .callback-title {
            font-size: 1.5em;
          }
        }
      `}</style>

      <div className="callback-container">
        <div className="callback-card">
          {status === 'loading' && (
            <>
              <div className="spinner"></div>
              <h2 className="callback-title">Authenticating...</h2>
              <p className="callback-message">
                Please wait while we verify your credentials
              </p>
              <p className="callback-submessage">
                This should only take a moment
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="success-icon"></div>
              <h2 className="callback-title">Success!</h2>
              <p className="callback-message">
                You've been authenticated successfully
              </p>
              <p className="callback-submessage">
                Redirecting you now...
              </p>
              <div className="progress-bar">
                <div className="progress-bar-fill"></div>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="error-icon"></div>
              <h2 className="callback-title">Authentication Failed</h2>
              <p className="callback-message">
                We couldn't complete your authentication
              </p>
              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}
              <p className="callback-submessage" style={{ marginTop: '20px' }}>
                Redirecting to login page...
              </p>
              <div className="progress-bar">
                <div className="progress-bar-fill"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}