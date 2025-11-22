"use client";
import Image from "next/image";
import HoverScrollText from "./components/HoverScrollText";
import Typewriter from "./components/Typewriter";



import { VscVscode } from "react-icons/vsc";
import { FaYoutube, FaDiscord } from 'react-icons/fa';
import { SiFigma, SiNotion } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub, FaStackOverflow } from 'react-icons/fa';
import { SiMdnwebdocs } from "react-icons/si";
import { SiOpenai } from 'react-icons/si';


import { PiLightningFill } from "react-icons/pi";
import { PiTarget } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { MdNotificationsActive } from "react-icons/md";
import { PiCubeFocusFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";


import { PiSmileySadLight } from "react-icons/pi";
import { IoPhonePortrait } from "react-icons/io5";
import { MdCallMissed } from "react-icons/md";
import { TbCalendarSad } from "react-icons/tb";
import { MdOutlineInsights } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { GrAchievement } from "react-icons/gr";
import { PiPeace } from "react-icons/pi";


import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiUber } from "react-icons/si";
import { FaAirbnb } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";




export default function Home() {
  return (
    <>
    <div>
      <div className="title">
        <h2>Meet</h2>
          <Typewriter 
          words={["Innovation", "Progression", "Organization","Productivity"]} 
          finalWord="NOVORA.AI" 
          typingSpeed={100} 
          pauseTime={800} 
        />
      </div>
      <div className="download-copy">
        <button>
          <img src="windows-logo.png" className="download-img"></img>
            <HoverScrollText>Download for Windows</HoverScrollText>
        </button>
        <button>
            <img src="apple-logo.png" className="apple-img"></img>
            <HoverScrollText>Download for macOS</HoverScrollText> 
        </button>
        </div>
    </div>
    <div className="cred">
      <h2>Trusted by <strong>97,000+ Devs</strong></h2>
    </div>

    <CardsSection />
    <AdditionalSections />

    </>

  );
}

// Add these components to your existing page.jsx (after your existing code)

import { useState, useEffect, useRef } from 'react';

// App Card Component - Minimalist
function AppCard({ name, icon, isProductive, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`feature-card ${isProductive ? 'productive-glow' : 'unproductive-glow'} ${isVisible ? 'visible' : ''}`}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-name">{name}</div>
      <div className={`card-badge ${isProductive ? 'productive' : 'unproductive'}`}>
        {isProductive ? 'Productive' : 'Unproductive'}
      </div>
    </div>
  );
}

