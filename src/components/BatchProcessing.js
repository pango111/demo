import React, { useState } from 'react';
import { MOCK_BATCH_RESULTS, MOCK_BATCH_SUMMARY } from '../data/mockData';

const BatchProcessing = () => {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState(null);

  // Demo files to simulate upload
  const demoFiles = [
    { name: 'senior_security_architect_job.pdf', size: 187392 },
    { name: 'penetration_tester_position.pdf', size: 156672 },
    { name: 'soc_analyst_opening.pdf', size: 143360 },
    { name: 'infosec_manager_role.pdf', size: 198144 },
    { name: 'cybersecurity_consultant_job.pdf', size: 175104 },
    { name: 'security_engineer_posting.pdf', size: 164896 }
  ];

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const loadDemoFiles = () => {
    // Convert demo files to File-like objects for display
    const mockFiles = demoFiles.map(fileInfo => ({
      name: fileInfo.name,
      size: fileInfo.size,
      type: 'application/pdf'
    }));
    setFiles(mockFiles);
  };

  const processFiles = () => {
    if (files.length === 0) {
      alert('Please select job posting files to process or load demo files');
      return;
    }

    setIsProcessing(true);
    
    // Simulate batch processing
    setTimeout(() => {
      // Use mock data
      setResults(MOCK_BATCH_RESULTS);
      setSummary(MOCK_BATCH_SUMMARY);
      setIsProcessing(false);
    }, 3000);
  };

  const clearFiles = () => {
    setFiles([]);
    setResults(null);
    setSummary(null);
  };

  const downloadResults = () => {
    if (!results) return;
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'batch_analysis_results.json';
    link.click();
  };

  return (
    <div className="batch-processing">
      <div className="upload-section">
        <div className="form-group">
          <label>Upload Job Postings for Skill Extraction</label>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="file-input"
          />
          
          <div className="demo-files-section">
            <p className="demo-files-text">
              Try our demo files to see the system in action:
            </p>
            <button 
              onClick={loadDemoFiles}
              className="demo-files-btn"
              type="button"
            >
              Load Demo Job Postings ({demoFiles.length} sample positions)
            </button>
          </div>

          {files.length > 0 && (
            <div className="file-list">
              <h4>Selected Files ({files.length})</h4>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button
            onClick={processFiles}
            disabled={isProcessing || files.length === 0}
            className="process-btn"
          >
            {isProcessing ? 'Extracting...' : 'Extract Skills from Job Postings'}
          </button>
          <button onClick={clearFiles} className="clear-btn">
            Clear All
          </button>
        </div>
      </div>

      {isProcessing && (
        <div className="processing-status">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>Extracting skills from {files.length} job postings... This may take a few minutes.</p>
        </div>
      )}

      {summary && (
        <div className="summary-section">
          <h3>Extraction Summary</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">{summary.total_jobs}</span>
              <span className="stat-label">Job Postings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{summary.categories_found}</span>
              <span className="stat-label">Categories Found</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{summary.model_mode}</span>
              <span className="stat-label">Model Mode</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{summary.extractor_mode}</span>
              <span className="stat-label">Extractor Mode</span>
            </div>
          </div>
        </div>
      )}

      {results && (
        <div className="results-section">
          <div className="results-header">
            <h3>Skill Extraction Results</h3>
            <button onClick={downloadResults} className="download-btn">
              Download Results
            </button>
          </div>

          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <div className="result-header">
                  <h4>{result.job_title}</h4>
                  <div 
                    className="category-badge" 
                    style={{ backgroundColor: result.prediction.category_color }}
                  >
                    {result.prediction.category_name}
                  </div>
                </div>
                
                <p className="category-description">
                  {result.prediction.category_description}
                </p>

                <div className="skills-summary">
                  <h5>Skills Found ({result.skills.skill_count})</h5>
                  <div className="skills-preview">
                    {result.skills.extracted_skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag-small">
                        {skill.name}
                      </span>
                    ))}
                    {result.skills.skill_count > 3 && (
                      <span className="more-skills">
                        +{result.skills.skill_count - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="skills-detailed">
                  {result.skills.extracted_skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-detail">
                      <strong>{skill.name}</strong>
                      <p>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchProcessing;