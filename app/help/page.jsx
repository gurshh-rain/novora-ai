"use client";
import { useState } from 'react';
import { 
  FaSearch, 
  FaRocket, 
  FaCog, 
  FaChartLine, 
  FaQuestionCircle,
  FaBook,
  FaVideo,
  FaComments,
  FaHeadset,
  FaArrowRight,
  FaDownload,
  FaApple,
  FaWindows,
  FaCheckCircle,
  FaPlayCircle,
  FaLightbulb,
  FaKeyboard,
  FaBell,
  FaLock,
  FaUsers,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: <FaBook /> },
    { id: 'getting-started', name: 'Getting Started', icon: <FaRocket /> },
    { id: 'features', name: 'Features', icon: <FaChartLine /> },
    { id: 'settings', name: 'Settings', icon: <FaCog /> },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: <FaQuestionCircle /> }
  ];

  const articles = [
    {
      id: 1,
      category: 'getting-started',
      title: 'How to Install Novora AI',
      description: 'Step-by-step guide to installing Novora on Windows and macOS',
      content: `
        <h3>Installation Steps</h3>
        <p>Follow these simple steps to get started with Novora AI:</p>
        <ol>
          <li><strong>Download the installer</strong> - Visit novora.ai/download and choose your platform</li>
          <li><strong>Run the installer</strong> - Double-click the downloaded file</li>
          <li><strong>Follow the setup wizard</strong> - Accept the terms and choose installation location</li>
          <li><strong>Launch Novora</strong> - The app will start automatically after installation</li>
          <li><strong>Create an account</strong> - Sign up or log in to sync your data</li>
        </ol>
        <h3>System Requirements</h3>
        <ul>
          <li><strong>Windows:</strong> Windows 10 or later, 4GB RAM minimum</li>
          <li><strong>macOS:</strong> macOS 10.14 or later, 4GB RAM minimum</li>
        </ul>
      `,
      readTime: '3 min'
    },
    {
      id: 2,
      category: 'getting-started',
      title: 'First-Time Setup Guide',
      description: 'Configure Novora for optimal productivity tracking',
      content: `
        <h3>Initial Configuration</h3>
        <p>After installation, complete these steps:</p>
        <ol>
          <li><strong>Categorize your apps</strong> - Toggle apps as productive/unproductive</li>
          <li><strong>Set your goals</strong> - Define daily productivity targets</li>
          <li><strong>Enable notifications</strong> - Get reminders about your habits</li>
          <li><strong>Choose tracking preferences</strong> - Select which apps/websites to monitor</li>
        </ol>
        <h3>Privacy Settings</h3>
        <p>Novora respects your privacy. You can exclude specific apps or websites from tracking at any time.</p>
      `,
      readTime: '5 min'
    },
    {
      id: 3,
      category: 'features',
      title: 'Understanding AI Insights',
      description: 'Learn how Novora\'s AI analyzes your productivity patterns',
      content: `
        <h3>AI-Powered Analysis</h3>
        <p>Novora uses advanced machine learning to understand your work patterns:</p>
        <ul>
          <li><strong>Pattern Recognition</strong> - Identifies your most productive hours</li>
          <li><strong>Habit Analysis</strong> - Detects recurring behaviors and trends</li>
          <li><strong>Smart Recommendations</strong> - Suggests improvements based on your data</li>
          <li><strong>Predictive Insights</strong> - Forecasts productivity based on current trends</li>
        </ul>
        <h3>How to Access Insights</h3>
        <p>Navigate to the Dashboard → Insights tab to view your personalized AI analysis.</p>
      `,
      readTime: '4 min'
    },
    {
      id: 4,
      category: 'features',
      title: 'Goal Setting and Tracking',
      description: 'Set meaningful goals and track your progress',
      content: `
        <h3>Creating Goals</h3>
        <p>Set SMART goals to improve your productivity:</p>
        <ol>
          <li>Click on "Goals" in the sidebar</li>
          <li>Select "Create New Goal"</li>
          <li>Choose goal type (Daily, Weekly, or Monthly)</li>
          <li>Set your target hours or percentage</li>
          <li>Track progress in real-time</li>
        </ol>
        <h3>Goal Types</h3>
        <ul>
          <li><strong>Productive Hours</strong> - Total time on productive apps</li>
          <li><strong>Focus Ratio</strong> - Percentage of productive vs unproductive time</li>
          <li><strong>Specific Apps</strong> - Time targets for individual applications</li>
        </ul>
      `,
      readTime: '4 min'
    },
    {
      id: 5,
      category: 'features',
      title: 'Using the Built-in Miniplayer',
      description: 'Control your music without breaking focus',
      content: `
        <h3>Miniplayer Features</h3>
        <p>Stay in flow while controlling your music:</p>
        <ul>
          <li><strong>Universal Controls</strong> - Works with Spotify, YouTube Music, Apple Music</li>
          <li><strong>Keyboard Shortcuts</strong> - Play/pause with Ctrl+Shift+Space</li>
          <li><strong>Always on Top</strong> - Float above other windows</li>
          <li><strong>Minimal Design</strong> - Unobtrusive and beautiful</li>
        </ul>
        <h3>Keyboard Shortcuts</h3>
        <ul>
          <li><strong>Ctrl+Shift+Space</strong> - Play/Pause</li>
          <li><strong>Ctrl+Shift+→</strong> - Next Track</li>
          <li><strong>Ctrl+Shift+←</strong> - Previous Track</li>
        </ul>
      `,
      readTime: '3 min'
    },
    {
      id: 6,
      category: 'settings',
      title: 'Privacy and Data Settings',
      description: 'Control what Novora tracks and how your data is used',
      content: `
        <h3>Privacy Controls</h3>
        <p>You have full control over your data:</p>
        <ul>
          <li><strong>Exclude Apps</strong> - Prevent specific apps from being tracked</li>
          <li><strong>Pause Tracking</strong> - Temporarily stop all tracking</li>
          <li><strong>Private Mode</strong> - Browse without recording data</li>
          <li><strong>Delete History</strong> - Remove tracked data at any time</li>
        </ul>
        <h3>Data Storage</h3>
        <p>All data is encrypted and stored locally. Cloud sync is optional and uses end-to-end encryption.</p>
      `,
      readTime: '5 min'
    },
    {
      id: 7,
      category: 'settings',
      title: 'Notification Preferences',
      description: 'Customize when and how Novora notifies you',
      content: `
        <h3>Notification Types</h3>
        <ul>
          <li><strong>Goal Updates</strong> - When you reach milestone progress</li>
          <li><strong>Productivity Alerts</strong> - Reminders to stay focused</li>
          <li><strong>Weekly Reports</strong> - Summary of your productivity</li>
          <li><strong>Break Reminders</strong> - Suggestions to take breaks</li>
        </ul>
        <h3>Customization</h3>
        <p>Go to Settings → Notifications to enable/disable specific notification types and set quiet hours.</p>
      `,
      readTime: '3 min'
    },
    {
      id: 8,
      category: 'troubleshooting',
      title: 'App Not Tracking Properly',
      description: 'Fix common tracking issues',
      content: `
        <h3>Common Solutions</h3>
        <ol>
          <li><strong>Restart Novora</strong> - Close and reopen the application</li>
          <li><strong>Check Permissions</strong> - Ensure accessibility permissions are granted</li>
          <li><strong>Update Novora</strong> - Make sure you're running the latest version</li>
          <li><strong>Recategorize Apps</strong> - Reset app categories if needed</li>
        </ol>
        <h3>macOS Permissions</h3>
        <p>Go to System Preferences → Security & Privacy → Privacy → Accessibility and ensure Novora is checked.</p>
        <h3>Windows Permissions</h3>
        <p>Right-click Novora → Run as Administrator if tracking issues persist.</p>
      `,
      readTime: '4 min'
    },
    {
      id: 9,
      category: 'troubleshooting',
      title: 'Sync Issues',
      description: 'Resolve problems with cloud synchronization',
      content: `
        <h3>Troubleshooting Sync</h3>
        <ol>
          <li><strong>Check Internet Connection</strong> - Ensure stable connectivity</li>
          <li><strong>Re-login</strong> - Sign out and sign back in</li>
          <li><strong>Force Sync</strong> - Click the sync icon in settings</li>
          <li><strong>Clear Cache</strong> - Settings → Advanced → Clear Cache</li>
        </ol>
        <h3>Manual Backup</h3>
        <p>Export your data as a backup: Settings → Data → Export All Data</p>
      `,
      readTime: '3 min'
    }
  ];

  const faqs = [
    {
      question: 'Is my data private and secure?',
      answer: 'Yes, absolutely. All your data is encrypted and stored locally on your device. If you enable cloud sync, we use end-to-end encryption. We never sell or share your personal data with third parties.'
    },
    {
      question: 'Does Novora slow down my computer?',
      answer: 'No. Novora is designed to be extremely lightweight and uses minimal system resources. It runs quietly in the background without affecting your computer\'s performance.'
    },
    {
      question: 'Can I use Novora on multiple devices?',
      answer: 'Yes! With a Starter plan or higher, you can sync your data across multiple devices. Your productivity data will automatically sync between all your computers.'
    },
    {
      question: 'How accurate is the AI categorization?',
      answer: 'Novora\'s AI achieves 95% accuracy in categorizing apps and websites. You can always manually adjust any categorization, and the AI learns from your preferences over time.'
    },
    {
      question: 'Can I export my productivity data?',
      answer: 'Yes! Pro and Enterprise users can export their data in CSV, JSON, or PDF formats. Free and Starter users can export in CSV format.'
    },
    {
      question: 'What happens if I cancel my subscription?',
      answer: 'You\'ll retain access to your plan features until the end of your billing period. After that, you\'ll be moved to the Free plan and can continue using basic features.'
    },
    {
      question: 'Does Novora work offline?',
      answer: 'Yes! Novora tracks your productivity even when offline. Data will automatically sync to the cloud when you reconnect to the internet.'
    },
    {
      question: 'How do I delete my account and data?',
      answer: 'Go to Settings → Account → Delete Account. This will permanently remove all your data from our servers. You can also export your data before deletion.'
    }
  ];

  const quickLinks = [
    { icon: <FaDownload />, title: 'Download Novora', description: 'Get the latest version', link: '#' },
    { icon: <FaVideo />, title: 'Video Tutorials', description: 'Watch how-to guides', link: '#' },
    { icon: <FaComments />, title: 'Community Forum', description: 'Join discussions', link: '#' },
    { icon: <FaHeadset />, title: 'Contact Support', description: 'Get personalized help', link: '#' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const searchResults = searchQuery 
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArticles;

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

        .help-container {
          min-height: 100vh;
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .help-hero {
          color: black;
          padding: 100px 40px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .help-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -25%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 15s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 30px) rotate(5deg); }
        }

        .help-hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .help-hero h1 {
          font-size: 4em;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          animation: slideDown 0.8s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .help-hero p {
          font-size: 1.3em;
          color: black;
          margin-bottom: 40px;
          animation: slideDown 0.8s ease 0.2s backwards;
        }

        .search-container {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
          animation: slideDown 0.8s ease 0.4s backwards;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.3em;
          color: #9ca3af;
        }

        .search-input {
          width: 100%;
          padding: 20px 24px 20px 60px;
          border: none;
          border-radius: 16px;
          font-size: 1.1em;
          background: #ffffff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }

        .quick-links {
          max-width: 1400px;
          margin: -40px auto 0;
          padding: 0 40px 80px;
          position: relative;
          z-index: 2;
        }

        .quick-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .quick-link-card {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          animation: slideUp 0.6s ease backwards;
        }

        .quick-link-card:nth-child(1) { animation-delay: 0.1s; }
        .quick-link-card:nth-child(2) { animation-delay: 0.2s; }
        .quick-link-card:nth-child(3) { animation-delay: 0.3s; }
        .quick-link-card:nth-child(4) { animation-delay: 0.4s; }

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

        .quick-link-card:hover {
          border-color: #000000;
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .quick-link-icon {
          font-size: 48px;
          color: #000000;
          margin-bottom: 16px;
        }

        .quick-link-card h3 {
          font-size: 1.3em;
          font-weight: 700;
          margin-bottom: 8px;
          color: #000000;
        }

        .quick-link-card p {
          font-size: 0.95em;
          color: #6b7280;
        }

        .help-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 40px 80px;
        }

        .category-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          animation: slideUp 0.8s ease 0.6s backwards;
        }

        .category-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: 2px solid #e5e7eb;
          background: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #6b7280;
        }

        .category-tab:hover {
          border-color: #000000;
        }

        .category-tab.active {
          background: #000000;
          color: #ffffff;
          border-color: #000000;
        }

        .articles-section {
          margin-bottom: 80px;
        }

        .section-header {
          margin-bottom: 32px;
        }

        .section-header h2 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000000;
        }

        .section-header p {
          font-size: 1.1em;
          color: #6b7280;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .article-card {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          cursor: pointer;
          animation: slideUp 0.6s ease backwards;
        }

        .article-card:nth-child(1) { animation-delay: 0.1s; }
        .article-card:nth-child(2) { animation-delay: 0.2s; }
        .article-card:nth-child(3) { animation-delay: 0.3s; }

        .article-card:hover {
          border-color: #000000;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .article-category {
          display: inline-block;
          background: #f3f4f6;
          color: #000000;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.75em;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .article-card h3 {
          font-size: 1.4em;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000000;
          line-height: 1.3;
        }

        .article-card p {
          font-size: 0.95em;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85em;
          color: #9ca3af;
        }

        .read-time {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .read-more {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #000000;
          font-weight: 600;
          transition: gap 0.3s ease;
        }

        .article-card:hover .read-more {
          gap: 10px;
        }

        .faq-section {
          margin-bottom: 80px;
        }

        .faq-grid {
          display: grid;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .faq-item:hover {
          border-color: #000000;
        }

        .faq-question {
          padding: 24px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 1.05em;
          color: #000000;
          user-select: none;
        }

        .faq-icon {
          font-size: 1.4em;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 28px;
          color: #6b7280;
          line-height: 1.7;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 28px 24px 28px;
        }

        .contact-section {
          background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
          border-radius: 24px;
          padding: 80px 60px;
          text-align: center;
        }

        .contact-section h2 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 16px;
          color: #000000;
        }

        .contact-section p {
          font-size: 1.1em;
          color: #6b7280;
          margin-bottom: 40px;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .contact-card {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: #000000;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .contact-card-icon {
          font-size: 40px;
          color: #000000;
          margin-bottom: 16px;
        }

        .contact-card h3 {
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 8px;
          color: #000000;
        }

        .contact-card p {
          font-size: 0.95em;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .contact-btn {
          padding: 12px 24px;
          background: #000000;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: #1a1a1a;
          transform: scale(1.05);
        }

        .article-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 40px;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .article-modal-content {
          background: #ffffff;
          border-radius: 24px;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .article-modal-header {
          position: sticky;
          top: 0;
          background: #ffffff;
          padding: 32px 40px;
          border-bottom: 2px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          z-index: 10;
        }

        .article-modal-header h2 {
          font-size: 2em;
          font-weight: 700;
          color: #000000;
          padding-right: 40px;
        }

        .close-modal {
          background: #f3f4f6;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .close-modal:hover {
          background: #000000;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .close-modal svg {
          font-size: 1.5em;
        }

        .article-modal-body {
          padding: 40px;
        }

        .article-modal-body h3 {
          font-size: 1.5em;
          font-weight: 700;
          margin: 32px 0 16px;
          color: #000000;
        }

        .article-modal-body p {
          font-size: 1.05em;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .article-modal-body ul,
        .article-modal-body ol {
          margin: 20px 0;
          padding-left: 28px;
        }

        .article-modal-body li {
          font-size: 1.05em;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 12px;
        }

        .article-modal-body strong {
          color: #000000;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .help-hero {
            padding: 60px 24px 40px;
          }

          .help-hero h1 {
            font-size: 2.5em;
          }

          .help-hero p {
            font-size: 1.1em;
          }

          .help-content {
            padding: 40px 24px;
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .contact-section {
            padding: 40px 24px;
          }

          .article-modal {
            padding: 20px;
          }

          .article-modal-header,
          .article-modal-body {
            padding: 24px;
          }
        }
      `}</style>

      <div className="help-container">
        <div className="help-hero">
          <div className="help-hero-content">
            <h1>How can we help you?</h1>
            <p>Find answers, learn about features, and get the most out of Novora AI</p>
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="quick-links">
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <div key={index} className="quick-link-card">
                <div className="quick-link-icon">{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="help-content">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          <div className="articles-section">
            <div className="section-header">
              <h2>Help Articles</h2>
              <p>
                {searchQuery 
                  ? `Found ${searchResults.length} results for "${searchQuery}"`
                  : 'Browse our comprehensive guides and tutorials'
                }
              </p>
            </div>
            <div className="articles-grid">
              {searchResults.map((article) => (
                <div 
                  key={article.id} 
                  className="article-card"
                  onClick={() => setSelectedArticle(article)}
                >
                  <span className="article-category">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="article-meta">
                    <span className="read-time">
                      <FaBook />
                      {article.readTime}
                    </span>
                    <span className="read-more">
                      Read More
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {searchResults.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
                <FaQuestionCircle style={{ fontSize: '64px', marginBottom: '20px', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.5em', marginBottom: '12px', color: '#374151' }}>
                  No results found
                </h3>
                <p>Try different keywords or browse all categories</p>
              </div>
            )}
          </div>

          <div className="faq-section">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers to common questions</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="faq-question">
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h2>Still need help?</h2>
            <p>Our support team is here to assist you</p>
            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <h3>Email Support</h3>
                <p>Get a response within 24 hours</p>
                <button className="contact-btn">Send Email</button>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaComments />
                </div>
                <h3>Live Chat</h3>
                <p>Chat with our team in real-time</p>
                <button className="contact-btn">Start Chat</button>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaUsers />
                </div>
                <h3>Community Forum</h3>
                <p>Connect with other users</p>
                <button className="contact-btn">Visit Forum</button>
              </div>
            </div>
          </div>
        </div>

        {selectedArticle && (
          <div className="article-modal" onClick={() => setSelectedArticle(null)}>
            <div className="article-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="article-modal-header">
                <h2>{selectedArticle.title}</h2>
                <button className="close-modal" onClick={() => setSelectedArticle(null)}>
                  <MdClose />
                </button>
              </div>
              <div 
                className="article-modal-body"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}