// Website Card Component - Minimalist
function WebsiteCard({ name, icon, domain, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`website-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="website-icon">{icon}</div>
      <div className="website-info">
        <div className="website-name">{name}</div>
        <div className="website-domain">{domain}</div>
      </div>
    </div>
  );
}

// Scrolling Companies Component
function ScrollingCompanies() {
  const companies = [
    <TfiMicrosoftAlt />, 
    <FaGoogle />, 
    <FaApple />, 
    <FaMeta />, 
    <FaAmazon />, 
    <RiNetflixFill />, 
    <FaSpotify />, 
    <SiAdobe />, 
    <SiTesla />, 
    <SiUber />,
    <FaAirbnb />, 
    <FaTwitter />, 
    <FaLinkedin />, 
    <FaCcStripe />, 
    <FaShopify />

  ];

  return (
    <div className="scrolling-companies">
      <div className="scrolling-track">
        {companies.map((company, index) => (
          <div key={index} className="company-item">{company}</div>
        ))}
        {/* Duplicate for seamless loop */}
        {companies.map((company, index) => (
          <div key={`dup-${index}`} className="company-item">{company}</div>
        ))}
      </div>
    </div>
  );
}

// Main Cards Section Component
export function CardsSection() {
  const apps = [
    {name: 'VS Code', icon: <VscVscode />, isProductive: true },
    { name: 'YouTube', icon: <FaYoutube />, isProductive: false },
    { name: 'Figma', icon: <SiFigma />, isProductive: true },
    { name: 'Discord', icon: <FaDiscord />, isProductive: false },
    { name: 'Notion', icon: <SiNotion />, isProductive: true },
    { name: 'Twitter', icon: <FaXTwitter />, isProductive: false },
  ];

  const websites = [
    { name: 'GitHub', icon: <FaGithub />, domain: 'github.com' },
    { name: 'Stack Overflow', icon: <FaStackOverflow />, domain: 'stackoverflow.com' },
    { name: 'MDN Docs', icon: <SiMdnwebdocs />, domain: 'developer.mozilla.org' },
    { name: 'ChatGPT', icon: <SiOpenai />, domain: 'chat.openai.com' },
  ];

  return (
    <>
      {/* Scrolling Companies */}
      <ScrollingCompanies />

      {/* Features Section with App Cards */}
      <section className="features-section">
        <div className="section-header">
          <h2>Smart App Tracking</h2>
          <p>AI automatically categorizes your applications</p>
        </div>
        <div className="cards-grid">
          {apps.map((app, index) => (
            <AppCard 
              key={app.name}
              name={app.name}
              icon={app.icon}
              isProductive={app.isProductive}
              delay={index * 50}
            />
          ))}
        </div>
      </section>

      {/* Website Tracking Section */}
      <section className="websites-section">
        <div className="section-header">
          <h2>Website Intelligence</h2>
          <p>Track every site you visit across all browsers</p>
        </div>
        <div className="websites-grid">
          {websites.map((site, index) => (
            <WebsiteCard 
              key={site.name}
              name={site.name}
              icon={site.icon}
              domain={site.domain}
              delay={index * 50}
            />
          ))}
        </div>
      </section>

      {/* AI Learning Section */}
      <section className="ai-section">
        <div className="ai-content">
          <div className="ai-brain">◉</div>
          <h2>AI That Learns Your Habits</h2>
          <p>Toggle any app once, and Novora remembers forever. The more you use it, the smarter it gets.</p>
          <div className="ai-stats">
            <div className="ai-stat">
              <div className="ai-stat-number">10+</div>
              <div className="ai-stat-label">Learning Algorithms</div>
            </div>
            <div className="ai-stat">
              <div className="ai-stat-number">95%</div>
              <div className="ai-stat-label">Accuracy Rate</div>
            </div>
            <div className="ai-stat">
              <div className="ai-stat-number">∞</div>
              <div className="ai-stat-label">Apps Supported</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// In your Home component, add <CardsSection /> after the cred div:
// <CardsSection />

// Interactive Dashboard Preview
export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('daily');
  const [stats, setStats] = useState({
    productive: 6.5,
    unproductive: 2.3,
    focus: 85
  });

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <div className="section-header">
          <h2>Your Productivity Dashboard</h2>
          <p>Beautiful insights at a glance</p>
        </div>
        
        <div className="dashboard-preview">
          <div className="tab-selector">
            <button 
              className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`}
              onClick={() => setActiveTab('daily')}
            >
              Daily
            </button>
            <button 
              className={`tab-btn ${activeTab === 'weekly' ? 'active' : ''}`}
              onClick={() => setActiveTab('weekly')}
            >
              Weekly
            </button>
            <button 
              className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly
            </button>
          </div>

          <div className="stats-display">
            <div className="stat-card productive-stat">
              <div className="stat-icon">✓</div>
              <div className="stat-info">
                <div className="stat-label">Productive Time</div>
                <div className="stat-value">{stats.productive}h</div>
              </div>
            </div>
            <div className="stat-card unproductive-stat">
              <div className="stat-icon">×</div>
              <div className="stat-info">
                <div className="stat-label">Unproductive Time</div>
                <div className="stat-value">{stats.unproductive}h</div>
              </div>
            </div>
            <div className="stat-card focus-stat">
              <div className="stat-icon">◉</div>
              <div className="stat-info">
                <div className="stat-label">Focus Score</div>
                <div className="stat-value">{stats.focus}%</div>
              </div>
            </div>
          </div>

          <div className="chart-preview">
            <div className="chart-bar" style={{ height: '60%' }}></div>
            <div className="chart-bar" style={{ height: '80%' }}></div>
            <div className="chart-bar" style={{ height: '45%' }}></div>
            <div className="chart-bar" style={{ height: '90%' }}></div>
            <div className="chart-bar" style={{ height: '70%' }}></div>
            <div className="chart-bar" style={{ height: '85%' }}></div>
            <div className="chart-bar" style={{ height: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Interactive Features Showcase
export function FeaturesShowcase() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const features = [
    {
      id: 1,
      icon: <PiLightningFill />,
      title: 'Real-Time Tracking',
      description: 'Monitor your productivity as it happens with instant updates',

    },
    {
      id: 2,
      icon: <PiTarget />,
      title: 'Goal Setting',
      description: 'Set daily productivity goals and track your progress',
    },
    {
      id: 3,
      icon: <VscGraph />,
      title: 'Advanced Analytics',
      description: 'Deep dive into your habits with comprehensive reports',

    },
    {
      id: 4,
      icon: <MdNotificationsActive />,
      title: 'Smart Notifications',
      description: 'Get reminded when you spend too much time on distractions',

    },
    {
      id: 5,
      icon: <PiCubeFocusFill />,
      title: 'Focus Sessions',
      description: 'Block distracting apps during deep work periods',

    },
    {
      id: 6,
      icon: <TbReportSearch />,
      title: 'Weekly Reports',
      description: 'Receive detailed insights every week via email',

    }
  ];

  return (
    <section className="features-showcase">
      <div className="showcase-container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to master your productivity</p>
        </div>

        <div className="features-grid-showcase">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-showcase-card ${hoveredFeature === feature.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon-large">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comparison Section
export function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="comparison-section">
      <div className="comparison-container">
        <div className="section-header">
          <h2>Before & After Novora</h2>
          <p>See the difference productivity tracking makes</p>
        </div>

        <div className={`comparison-grid ${isVisible ? 'visible' : ''}`}>
          <div className="comparison-card before-card">
            <div className="comparison-label">Without Novora</div>
            <div className="comparison-content">
              <div className="comparison-item">
                <span className="comparison-icon sad"><PiSmileySadLight /></span>
                <span>No idea where time goes</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon sad"><IoPhonePortrait /></span>
                <span>Constant distractions</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon sad"><MdCallMissed /></span>
                <span>Missed deadlines</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon sad"><TbCalendarSad /></span>
                <span>High stress levels</span>
              </div>
            </div>
          </div>

          <div className="comparison-divider">
            <div className="arrow-icon">→</div>
          </div>

          <div className="comparison-card after-card">
            <div className="comparison-label">With Novora</div>
            <div className="comparison-content">
              <div className="comparison-item">
                <span className="comparison-icon happy"><MdOutlineInsights /></span>
                <span>Clear productivity insights</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon happy"><TbTargetArrow /></span>
                <span>Better focus & discipline</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon happy"><GrAchievement /></span>
                <span>Consistent goal achievement</span>
              </div>
              <div className="comparison-item">
                <span className="comparison-icon happy"><PiPeace /></span>
                <span>Peace of mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Interactive Timeline
export function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: 'Download & Install', description: 'Get started in under 60 seconds', time: '30 sec' },
    { title: 'AI Learns Your Apps', description: 'Novora categorizes your applications', time: '5 min' },
    { title: 'Start Tracking', description: 'Your productivity data begins flowing', time: '1 hour' },
    { title: 'Get Insights', description: 'Receive your first weekly report', time: '7 days' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="section-header">
          <h2>Get Started in Minutes</h2>
          <p>Your journey to better productivity</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`timeline-step ${activeStep === index ? 'active' : ''} ${activeStep > index ? 'completed' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="timeline-marker">
                <div className="timeline-number">{index + 1}</div>
              </div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="timeline-time">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Novora helped me realize I was spending 3+ hours daily on social media. Life-changing insights!",
      author: "Sarah Chen",
      role: "Software Engineer",
      company: "Google"
    },
    {
      quote: "The AI categorization is incredibly accurate. It knows my work patterns better than I do.",
      author: "Marcus Rodriguez",
      role: "Product Designer",
      company: "Figma"
    },
    {
      quote: "I increased my productive hours by 40% in just 2 weeks. Best productivity tool I've ever used.",
      author: "Emily Watson",
      role: "Founder & CEO",
      company: "TechStart"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Loved by Developers</h2>
          <p>Join thousands who've transformed their productivity</p>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-quote">{testimonials[currentTestimonial].quote}</p>
          <div className="testimonial-author">
            <div className="author-avatar">{testimonials[currentTestimonial].author[0]}</div>
            <div className="author-info">
              <div className="author-name">{testimonials[currentTestimonial].author}</div>
              <div className="author-role">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button onClick={prevTestimonial} className="testimonial-btn">←</button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
            <button onClick={nextTestimonial} className="testimonial-btn">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Master Your Productivity?</h2>
        <p>Join 97,000+ developers who've taken control of their time</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">
            <span>Download for Windows</span>
          </button>
          <button className="cta-btn secondary">
            <span>Download for macOS</span>
          </button>
        </div>
        <p className="cta-note">Free forever • No credit card required • 5-minute setup</p>
      </div>
    </section>
  );
}

// Export all components together
export function AdditionalSections() {
  return (
    <>
      <DashboardPreview />
      <FeaturesShowcase />
      <ComparisonSection />
      <TimelineSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}