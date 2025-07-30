// src/components/Navigation.js - 支持滚动状态更新
import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, ArrowRight } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPage, setScrolledPage] = useState('home');

  // 监听滚动以更新导航状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', page: 'home' },
        { id: 'about', page: 'about' },
        { id: 'services', page: 'services' }
      ];
      
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setScrolledPage(section.page);
            break;
          }
        }
      }
    };

    // 只在首页时监听滚动
    if (currentPage === 'home') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // 初始检查
    } else {
      setScrolledPage(currentPage);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // 获取当前应该高亮的页面
  const getActivePage = () => {
    return currentPage === 'home' ? scrolledPage : currentPage;
  };

  const handleNavClick = (page) => {
    if (page === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about' && currentPage === 'home') {
      // 如果在首页，滚动到about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'services') {
      // 统一处理：始终跳转到首页的services section
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setCurrentPage(page);
    }
  };

  const activePage = getActivePage();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              EduCareer Bridge
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About Us' },
              { key: 'services', label: 'Services' }
            ].map((page) => (
              <button
                key={page.key}
                onClick={() => handleNavClick(page.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activePage === page.key 
                    ? 'bg-green-100 text-green-700 shadow-sm' 
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => {
              // 统一处理：始终跳转到首页的services section
              if (currentPage !== 'home') {
                setCurrentPage('home');
                setTimeout(() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-2">
              {[
                { key: 'home', label: 'Home' },
                { key: 'about', label: 'About Us' },
                { key: 'services', label: 'Services' }
              ].map((page) => (
                <button
                  key={page.key}
                  onClick={() => {
                    handleNavClick(page.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activePage === page.key
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {page.label}
                </button>
              ))}
              <button
                onClick={() => {
                  // 统一处理：始终跳转到首页的services section
                  if (currentPage !== 'home') {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;