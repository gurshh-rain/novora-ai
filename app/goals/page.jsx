"use client";
import { useState } from 'react';
import { LuGoal, LuPlus, LuTrash2, LuCheck } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Complete 50 tasks this week", progress: 84, target: 50, current: 42, category: "productivity", tags: ["work", "urgent"] },
    { id: 2, title: "Work 40 productive hours", progress: 71, target: 40, current: 28.5, category: "time", tags: ["work"] },
    { id: 3, title: "Maintain 7-day streak", progress: 100, target: 7, current: 7, category: "consistency", tags: ["daily", "habit"] },
    { id: 4, title: "Learn new productivity technique", progress: 60, target: 1, current: 0.6, category: "learning", tags: ["personal", "growth"] }
  ]);

  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalTags, setNewGoalTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [selectedTags, setSelectedTags] = useState([]);

  const addGoal = () => {
    if (newGoalTitle.trim()) {
      setGoals([...goals, {
        id: Date.now(),
        title: newGoalTitle,
        progress: 0,
        target: 100,
        current: 0,
        category: "custom",
        tags: newGoalTags
      }]);
      setNewGoalTitle('');
      setNewGoalTags([]);
      setTagInput('');
      setShowAddForm(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !newGoalTags.includes(tagInput.trim())) {
      setNewGoalTags([...newGoalTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setNewGoalTags(newGoalTags.filter(tag => tag !== tagToRemove));
  };

  const toggleFilterTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  // Get all unique tags from all goals
  const allTags = [...new Set(goals.flatMap(goal => goal.tags || []))];

  // Filter and sort goals
  const getFilteredAndSortedGoals = () => {
    let filtered = [...goals];

    // Filter by tags (if any selected)
    if (selectedTags.length > 0) {
      filtered = filtered.filter(goal => 
        selectedTags.some(tag => goal.tags?.includes(tag))
      );
    }

    // Sort
    switch (sortBy) {
      case 'progress-high':
        return filtered.sort((a, b) => b.progress - a.progress);
      case 'progress-low':
        return filtered.sort((a, b) => a.progress - b.progress);
      case 'title':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'category':
        return filtered.sort((a, b) => a.category.localeCompare(b.category));
      default:
        return filtered;
    }
  };

  const displayedGoals = getFilteredAndSortedGoals();

  const getCategoryColor = (category) => {
    const colors = {
      productivity: { bg: '#dbeafe', text: '#1e40af' },
      time: { bg: '#d1fae5', text: '#065f46' },
      consistency: { bg: '#fed7aa', text: '#9a3412' },
      learning: { bg: '#e9d5ff', text: '#6b21a8' },
      custom: { bg: '#f3f4f6', text: '#374151' }
    };
    return colors[category] || colors.custom;
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .goals-container {
            margin-top: 15vh;
          min-height: 100vh;
          background: white;
          padding: 40px 20px;
        }

        .goals-content {
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
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .header-left h1 {
          font-size: 3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-left p {
          font-size: 1.2em;
          color: #6b7280;
        }

        .add-goal-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #000;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-goal-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .add-goal-form {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 32px;
        }

        .add-goal-form h3 {
          font-size: 1.5em;
          margin-bottom: 20px;
          color: #000;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input {
          width: 100%;
          padding: 14px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1em;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #000;
        }

        .form-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #000;
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #000;
          border: 2px solid #e5e7eb;
        }

        .btn-secondary:hover {
          border-color: #9ca3af;
        }

        .goals-grid {
          display: grid;
          gap: 24px;
        }

        .goal-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .goal-card:hover {
          border-color: #9ca3af;
          transform: translateY(-4px);
        }

        .goal-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 20px;
        }

        .goal-info h3 {
          font-size: 1.3em;
          font-weight: 700;
          color: #000;
          margin-bottom: 8px;
        }

        .goal-category {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85em;
          font-weight: 600;
          text-transform: capitalize;
        }

        .goal-actions {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          background: #f3f4f6;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .icon-btn:hover {
          background: #e5e7eb;
        }

        .icon-btn.delete:hover {
          background: #fee2e2;
          color: #dc2626;
        }

        .progress-section {
          margin-top: 20px;
        }

        .progress-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 0.95em;
        }

        .progress-label {
          color: #6b7280;
          font-weight: 500;
        }

        .progress-value {
          color: #000;
          font-weight: 700;
        }

        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: #f3f4f6;
          border-radius: 6px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
          border-radius: 6px;
          transition: width 0.5s ease;
        }

        .completion-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          padding: 8px 16px;
          background: #d1fae5;
          color: #065f46;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9em;
        }

        .filter-sort-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 32px;
          padding: 24px;
          background: #f9fafb;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .filter-header h3 {
          font-size: 1.1em;
          font-weight: 700;
          color: #000;
        }

        .clear-filters-btn {
          padding: 8px 16px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.9em;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-filters-btn:hover {
          border-color: #9ca3af;
          color: #000;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .filter-label {
          font-size: 0.95em;
          font-weight: 600;
          color: #374151;
        }

        .tags-filter-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag-filter-chip {
          padding: 8px 16px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tag-filter-chip:hover {
          border-color: #9ca3af;
          transform: translateY(-2px);
        }

        .tag-filter-chip.active {
          background: #000;
          color: white;
          border-color: #000;
        }

        .sort-options {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .sort-btn {
          padding: 10px 20px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.9em;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sort-btn:hover {
          border-color: #9ca3af;
        }

        .sort-btn.active {
          background: #000;
          color: white;
          border-color: #000;
        }

        .select-input {
          padding: 10px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1em;
          font-weight: 500;
          background: white;
          cursor: pointer;
          transition: border-color 0.3s ease;
          min-width: 180px;
        }

        .select-input:focus {
          outline: none;
          border-color: #000;
        }

        .select-input:hover {
          border-color: #9ca3af;
        }

        .goal-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .tag {
          padding: 4px 12px;
          background: #f3f4f6;
          color: #374151;
          border-radius: 6px;
          font-size: 0.85em;
          font-weight: 500;
        }

        .tag-input-container {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .tag-input {
          flex: 1;
          padding: 10px 14px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 0.95em;
          transition: border-color 0.3s ease;
        }

        .tag-input:focus {
          outline: none;
          border-color: #000;
        }

        .add-tag-btn {
          padding: 10px 20px;
          background: #f3f4f6;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #374151;
        }

        .add-tag-btn:hover {
          background: #e5e7eb;
        }

        .selected-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .selected-tag {
          padding: 6px 12px;
          background: #000;
          color: white;
          border-radius: 8px;
          font-size: 0.85em;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .remove-tag-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.1em;
          line-height: 1;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .remove-tag-btn:hover {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .header-left h1 {
            font-size: 2em;
          }

          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="goals-container">
        <div className="goals-content">
          <a href="/dashboard" className="back-button">
            <IoArrowBack /> Back to Dashboard
          </a>

          <div className="page-header">
            <div className="header-left">
              <h1>
                <LuGoal /> Goals
              </h1>
              <p>Set and achieve your productivity goals</p>
            </div>
            <button className="add-goal-btn" onClick={() => setShowAddForm(!showAddForm)}>
              <LuPlus /> Add New Goal
            </button>
          </div>

          {showAddForm && (
            <div className="add-goal-form">
              <h3>Create New Goal</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your goal..."
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="filter-label">Add Tags</label>
                <div className="tag-input-container">
                  <input
                    type="text"
                    className="tag-input"
                    placeholder="Type a tag and press Add..."
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <button className="add-tag-btn" onClick={addTag}>
                    Add Tag
                  </button>
                </div>
                {newGoalTags.length > 0 && (
                  <div className="selected-tags">
                    {newGoalTags.map((tag, index) => (
                      <span key={index} className="selected-tag">
                        {tag}
                        <button 
                          className="remove-tag-btn" 
                          onClick={() => removeTag(tag)}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" onClick={addGoal}>
                  Create Goal
                </button>
                <button className="btn btn-secondary" onClick={() => {
                  setShowAddForm(false);
                  setNewGoalTitle('');
                  setNewGoalTags([]);
                  setTagInput('');
                }}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="filter-sort-section">
            <div className="filter-header">
              <h3>Filter & Sort</h3>
              {selectedTags.length > 0 && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear Filters
                </button>
              )}
            </div>

            <div className="filter-group">
              <label className="filter-label">Filter by Tags</label>
              <div className="tags-filter-container">
                {allTags.length > 0 ? (
                  allTags.map(tag => (
                    <button
                      key={tag}
                      className={`tag-filter-chip ${selectedTags.includes(tag) ? 'active' : ''}`}
                      onClick={() => toggleFilterTag(tag)}
                    >
                      {tag}
                    </button>
                  ))
                ) : (
                  <span style={{ color: '#9ca3af', fontSize: '0.9em' }}>No tags available yet</span>
                )}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort by</label>
              <div className="sort-options">
                <button 
                  className={`sort-btn ${sortBy === 'default' ? 'active' : ''}`}
                  onClick={() => setSortBy('default')}
                >
                  Default
                </button>
                <button 
                  className={`sort-btn ${sortBy === 'progress-high' ? 'active' : ''}`}
                  onClick={() => setSortBy('progress-high')}
                >
                  Progress ↓
                </button>
                <button 
                  className={`sort-btn ${sortBy === 'progress-low' ? 'active' : ''}`}
                  onClick={() => setSortBy('progress-low')}
                >
                  Progress ↑
                </button>
                <button 
                  className={`sort-btn ${sortBy === 'title' ? 'active' : ''}`}
                  onClick={() => setSortBy('title')}
                >
                  Title A-Z
                </button>
                <button 
                  className={`sort-btn ${sortBy === 'category' ? 'active' : ''}`}
                  onClick={() => setSortBy('category')}
                >
                  Category
                </button>
              </div>
            </div>
          </div>

          <div className="goals-grid">
            {displayedGoals.map((goal) => {
              const categoryColor = getCategoryColor(goal.category);
              return (
                <div key={goal.id} className="goal-card">
                  <div className="goal-header">
                    <div className="goal-info">
                      <h3>{goal.title}</h3>
                      <span 
                        className="goal-category" 
                        style={{ background: categoryColor.bg, color: categoryColor.text }}
                      >
                        {goal.category}
                      </span>
                      {goal.tags && goal.tags.length > 0 && (
                        <div className="goal-tags">
                          {goal.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="goal-actions">
                      <button className="icon-btn delete" onClick={() => deleteGoal(goal.id)}>
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-stats">
                      <span className="progress-label">Progress</span>
                      <span className="progress-value">{goal.progress}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar" style={{ width: `${goal.progress}%` }} />
                    </div>
                    {goal.progress === 100 && (
                      <div className="completion-badge">
                        <LuCheck /> Completed!
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}