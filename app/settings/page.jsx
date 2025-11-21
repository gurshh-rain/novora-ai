"use client";
import { useState } from 'react';
import { IoArrowBack, IoPersonOutline, IoNotificationsOutline, IoColorPaletteOutline, IoShieldCheckmarkOutline, IoTrashOutline } from "react-icons/io5";
import { LuCheck, LuX } from "react-icons/lu";

export default function Settings() {
  // Profile settings
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Productivity enthusiast');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [goalReminders, setGoalReminders] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);
  
  // Appearance settings
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('#000000');
  
  // Privacy settings
  const [profilePublic, setProfilePublic] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  // Password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Modals
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [saveNotification, setSaveNotification] = useState(false);

  const handleSaveProfile = () => {
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 3000);
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword && currentPassword && newPassword) {
      alert('Password changed successfully!');
      setShowPasswordModal(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match or fields are empty!');
    }
  };

  const handleDeleteAccount = () => {
    alert('Account deletion initiated. This would redirect to confirmation.');
    setShowDeleteModal(false);
  };

  const accentColors = [
    { name: 'Black', value: '#000000' },
    { name: 'Blue', value: '#2563eb' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Green', value: '#059669' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Orange', value: '#ea580c' }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .settings-container {
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .settings-content {
          max-width: 900px;
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
        }

        .page-header p {
          font-size: 1.2em;
          color: #6b7280;
        }

        .settings-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 24px;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #f3f4f6;
        }

        .section-icon {
          font-size: 24px;
          color: #000;
        }

        .section-header h2 {
          font-size: 1.5em;
          font-weight: 700;
          color: #000;
        }

        .setting-item {
          margin-bottom: 24px;
        }

        .setting-item:last-child {
          margin-bottom: 0;
        }

        .setting-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
          font-size: 0.95em;
        }

        .setting-description {
          font-size: 0.85em;
          color: #9ca3af;
          margin-bottom: 12px;
        }

        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1em;
          transition: border-color 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #000;
        }

        .textarea-field {
          min-height: 100px;
          resize: vertical;
          font-family: inherit;
        }

        .toggle-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #f9fafb;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .toggle-info {
          flex: 1;
        }

        .toggle-title {
          font-weight: 600;
          color: #000;
          margin-bottom: 4px;
        }

        .toggle-desc {
          font-size: 0.85em;
          color: #6b7280;
        }

        .toggle-switch {
          width: 52px;
          height: 28px;
          background: #e5e7eb;
          border-radius: 14px;
          position: relative;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .toggle-switch.active {
          background: #000;
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 22px;
          background: white;
          border-radius: 50%;
          top: 3px;
          left: 3px;
          transition: left 0.3s ease;
        }

        .toggle-switch.active::after {
          left: 27px;
        }

        .color-palette {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .color-option {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
          position: relative;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-option.selected {
          border-color: #000;
        }

        .color-option.selected::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: 700;
          font-size: 20px;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
        }

        .theme-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }

        .theme-card {
          padding: 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .theme-card:hover {
          border-color: #9ca3af;
        }

        .theme-card.selected {
          border-color: #000;
          background: #f9fafb;
        }

        .theme-preview {
          width: 100%;
          height: 60px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .theme-name {
          font-weight: 600;
          color: #000;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1em;
        }

        .btn-primary {
          background: #000;
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: white;
          color: #000;
          border: 2px solid #e5e7eb;
        }

        .btn-secondary:hover {
          border-color: #9ca3af;
        }

        .btn-danger {
          background: #dc2626;
          color: white;
        }

        .btn-danger:hover {
          background: #b91c1c;
          transform: translateY(-2px);
        }

        .btn-group {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .danger-zone {
          border-color: #fecaca;
          background: #fef2f2;
        }

        .danger-zone .section-header {
          border-bottom-color: #fecaca;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal {
          background: white;
          border-radius: 16px;
          padding: 32px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .modal h3 {
          font-size: 1.5em;
          margin-bottom: 16px;
          color: #000;
        }

        .modal p {
          color: #6b7280;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .save-notification {
          position: fixed;
          top: 24px;
          right: 24px;
          background: #000;
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          z-index: 1001;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2em;
          }

          .theme-options {
            grid-template-columns: 1fr;
          }

          .btn-group {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-content">
          <a href="/dashboard" className="back-button">
            <IoArrowBack /> Back to Dashboard
          </a>

          <div className="page-header">
            <h1>Settings</h1>
            <p>Manage your account preferences and settings</p>
          </div>

          {/* Profile Settings */}
          <div className="settings-section">
            <div className="section-header">
              <IoPersonOutline className="section-icon" />
              <h2>Profile Settings</h2>
            </div>

            <div className="setting-item">
              <label className="setting-label">Username</label>
              <input
                type="text"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>

            <div className="setting-item">
              <label className="setting-label">Email</label>
              <input
                type="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="setting-item">
              <label className="setting-label">Bio</label>
              <textarea
                className="input-field textarea-field"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself"
              />
            </div>

            <div className="btn-group">
              <button className="btn btn-primary" onClick={handleSaveProfile}>
                Save Changes
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowPasswordModal(true)}
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-section">
            <div className="section-header">
              <IoNotificationsOutline className="section-icon" />
              <h2>Notifications</h2>
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Email Notifications</div>
                <div className="toggle-desc">Receive notifications via email</div>
              </div>
              <div 
                className={`toggle-switch ${emailNotifications ? 'active' : ''}`}
                onClick={() => setEmailNotifications(!emailNotifications)}
              />
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Push Notifications</div>
                <div className="toggle-desc">Get push notifications in your browser</div>
              </div>
              <div 
                className={`toggle-switch ${pushNotifications ? 'active' : ''}`}
                onClick={() => setPushNotifications(!pushNotifications)}
              />
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Goal Reminders</div>
                <div className="toggle-desc">Daily reminders about your goals</div>
              </div>
              <div 
                className={`toggle-switch ${goalReminders ? 'active' : ''}`}
                onClick={() => setGoalReminders(!goalReminders)}
              />
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Weekly Report</div>
                <div className="toggle-desc">Get a summary of your weekly progress</div>
              </div>
              <div 
                className={`toggle-switch ${weeklyReport ? 'active' : ''}`}
                onClick={() => setWeeklyReport(!weeklyReport)}
              />
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="settings-section">
            <div className="section-header">
              <IoColorPaletteOutline className="section-icon" />
              <h2>Appearance</h2>
            </div>

            <div className="setting-item">
              <label className="setting-label">Theme</label>
              <div className="setting-description">Choose your preferred theme</div>
              <div className="theme-options">
                <div 
                  className={`theme-card ${theme === 'light' ? 'selected' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  <div className="theme-preview" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)' }} />
                  <div className="theme-name">Light</div>
                </div>
                <div 
                  className={`theme-card ${theme === 'dark' ? 'selected' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="theme-preview" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' }} />
                  <div className="theme-name">Dark</div>
                </div>
                <div 
                  className={`theme-card ${theme === 'auto' ? 'selected' : ''}`}
                  onClick={() => setTheme('auto')}
                >
                  <div className="theme-preview" style={{ background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #1f2937 50%, #1f2937 100%)' }} />
                  <div className="theme-name">Auto</div>
                </div>
              </div>
            </div>

            <div className="setting-item">
              <label className="setting-label">Accent Color</label>
              <div className="setting-description">Choose your accent color</div>
              <div className="color-palette">
                {accentColors.map((color) => (
                  <div
                    key={color.value}
                    className={`color-option ${accentColor === color.value ? 'selected' : ''}`}
                    style={{ background: color.value }}
                    onClick={() => setAccentColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="settings-section">
            <div className="section-header">
              <IoShieldCheckmarkOutline className="section-icon" />
              <h2>Privacy & Security</h2>
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Public Profile</div>
                <div className="toggle-desc">Make your profile visible to others</div>
              </div>
              <div 
                className={`toggle-switch ${profilePublic ? 'active' : ''}`}
                onClick={() => setProfilePublic(!profilePublic)}
              />
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Show Statistics</div>
                <div className="toggle-desc">Display your stats on your profile</div>
              </div>
              <div 
                className={`toggle-switch ${showStats ? 'active' : ''}`}
                onClick={() => setShowStats(!showStats)}
              />
            </div>

            <div className="toggle-container">
              <div className="toggle-info">
                <div className="toggle-title">Data Sharing</div>
                <div className="toggle-desc">Share anonymized data for improvements</div>
              </div>
              <div 
                className={`toggle-switch ${dataSharing ? 'active' : ''}`}
                onClick={() => setDataSharing(!dataSharing)}
              />
            </div>
          </div>

          {/* Danger Zone */}
          <div className="settings-section danger-zone">
            <div className="section-header">
              <IoTrashOutline className="section-icon" />
              <h2>Danger Zone</h2>
            </div>

            <div className="setting-item">
              <label className="setting-label">Delete Account</label>
              <div className="setting-description">
                Permanently delete your account and all associated data. This action cannot be undone.
              </div>
              <button 
                className="btn btn-danger"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Change Password</h3>
            <p>Enter your current password and choose a new one</p>
            
            <div className="setting-item">
              <label className="setting-label">Current Password</label>
              <input
                type="password"
                className="input-field"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
              />
            </div>

            <div className="setting-item">
              <label className="setting-label">New Password</label>
              <input
                type="password"
                className="input-field"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>

            <div className="setting-item">
              <label className="setting-label">Confirm New Password</label>
              <input
                type="password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>

            <div className="btn-group">
              <button className="btn btn-primary" onClick={handleChangePassword}>
                Change Password
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowPasswordModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Account</h3>
            <p>
              Are you sure you want to delete your account? This will permanently delete all your data, 
              including goals, analytics, and settings. This action cannot be undone.
            </p>

            <div className="btn-group">
              <button className="btn btn-danger" onClick={handleDeleteAccount}>
                Yes, Delete My Account
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save Notification */}
      {saveNotification && (
        <div className="save-notification">
          <LuCheck size={20} />
          <span>Settings saved successfully!</span>
        </div>
      )}
    </>
  );
}