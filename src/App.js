import React, { useState } from 'react';
import './styles/index.css';

// Import components
import DemoHeader from './components/DemoHeader';
import TabNavigation from './components/TabNavigation';
import SingleAnalysis from './components/SingleAnalysis';
import BatchProcessing from './components/BatchProcessing';
import CourseMapping from './components/CourseMapping';

function App() {
  const [activeTab, setActiveTab] = useState('single');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'single':
        return <SingleAnalysis />;
      case 'batch':
        return <BatchProcessing />;
      case 'course':
        return <CourseMapping />;
      default:
        return <SingleAnalysis />;
    }
  };

  return (
    <div className="app">
      <DemoHeader />
      <TabNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;