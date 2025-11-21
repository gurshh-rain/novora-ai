"use client";
import { useState } from 'react';
import { IoArrowBack, IoRocketOutline, IoHeartOutline, IoCodeSlashOutline, IoMailOutline, IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { LuTarget, LuZap, LuShield, LuLightbulb } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";



export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const values = [
    {
      icon: <LuTarget />,
      title: "Goal-Oriented",
      description: "Built to help you set clear goals and track your progress effectively."
    },
    {
      icon: <LuZap />,
      title: "Simple & Fast",
      description: "No bloat, no complexity. Just the features you need to stay productive."
    },
    {
      icon: <LuShield />,
      title: "Privacy First",
      description: "Your data stays yours. Secure, private, and never shared."
    },
    {
      icon: <LuLightbulb />,
      title: "Continuous Improvement",
      description: "Always evolving based on real-world use and feedback."
    }
  ];

  const features = [
    { title: "Goal Tracking", description: "Set, manage, and achieve your goals with progress tracking" },
    { title: "Analytics Dashboard", description: "Visualize your productivity metrics and insights" },
    { title: "Quick Actions", description: "Access your most-used features instantly" },
    { title: "Custom Tags", description: "Organize goals with flexible tagging system" },
    { title: "Smart Filtering", description: "Find what you need with powerful filters and sorting" },
    { title: "Beautiful UI", description: "Clean, modern interface that's a joy to use" }
  ];

  const techStack = [
    "Next.js",
    "React",
    "Supabase",
    "TypeScript",
    "Tailwind CSS"
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
            margin-top: 30vh;
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .about-content {
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

        .hero-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .hero-section h1 {
          font-size: 4em;
          font-weight: 700;
          color: #000;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-section p {
          font-size: 1.4em;
          color: #141414ff;
          max-width: 700px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: #000;
          color: white;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: 600;
        }

        .tabs-container {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          border-bottom: 2px solid #f3f4f6;
          padding-bottom: 0;
          overflow-x: auto;
        }

        .tab {
          padding: 16px 28px;
          background: none;
          border: none;
          font-weight: 600;
          font-size: 1em;
          color: #6b7280;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .tab:hover {
          color: #000;
        }

        .tab.active {
          color: #000;
          border-bottom-color: #000;
        }

        .tab-content {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .story-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .story-section h2 {
          font-size: 2.5em;
          font-weight: 700;
          color: #000;
          margin-bottom: 24px;
        }

        .story-section p {
          font-size: 1.1em;
          color: #374151;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .highlight-box {
          background: #f9fafb;
          border-left: 4px solid #000;
          padding: 24px;
          border-radius: 12px;
          margin: 32px 0;
        }

        .highlight-box h3 {
          font-size: 1.3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
        }

        .highlight-box p {
          color: #6b7280;
          margin: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .value-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          border-color: #9ca3af;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          width: 56px;
          height: 56px;
          background: #f3f4f6;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #000;
        }

        .value-card h3 {
          font-size: 1.3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
        }

        .value-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .feature-item {
          padding: 24px;
          background: #f9fafb;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .feature-item h4 {
          font-size: 1.1em;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
        }

        .feature-item p {
          color: #6b7280;
          font-size: 0.95em;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .tech-badge {
          padding: 10px 20px;
          background: #000;
          color: black;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.95em;
        }

        .developer-card {
          background: linear-gradient(135deg, #000 0%, #1c1c1cff 100%);
          border-radius: 10px;
          padding: 48px;
          color: white;
          margin: 40px 0;
        }

        .developer-card h2 {
          font-size: 2.5em;
          margin-bottom: 16px;
        }

        .developer-card p {
          font-size: 1.1em;
          opacity: 0.9;
          margin-bottom: 32px;
          line-height: 1.6;
          color: white;
        }

        .social-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .cta-section {
          text-align: center;
          padding: 60px 32px;
          background: #f9fafb;
          border-radius: 16px;
          margin-top: 60px;
        }

        .cta-section h2 {
          font-size: 2.5em;
          font-weight: 700;
          color: #000;
          margin-bottom: 16px;
        }

        .cta-section p {
          font-size: 1.2em;
          color: #6b7280;
          margin-bottom: 32px;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: #000;
          color: white;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1em;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5em;
          }

          .hero-section p {
            font-size: 1.1em;
          }

          .tabs-container {
            overflow-x: auto;
          }

          .values-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .developer-card {
            padding: 32px 24px;
          }
        }
      `}</style>

      <div className="about-container">
        <div className="about-content">

          <div className="hero-section">
            <h1>Built for Productivity Enthusiasts</h1>
            <p>
              A personal project created to help people stay organized, focused, and achieve their goals—one task at a time.
            </p>
            <span className="hero-badge">Solo Developer Project</span>
          </div>

          <div className="tabs-container">
            <button 
              className={`tab ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              The Story
            </button>
            <button 
              className={`tab ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Core Values
            </button>
            <button 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button 
              className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('tech')}
            >
              Technology
            </button>
          </div>

          {activeTab === 'story' && (
            <div className="tab-content story-section">
              <h2>The Story Behind This Project</h2>
              
              <p>
                This productivity platform started as a personal challenge—to build something that I would actually use every day. As someone who struggled with staying organized and tracking goals effectively, I wanted to create a tool that was simple, beautiful, and genuinely useful.
              </p>

              <p>
                I spent countless hours researching productivity methods, studying user experience patterns, and learning new technologies. The goal wasn't just to build another todo app, but to create a comprehensive system that helps people understand their productivity patterns and improve over time.
              </p>

              <div className="highlight-box">
                <h3>Why I Built This</h3>
                <p>
                  Most productivity apps are either too complex with features you'll never use, or too simple to be truly helpful. I wanted something in between—powerful enough to be useful, but simple enough to use every day without friction.
                </p>
              </div>

              <p>
                Every feature you see here was built with intention. From the goal tracking system to the analytics dashboard, each component was designed to solve a real problem I experienced. This isn't a product built by a committee—it's crafted by someone who uses it daily.
              </p>

              <p>
                The journey has been challenging but incredibly rewarding. Learning new technologies, solving complex problems, and iterating based on my own usage has made this project both a technical achievement and a personal triumph.
              </p>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="tab-content">
              <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5em' }}>
                Core Values
              </h2>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="tab-content">
              <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5em' }}>
                What's Included
              </h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="tab-content story-section">
              <h2>Technology Stack</h2>
              
              <p>
                Built with modern web technologies to ensure speed, reliability, and a great user experience. Every technology choice was made deliberately to create the best possible product.
              </p>

              <div className="highlight-box">
                <h3>Built With</h3>
                <div className="tech-stack">
                  {techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <p>
                The frontend is built with Next.js and React for a fast, responsive user interface. Supabase handles authentication and data storage, providing a secure and scalable backend. The entire application is styled with custom CSS for pixel-perfect design control.
              </p>

              <p>
                Performance and user experience are top priorities. The app is optimized for fast load times, smooth animations, and works seamlessly across all devices. Every interaction is carefully crafted to feel natural and responsive.
              </p>
            </div>
          )}

          <div className="developer-card">
            <h2>Made by a Solo Developer</h2>
            <p>
              Hi! I'm the person behind this project. I built this productivity platform from the ground up—from design to development to deployment. It's been an incredible learning experience and labor of love.
            </p>
            <div className="social-links">
              <a href="mailto:gurshaan1124@gmail.com" className="social-link">
                <IoMailOutline size={20} /> Get in Touch
              </a>
              <a href="https://www.artstation.com/gurshh" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaArtstation size={20} /> Artstation
              </a>
              <a href="https://www.instagram.com/gurshhhh_" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} /> Instagram
              </a>
              <a href="https://gurshaangill.vercel.app" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaProjectDiagram size={20} /> Portfolio
              </a>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Join and start organizing your goals today</p>
            <a href="/dashboard" className="cta-button">
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    </>
  );
}