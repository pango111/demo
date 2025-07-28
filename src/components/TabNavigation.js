import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'single', label: 'Single Analysis', description: 'Extract skills from text' },
    { id: 'batch', label: 'Batch Processing', description: 'Process multiple files' },
    { id: 'course', label: 'Course Mapping', description: 'Align courses with industry skills' }
  ];

  return (
    <nav className="tab-navigation">
      <div className="nav-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          >
            <span className="tab-label">{tab.label}</span>
            <span className="tab-description">{tab.description}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;