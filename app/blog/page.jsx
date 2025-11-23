"use client";
import { useState } from 'react';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import { MdTrendingUp, MdLightbulb, MdSpeed, MdPsychology } from 'react-icons/md';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [email, setEmail] = useState('');

    const articles = [
        {
            id: 1,
            date: "November 24, 2025",
            title: "60+ Most Common Habits to Improve Productivity",
            excerpt: "Discover scientifically-proven habits that top performers use daily to maximize their output and maintain focus.",
            category: "Productivity",
            readTime: "12 min read",
            author: "Gurshaan Gill",
            featured: true
        },
        {
            id: 2,
            date: "November 20, 2025",
            title: "How AI is Revolutionizing Time Management",
            excerpt: "Learn how Novora's AI algorithms analyze your patterns to create personalized productivity strategies.",
            category: "AI & Technology",
            readTime: "8 min read",
            author: "Marcus Rodriguez"
        },
        {
            id: 3,
            date: "November 15, 2025",
            title: "The Science Behind Focus: Why Distractions Kill Productivity",
            excerpt: "Deep dive into neuroscience research showing how context switching affects your brain and productivity.",
            category: "Research",
            readTime: "10 min read",
            author: "Dr. Emily Watson"
        },
        {
            id: 4,
            date: "November 10, 2025",
            title: "5 Goal-Setting Frameworks Used by Fortune 500 Companies",
            excerpt: "Master the goal-setting techniques that industry leaders use to achieve ambitious targets consistently.",
            category: "Strategy",
            readTime: "15 min read",
            author: "James Park"
        },
        {
            id: 5,
            date: "November 5, 2025",
            title: "From Burnout to Balance: A Developer's Journey",
            excerpt: "Real story of how one software engineer used Novora to reclaim 15 hours per week and eliminate burnout.",
            category: "Case Studies",
            readTime: "7 min read",
            author: "Alex Thompson"
        },
        {
            id: 6,
            date: "October 30, 2025",
            title: "Data-Driven Productivity: Your Weekly Report Explained",
            excerpt: "Understanding the metrics that matter and how to use your Novora analytics to improve daily habits.",
            category: "How-To",
            readTime: "6 min read",
            author: "Lisa Chang"
        },
        {
            id: 7,
            date: "October 25, 2025",
            title: "The Psychology of Procrastination and How to Beat It",
            excerpt: "Explore the psychological reasons we procrastinate and proven strategies to overcome them.",
            category: "Psychology",
            readTime: "11 min read",
            author: "Dr. Michael Roberts"
        },
        {
            id: 8,
            date: "October 20, 2025",
            title: "Building a Sustainable Remote Work Routine",
            excerpt: "Create a work-from-home schedule that maximizes productivity while maintaining work-life balance.",
            category: "Remote Work",
            readTime: "9 min read",
            author: "Nina Patel"
        }
    ];

    const categories = [
        { name: 'all', label: 'All Articles', icon: <MdTrendingUp /> },
        { name: 'Productivity', label: 'Productivity', icon: <MdSpeed /> },
        { name: 'AI & Technology', label: 'AI & Tech', icon: <MdPsychology /> },
        { name: 'Psychology', label: 'Psychology', icon: <MdLightbulb /> }
    ];

    const filteredArticles = selectedCategory === 'all' 
        ? articles 
        : articles.filter(article => article.category === selectedCategory);

    const featuredArticle = articles.find(article => article.featured);

    const handleSubscribe = () => {
        if (email) {
            alert(`Thanks for subscribing with ${email}!`);
            setEmail('');
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
                    color: #131313ff;
                }

                .blog-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 80px 60px;
                }

                .blog-header {
                    margin-bottom: 80px;
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

                .blog-title h1 {
                    font-size: 5em;
                    font-weight: 700;
                    letter-spacing: -0.05em;
                    margin-bottom: 20px;
                    background: linear-gradient(135deg, #000000 0%, #434343 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .blog-title p {
                    font-size: 1.1em;
                    color: #131313ff;
                    line-height: 1.3;
                    max-width: 400px;
                    font-weight: 400;
                }

                .category-filters {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 60px;
                    flex-wrap: wrap;
                    animation: fadeInUp 0.8s ease 0.2s backwards;
                }

                .category-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    border: 1px solid #e5e7eb;
                    background: #ffffff;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #6b7280;
                }

                .category-btn:hover {
                    border-color: #000000;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .category-btn.active {
                    background: #000000;
                    color: #ffffff;
                    border-color: #000000;
                }

                .category-btn svg {
                    font-size: 1.2em;
                }

                .featured-article {
                    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
                    border-radius: 24px;
                    padding: 60px;
                    margin-bottom: 80px;
                    position: relative;
                    overflow: hidden;
                    animation: fadeInUp 0.8s ease 0.4s backwards;
                    transition: transform 0.3s ease;
                    cursor: pointer;
                }

                .featured-article:hover {
                    transform: translateY(-4px);
                }

                .featured-article::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
                    pointer-events: none;
                }

                .featured-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 0.85em;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 24px;
                    backdrop-filter: blur(10px);
                }

                .featured-article .article-meta {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 20px;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9em;
                }

                .featured-article .article-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .featured-article h2 {
                    color: #ffffff;
                    font-size: 3em;
                    font-weight: 700;
                    letter-spacing: -0.03em;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .featured-article .article-excerpt {
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 1.15em;
                    line-height: 1.6;
                    margin-bottom: 32px;
                    max-width: 700px;
                }

                .featured-article button {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 32px;
                    background: #ffffff;
                    color: #000000;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .featured-article button:hover {
                    transform: translateX(4px);
                    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.3);
                }

                .articles-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 32px;
                    margin-bottom: 80px;
                }

                .article-card {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 20px;
                    padding: 36px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    animation: fadeInUp 0.6s ease backwards;
                }

                .article-card:nth-child(1) { animation-delay: 0.1s; }
                .article-card:nth-child(2) { animation-delay: 0.2s; }
                .article-card:nth-child(3) { animation-delay: 0.3s; }
                .article-card:nth-child(4) { animation-delay: 0.4s; }
                .article-card:nth-child(5) { animation-delay: 0.5s; }
                .article-card:nth-child(6) { animation-delay: 0.6s; }

                .article-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #000000, #434343);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .article-card:hover::before {
                    transform: scaleX(1);
                }

                .article-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                    border-color: #000000;
                }

                .article-category {
                    display: inline-block;
                    background: #f3f4f6;
                    color: #000000;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 0.8em;
                    font-weight: 600;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .article-card .article-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                    color: #6b7280;
                    font-size: 0.85em;
                }

                .article-card .article-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .article-card h3 {
                    color: #000000;
                    font-size: 1.5em;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin-bottom: 16px;
                    line-height: 1.3;
                }

                .article-card .article-excerpt {
                    color: #6b7280;
                    font-size: 0.95em;
                    line-height: 1.6;
                    margin-bottom: 24px;
                }

                .article-card .read-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #000000;
                    font-weight: 600;
                    font-size: 0.9em;
                    transition: gap 0.3s ease;
                }

                .article-card:hover .read-more {
                    gap: 12px;
                }

                .newsletter-section {
                    background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
                    border-radius: 24px;
                    padding: 80px 60px;
                    text-align: center;
                    animation: fadeInUp 0.8s ease;
                }

                .newsletter-section h2 {
                    font-size: 2.5em;
                    font-weight: 700;
                    margin-bottom: 16px;
                    color: #000000;
                }

                .newsletter-section p {
                    font-size: 1.1em;
                    color: #6b7280;
                    margin-bottom: 40px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .newsletter-form {
                    display: flex;
                    gap: 12px;
                    max-width: 500px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .newsletter-form input {
                    flex: 1;
                    min-width: 280px;
                    padding: 16px 20px;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    font-size: 1em;
                    transition: all 0.3s ease;
                }

                .newsletter-form input:focus {
                    outline: none;
                    border-color: #000000;
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
                }

                .newsletter-form button {
                    padding: 16px 32px;
                    background: #000000;
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .newsletter-form button:hover {
                    background: #1f2937;
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .blog-container {
                        padding: 40px 20px;
                    }

                    .blog-title h1 {
                        font-size: 3em;
                    }

                    .blog-title p {
                        font-size: 1em;
                    }

                    .featured-article {
                        padding: 40px 32px;
                    }

                    .featured-article h2 {
                        font-size: 2em;
                    }

                    .articles-grid {
                        grid-template-columns: 1fr;
                    }

                    .newsletter-section {
                        padding: 40px 24px;
                    }

                    .newsletter-section h2 {
                        font-size: 1.8em;
                    }

                    .newsletter-form {
                        flex-direction: column;
                    }

                    .newsletter-form input {
                        min-width: 100%;
                    }
                }
            `}</style>

            <div className="blog-container">
                <div className="blog-header">
                    <div className="blog-title">
                        <h1>Blog</h1>
                        <p>
                            Learn more about Novora AI, and how we can help you achieve your goals 
                            by using AI to create goal projections and timelines.
                        </p>
                    </div>
                </div>

                <div className="category-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.name)}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {selectedCategory === 'all' && featuredArticle && (
                    <div className="featured-article">
                        <span className="featured-badge">Featured Article</span>
                        <div className="article-meta">
                            <span className="article-meta-item">
                                <FaClock />
                                {featuredArticle.date}
                            </span>
                            <span className="article-meta-item">
                                <FaUser />
                                {featuredArticle.author}
                            </span>
                            <span className="article-meta-item">
                                {featuredArticle.readTime}
                            </span>
                        </div>
                        <h2>{featuredArticle.title}</h2>
                        <p className="article-excerpt">{featuredArticle.excerpt}</p>
                        <button><a href='/article'>
                            Read Full Article
                            </a>
                            <FaArrowRight />
                        </button>
                    </div>
                )}

                <div className="articles-grid">
                    {filteredArticles.filter(article => !article.featured).map((article) => (
                        <div key={article.id} className="article-card">
                            <span className="article-category">{article.category}</span>
                            <div className="article-meta">
                                <span className="article-meta-item">
                                    <FaClock />
                                    {article.date}
                                </span>
                                <span className="article-meta-item">
                                    {article.readTime}
                                </span>
                            </div>
                            <h3>{article.title}</h3>
                            <p className="article-excerpt">{article.excerpt}</p>
                            <span className="read-more">
                                Read More
                                <FaArrowRight />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="newsletter-section">
                    <h2>Stay Updated</h2>
                    <p>
                        Get the latest productivity insights, AI updates, and exclusive tips 
                        delivered directly to your inbox every week.
                    </p>
                    <div className="newsletter-form">
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubscribe}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;