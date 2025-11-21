"use client";
import { useState } from 'react';
import { IoAnalyticsOutline, IoArrowBack, IoTrendingUp, IoTime, IoCheckmarkDone } from "react-icons/io5";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('week');

  const stats = {
    week: {
      tasksCompleted: 42,
      productiveHours: 28.5,
      goalCompletion: 85,
      streak: 7
    },
    month: {
      tasksCompleted: 156,
      productiveHours: 118,
      goalCompletion: 78,
      streak: 23
    },
    year: {
      tasksCompleted: 1847,
      productiveHours: 1402,
      goalCompletion: 82,
      streak: 95
    }
  };

  const currentStats = stats[timeRange];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .analytics-container {
            margin-top: 15vh;   
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .analytics-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-weight: 600;
          color: #000;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 32px;
          text-decoration: none;
        }

        .back-button:hover {
          border-color: #9ca3af;
          transform: translateX(-4px);
        }

        .page-header {
          margin-bottom: 40px;
        }

        .page-header h1 {
          font-size: 3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .page-header p {
          font-size: 1.2em;
          color: #6b7280;
        }

        .time-selector {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .time-btn {
          padding: 12px 24px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          background: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .time-btn.active {
          background: #000;
          color: white;
          border-color: #000;
        }

        .time-btn:hover:not(.active) {
          border-color: #9ca3af;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: #9ca3af;
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 28px;
        }

        .stat-icon.blue { background: #dbeafe; color: #1e40af; }
        .stat-icon.green { background: #d1fae5; color: #065f46; }
        .stat-icon.purple { background: #e9d5ff; color: #6b21a8; }
        .stat-icon.orange { background: #fed7aa; color: #9a3412; }

        .stat-value {
          font-size: 2.5em;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1em;
          color: #6b7280;
          font-weight: 500;
        }

        .chart-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 40px;
        }

        .chart-header {
          margin-bottom: 24px;
        }

        .chart-header h2 {
          font-size: 1.5em;
          font-weight: 700;
          color: #000;
        }

        .chart-placeholder {
          height: 300px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-weight: 600;
        }

        .insights-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
        }

        .insights-section h2 {
          font-size: 1.5em;
          font-weight: 700;
          color: #000;
          margin-bottom: 24px;
        }

        .insight-item {
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
          margin-bottom: 16px;
          border-left: 4px solid #10b981;
        }

        .insight-item:last-child {
          margin-bottom: 0;
        }

        .insight-item h3 {
          font-weight: 600;
          color: #000;
          margin-bottom: 8px;
        }

        .insight-item p {
          color: #6b7280;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2em;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="analytics-container">
        <div className="analytics-content">
          <a href="/dashboard" className="back-button">
            <IoArrowBack /> Back to Dashboard
          </a>

          <div className="page-header">
            <h1>
              <IoAnalyticsOutline /> Analytics
            </h1>
            <p>Track your productivity metrics and insights</p>
          </div>

          <div className="time-selector">
            <button 
              className={`time-btn ${timeRange === 'week' ? 'active' : ''}`}
              onClick={() => setTimeRange('week')}
            >
              This Week
            </button>
            <button 
              className={`time-btn ${timeRange === 'month' ? 'active' : ''}`}
              onClick={() => setTimeRange('month')}
            >
              This Month
            </button>
            <button 
              className={`time-btn ${timeRange === 'year' ? 'active' : ''}`}
              onClick={() => setTimeRange('year')}
            >
              This Year
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                <IoCheckmarkDone />
              </div>
              <div className="stat-value">{currentStats.tasksCompleted}</div>
              <div className="stat-label">Tasks Completed</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <IoTime />
              </div>
              <div className="stat-value">{currentStats.productiveHours}h</div>
              <div className="stat-label">Productive Hours</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon purple">
                <IoTrendingUp />
              </div>
              <div className="stat-value">{currentStats.goalCompletion}%</div>
              <div className="stat-label">Goal Completion</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <IoAnalyticsOutline />
              </div>
              <div className="stat-value">{currentStats.streak}</div>
              <div className="stat-label">Day Streak</div>
            </div>
          </div>

          <div className="chart-section">
            <div className="chart-header">
              <h2>Productivity Over Time</h2>
            </div>
            <div className="chart-placeholder">
              Chart visualization coming soon
            </div>
          </div>

          <div className="insights-section">
            <h2>AI-Powered Insights</h2>
            
            <div className="insight-item">
              <h3>Peak Productivity Hours</h3>
              <p>You're most productive between 9 AM and 12 PM. Consider scheduling your most important tasks during this time.</p>
            </div>

            <div className="insight-item">
              <h3>Improvement Trend</h3>
              <p>Your task completion rate has increased by 23% compared to last {timeRange}. Keep up the great work!</p>
            </div>

            <div className="insight-item">
              <h3>Quick Win</h3>
              <p>You're only 3 tasks away from beating your personal record. Push yourself today!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}