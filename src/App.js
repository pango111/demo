// App.js 示例结构
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SingleAnalysis from './components/services/SingleAnalysis';
import BatchProcessing from './components/services/BatchProcessing';
import CourseMapping from './components/services/CourseMapping';
import Footer from './components/Footer';
// 在 src/index.js 或 src/App.js 顶部
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      // 在App.js的renderCurrentPage函数中
      case 'batch-processing':
        return <BatchProcessing setCurrentPage={setCurrentPage} />;
      case 'single-analysis':
        return <SingleAnalysis setCurrentPage={setCurrentPage} />;
      case 'course-mapping':
        return <CourseMapping setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;



