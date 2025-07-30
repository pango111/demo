// ========================================
// 方案1: 终极App.js修复版本
// ========================================

// App.js - 终极修复版本
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SingleAnalysis from './components/services/SingleAnalysis';
import BatchProcessing from './components/services/BatchProcessing';
import CourseMapping from './components/services/CourseMapping';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageChanging, setIsPageChanging] = useState(false);

  // 🔧 终极修复1：使用useLayoutEffect（在DOM更新前执行）
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  // 🔧 终极修复2：多重滚动保护
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 立即执行
    scrollToTop();

    // 延迟执行多次
    const timers = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200)
    ];

    return () => timers.forEach(clearTimeout);
  }, [currentPage]);

  // 🔧 增强的页面切换函数
  const handlePageChange = (newPage) => {
    setIsPageChanging(true);
    
    // 立即滚动
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 使用requestAnimationFrame确保在下一帧执行
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      setCurrentPage(newPage);
      
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        setIsPageChanging(false);
      });
    });
  };

  const renderCurrentPage = () => {
    // 如果正在切换页面，先显示loading或空白
    if (isPageChanging) {
      return <div className="min-h-screen"></div>;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={handlePageChange} />;
      case 'batch-processing':
        return <BatchProcessing setCurrentPage={handlePageChange} />;
      case 'single-analysis':
        return <SingleAnalysis setCurrentPage={handlePageChange} />;
      case 'course-mapping':
        return <CourseMapping setCurrentPage={handlePageChange} />;
      default:
        return <HomePage setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className="min-h-screen" style={{ scrollMarginTop: 0 }}>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;



