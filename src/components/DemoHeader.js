// src/components/DemoHeader.js

import React from 'react';

const DemoHeader = () => {
  return (
    <>
      {/* Demo Notice Section */}
      <div className="bg-warning bg-opacity-10 border-start border-4 border-warning p-3 mb-3">
        <div className="d-flex align-items-start gap-2">
          <span className="fs-4 text-warning">ℹ</span>
          <span className="text-dark">
            Welcome to our demonstration page. You can type any text or upload any files,
            but all results shown are sample data for preview purposes.
          </span>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-light py-4 border-bottom shadow-sm mb-4">
        <div className="container text-center">
          <h1 className="text-primary fw-bold">AI-Powered Skill Extraction System</h1>
          <p className="text-muted fs-5">Advanced skill identification and course alignment analysis</p>
        </div>
      </header>
    </>
  );
};

export default DemoHeader;
