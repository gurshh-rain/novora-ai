"use client";
import { useState } from 'react';
import { RxLightningBolt } from "react-icons/rx";
import { IoArrowBack, IoAdd, IoCheckmark, IoTime, IoCalendar, IoDocument, IoSettings, IoNotifications, IoTrendingUp } from "react-icons/io5";
import { LuClock, LuTarget, LuBell, LuFileText } from "react-icons/lu";

export default function QuickActions() {
  const [recentActions, setRecentActions] = useState([
    { id: 1, action: "Created new task", time: "2 minutes ago" },
    { id: 2, action: "Completed goal", time: "15 minutes ago" },
    { id: 3, action: "Updated settings", time: "1 hour ago" }
  ]);

  const quickActions = [
    {
      id: 1,
      title: "Add Task",
      description: "Quickly create a new task",
      icon: <IoAdd />,
      color: { bg: '#dbeafe', text: '#1e40af' },
      action: () => alert('Add Task feature coming soon!')
    },
    {
      id: 2,
      title: "Start Timer",
      description: "Begin a productivity timer",
      icon: <LuClock />,
      color: { bg: '#d1fae5', text: '#065f46' },
      action: () => alert('Timer feature coming soon!')
    },
    {
      id: 3,
      title: "Quick Note",
      description: "Jot down a quick note",
      icon: <IoDocument />,
      color: { bg: '#fed7aa', text: '#9a3412' },
      action: () => alert('Quick note feature coming soon!')
    },
    {
      id: 4,
      title: "Set Reminder",
      description: "Create a reminder",
      icon: <LuBell />,
      color: { bg: '#e9d5ff', text: '#6b21a8' },
      action: () => alert('Reminder feature coming soon!')
    },
    {
      id: 5,
      title: "Schedule Meeting",
      description: "Add event to calendar",
      icon: <IoCalendar />,
      color: { bg: '#fce7f3', text: '#9f1239' },
      action: () => alert('Calendar feature coming soon!')
    },
    {
      id: 6,
      title: "View Reports",
      description: "Check your reports",
      icon: <LuFileText />,
      color: { bg: '#dbeafe', text: '#1e40af' },
      action: () => alert('Reports feature coming soon!')
    },
    {
      id: 7,
      title: "Set Goal",
      description: "Create a new goal",
      icon: <LuTarget />,
      color: { bg: '#d1fae5', text: '#065f46' },
      action: () => alert('Goal creation coming soon!')
    },
    {
      id: 8,
      title: "Check Progress",
      description: "View your progress",
      icon: <IoTrendingUp />,
      color: { bg: '#fed7aa', text: '#9a3412' },
      action: () => alert('Progress tracking coming soon!')
    }
  ];

  const shortcuts = [
    { key: "Ctrl + N", description: "New task" },
    { key: "Ctrl + T", description: "Start timer" },
    { key: "Ctrl + K", description: "Quick note" },
    { key: "Ctrl + R", description: "Set reminder" }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .quick-actions-container {
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .quick-actions-content {
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

        .section-title {
          font-size: 1.5em;
          font-weight: 700;
          color: #000;
          margin-bottom: 24px;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .action-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .action-card:hover {
          border-color: #9ca3af;
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .action-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .action-title {
          font-size: 1.2em;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
        }

        .action-description {
          font-size: 0.95em;
          color: #6b7280;
          line-height: 1.5;
        }

        .secondary-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .section-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
        }

        .section-card h2 {
          font-size: 1.3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 20px;
        }

        .recent-item {
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .recent-item:last-child {
          margin-bottom: 0;
        }

        .recent-action {
          font-weight: 600;
          color: #000;
        }

        .recent-time {
          font-size: 0.85em;
          color: #6b7280;
        }

        .shortcut-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .shortcut-item:last-child {
          border-bottom: none;
        }

        .shortcut-key {
          padding: 6px 12px;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-family: monospace;
          font-weight: 600;
          font-size: 0.9em;
          color: #000;
        }

        .shortcut-description {
          color: #6b7280;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2em;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }

          .secondary-sections {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="quick-actions-container">
        <div className="quick-actions-content">
          <a href="/dashboard" className="back-button">
            <IoArrowBack /> Back to Dashboard
          </a>

          <div className="page-header">
            <h1>
              <RxLightningBolt /> Quick Actions
            </h1>
            <p>Access your most-used features instantly</p>
          </div>

          <h2 className="section-title">Available Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action) => (
              <div 
                key={action.id} 
                className="action-card"
                onClick={action.action}
              >
                <div 
                  className="action-icon" 
                  style={{ background: action.color.bg, color: action.color.text }}
                >
                  {action.icon}
                </div>
                <div className="action-title">{action.title}</div>
                <div className="action-description">{action.description}</div>
              </div>
            ))}
          </div>

          <div className="secondary-sections">
            <div className="section-card">
              <h2>Recent Actions</h2>
              {recentActions.map((item) => (
                <div key={item.id} className="recent-item">
                  <div className="recent-action">{item.action}</div>
                  <div className="recent-time">{item.time}</div>
                </div>
              ))}
            </div>

            <div className="section-card">
              <h2>Keyboard Shortcuts</h2>
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="shortcut-item">
                  <span className="shortcut-description">{shortcut.description}</span>
                  <span className="shortcut-key">{shortcut.key}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}