

import React from 'react';

const DemoHeader = () => {
  return (
    <>
      <div className="demo-notice">
        <div className="notice-content">
          <span className="notice-icon">ℹ</span>
          <span className="notice-text">
            This is a demonstration page. You can type any text or upload any files, but all results shown are sample data for preview purposes.
          </span>
        </div>
      </div>
      <header className="demo-header">
        <div className="header-content">
          <h1>AI-Powered Skill Extraction System</h1>
          <p>Advanced skill identification and course alignment analysis</p>
        </div>
      </header>
    </>
  );
};

export default DemoHeader;