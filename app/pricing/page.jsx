"use client";
import { useState } from 'react';
import { FaCheck, FaTimes, FaChartLine, FaRocket, FaBuilding, FaStar } from 'react-icons/fa';
import { MdTimer, MdNotifications, MdCloud, MdSecurity, MdGroups, MdPriorityHigh } from 'react-icons/md';
import { IoSparkles, IoShieldCheckmark } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals getting started",
    features: [
      { name: "Basic app & website tracking", included: true },
      { name: "Daily productivity reports", included: true },
      { name: "Up to 5 apps categorized", included: true },
      { name: "7-day data history", included: true },
      { name: "AI-powered insights", included: false },
      { name: "Goal setting & tracking", included: false },
      { name: "Weekly detailed reports", included: false },
      { name: "Custom notifications", included: false },
      { name: "Export data (CSV)", included: false },
      { name: "Focus mode blocking", included: false },
      { name: "Priority support", included: false },
      { name: "Team collaboration", included: false },
    ],
    highlighted: true,
    buttonText: "Get Started Free",
    icon: <IoSparkles />,
    badge: "Most Popular"
  },
  {
    name: "Starter",
    price: "$5.99",
    period: "per month",
    description: "For professionals who want more control",
    features: [
      { name: "Basic app & website tracking", included: true },
      { name: "Daily productivity reports", included: true },
      { name: "Unlimited apps categorized", included: true },
      { name: "30-day data history", included: true },
      { name: "AI-powered insights", included: true },
      { name: "Goal setting & tracking", included: true },
      { name: "Weekly detailed reports", included: false },
      { name: "Custom notifications", included: false },
      { name: "Export data (CSV)", included: false },
      { name: "Focus mode blocking", included: false },
      { name: "Priority support", included: false },
      { name: "Team collaboration", included: false },
    ],
    buttonText: "Start 14-Day Trial",
    icon: <FaRocket />,
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "per month",
    description: "Advanced features for power users",
    features: [
      { name: "Basic app & website tracking", included: true },
      { name: "Daily productivity reports", included: true },
      { name: "Unlimited apps categorized", included: true },
      { name: "Unlimited data history", included: true },
      { name: "AI-powered insights", included: true },
      { name: "Goal setting & tracking", included: true },
      { name: "Weekly detailed reports", included: true },
      { name: "Custom notifications", included: true },
      { name: "Export data (CSV, JSON)", included: true },
      { name: "Focus mode blocking", included: false },
      { name: "Priority support", included: false },
      { name: "Team collaboration", included: false },
    ],
    buttonText: "Start 14-Day Trial",
    icon: <FaChartLine />,
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "per month",
    description: "Complete solution for teams",
    features: [
      { name: "Basic app & website tracking", included: true },
      { name: "Daily productivity reports", included: true },
      { name: "Unlimited apps categorized", included: true },
      { name: "Unlimited data history", included: true },
      { name: "AI-powered insights", included: true },
      { name: "Goal setting & tracking", included: true },
      { name: "Weekly detailed reports", included: true },
      { name: "Custom notifications", included: true },
      { name: "Export data (CSV, JSON, API)", included: true },
      { name: "Focus mode blocking", included: true },
      { name: "Priority support (24/7)", included: true },
      { name: "Team collaboration (up to 10)", included: true },
    ],
    buttonText: "Contact Sales",
    icon: <FaBuilding />,
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Starter, Pro, and Enterprise plans include a 14-day free trial. No credit card required to start."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely. You can cancel anytime from your account settings. You'll retain access until the end of your billing period."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes! Students get 50% off Pro and Enterprise plans with a valid .edu email address."
  },
  {
    question: "What happens to my data if I downgrade?",
    answer: "Your data is always safe. If you downgrade, you'll retain access to data within your new plan's limits."
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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

        .pricing-wrapper {
          min-height: 100vh;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }

        .pricing-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 40px;
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pricing-title {
          font-size: 4.5em;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #000000 0%, #434343 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pricing-subtitle {
          font-size: 1.3em;
          color: #6b7280;
          margin-bottom: 40px;
        }

        .billing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease 0.2s backwards;
        }

        .billing-option {
          padding: 12px 32px;
          border: 2px solid #e5e7eb;
          background: #ffffff;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #6b7280;
        }

        .billing-option.active {
          background: #000000;
          color: #ffffff;
          border-color: #000000;
        }

        .billing-option:hover:not(.active) {
          border-color: #000000;
          transform: translateY(-2px);
        }

        .savings-badge {
          background: #10b981;
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }

        .pricing-card {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 24px;
          padding: 40px 32px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease backwards;
        }

        .pricing-card:nth-child(1) { animation-delay: 0.1s; }
        .pricing-card:nth-child(2) { animation-delay: 0.2s; }
        .pricing-card:nth-child(3) { animation-delay: 0.3s; }
        .pricing-card:nth-child(4) { animation-delay: 0.4s; }

        .pricing-card.highlighted {
          border-color: #000000;
          border-width: 3px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          transform: scale(1.02);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
          border-color: #000000;
        }

        .pricing-card.highlighted:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .plan-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #000000;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75em;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .plan-icon {
          font-size: 48px;
          margin-bottom: 20px;
          color: #000000;
        }

        .pricing-card h2 {
          font-size: 2.2em;
          font-weight: 700;
          margin-bottom: 8px;
          color: #000000;
          letter-spacing: -0.02em;
        }

        .plan-description {
          color: #6b7280;
          font-size: 0.95em;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .price-container {
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 2px solid #f3f4f6;
        }

        .pricing-card p.price {
          font-size: 3em;
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }

        .price-period {
          font-size: 0.9em;
          color: #6b7280;
          font-weight: 500;
        }

        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex: 1;
        }

        .pricing-card ul li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 0.95em;
          line-height: 1.5;
        }

        .feature-icon {
          font-size: 1.2em;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .feature-icon.included {
          color: #10b981;
        }

        .feature-icon.not-included {
          color: #d1d5db;
        }

        .pricing-card ul li span {
          color: #374151;
        }

        .pricing-card ul li span.not-included {
          color: #9ca3af;
          text-decoration: line-through;
        }

        .pricing-card button {
          width: 100%;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1em;
          cursor: pointer;
          border: 2px solid #000000;
          background-color: #ffffff;
          color: #000000;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .pricing-card.highlighted button {
          background-color: #000000;
          color: #ffffff;
        }

        .pricing-card button:hover {
          background-color: #000000;
          color: #ffffff;
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .comparison-section {
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease 0.4s backwards;
        }

        .comparison-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .comparison-header h2 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000000;
        }

        .comparison-header p {
          font-size: 1.1em;
          color: #6b7280;
        }

        .comparison-table {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 20px;
          overflow: hidden;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          border-bottom: 1px solid #e5e7eb;
          transition: background 0.2s ease;
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .comparison-row:hover {
          background: #f9fafb;
        }

        .comparison-row.header {
          background: #000000;
          color: #ffffff;
          font-weight: 700;
        }

        .comparison-row.header:hover {
          background: #000000;
        }

        .comparison-cell {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.95em;
        }

        .comparison-cell:first-child {
          justify-content: flex-start;
          font-weight: 600;
        }

        .comparison-cell svg {
          font-size: 1.5em;
        }

        .faq-section {
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease 0.6s backwards;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .faq-header h2 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000000;
        }

        .faq-header p {
          font-size: 1.1em;
          color: #6b7280;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
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
          font-size: 1.2em;
          transition: transform 0.3s ease;
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
          line-height: 1.6;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 0 28px 24px 28px;
        }

        .cta-section {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          border-radius: 24px;
          padding: 80px 60px;
          text-align: center;
          color: #ffffff;
          animation: fadeInUp 0.8s ease 0.8s backwards;
        }

        .cta-section h2 {
          font-size: 3em;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .cta-section p {
          font-size: 1.2em;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 16px 40px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1em;
          cursor: pointer;
          border: 2px solid #ffffff;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background: #ffffff;
          color: #000000;
        }

        .cta-btn.secondary {
          background: transparent;
          color: #ffffff;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1200px) {
          .comparison-row {
            grid-template-columns: 1.5fr repeat(4, 1fr);
          }
        }

        @media (max-width: 968px) {
          .pricing-container {
            padding: 40px 20px;
          }

          .pricing-title {
            font-size: 3em;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .comparison-table {
            overflow-x: auto;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 40px 24px;
          }

          .cta-section h2 {
            font-size: 2em;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="pricing-wrapper">
        <div className="pricing-container">
          <div className="pricing-header">
            <h1 className="pricing-title">Simple, Transparent Pricing</h1>
            <p className="pricing-subtitle">
              Choose the perfect plan for your productivity journey. Always flexible, cancel anytime.
            </p>
          </div>

          <div className="billing-toggle">
            <button
              className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-option ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
            <span className="savings-badge">Save 20%</span>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              >
                {plan.badge && <span className="plan-badge">{plan.badge}</span>}
                <div className="plan-icon">{plan.icon}</div>
                <h2>{plan.name}</h2>
                <p className="plan-description">{plan.description}</p>
                
                <div className="price-container">
                  <p className="price">{plan.price}</p>
                  <p className="price-period">{plan.period}</p>
                </div>

                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature.included ? (
                        <FaCheck className="feature-icon included" />
                      ) : (
                        <FaTimes className="feature-icon not-included" />
                      )}
                      <span className={!feature.included ? 'not-included' : ''}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button>{plan.buttonText}</button>
              </div>
            ))}
          </div>

          <div className="comparison-section">
            <div className="comparison-header">
              <h2>Compare All Features</h2>
              <p>Detailed breakdown of what's included in each plan</p>
            </div>
            <div className="comparison-table">
              <div className="comparison-row header">
                <div className="comparison-cell">Feature</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Starter</div>
                <div className="comparison-cell">Pro</div>
                <div className="comparison-cell">Enterprise</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Apps Tracked</div>
                <div className="comparison-cell">5</div>
                <div className="comparison-cell">Unlimited</div>
                <div className="comparison-cell">Unlimited</div>
                <div className="comparison-cell">Unlimited</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Data History</div>
                <div className="comparison-cell">7 days</div>
                <div className="comparison-cell">30 days</div>
                <div className="comparison-cell">Unlimited</div>
                <div className="comparison-cell">Unlimited</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">AI Insights</div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaCheck style={{ color: '#10b981' }} /></div>
                <div className="comparison-cell"><FaCheck style={{ color: '#10b981' }} /></div>
                <div className="comparison-cell"><FaCheck style={{ color: '#10b981' }} /></div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Team Collaboration</div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaCheck style={{ color: '#10b981' }} /></div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Priority Support</div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell"><FaTimes style={{ color: '#d1d5db' }} /></div>
                <div className="comparison-cell">24/7</div>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our pricing</p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
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

          <div className="cta-section">
            <h2>Ready to Boost Your Productivity?</h2>
            <p>Join 97,000+ developers who've transformed their workflow with Novora AI</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Start Free Trial</button>
              <button className="cta-btn secondary">View Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}