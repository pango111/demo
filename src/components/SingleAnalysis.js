import React, { useState } from 'react';
import { MOCK_SINGLE_RESULT } from '../data/mockData';

const SingleAnalysis = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeText = () => {
    if (!inputText.trim()) {
      alert('Please enter some text to analyze');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        ...MOCK_SINGLE_RESULT,
        model_info: {
          ...MOCK_SINGLE_RESULT.model_info,
          timestamp: new Date().toISOString()
        }
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 1500);
  };

  const loadSampleText = () => {
    setInputText('Led security architecture initiatives for enterprise cloud migration, implementing zero-trust frameworks and identity access management systems. Conducted threat assessments and vulnerability analyses, ensuring compliance with ISO27001 and GDPR regulations. Managed incident response procedures and coordinated with SOC teams for continuous security monitoring.');
  };

  const clearAnalysis = () => {
    setInputText('');
    setResult(null);
  };

  return (
    <div className="single-analysis">
      <div className="input-section">
        <div className="form-group">
          <label>Text to Analyze</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste resume content, job description, or any text to extract skills..."
            className="textarea-field"
            rows="6"
          />
        </div>

        <div className="action-buttons">
          <button
            onClick={analyzeText}
            disabled={isAnalyzing || !inputText.trim()}
            className="analyze-btn"
          >
            {isAnalyzing ? 'Extracting...' : 'Extract Skills'}
          </button>
          <button onClick={loadSampleText} className="sample-btn">
            Load Sample
          </button>
          <button onClick={clearAnalysis} className="clear-btn">
            Clear
          </button>
        </div>
      </div>

      {result && (
        <div className="results-section">
          <h3>Skill Extraction Results</h3>
          <p className="timestamp">Analyzed: {new Date(result.model_info.timestamp).toLocaleString()}</p>

          <div className="prediction-section">
            <div className="category-badge" style={{ backgroundColor: result.prediction.category_color }}>
              <h4>{result.prediction.category_name}</h4>
            </div>
            <p className="category-description">{result.prediction.category_description}</p>
          </div>

          <div className="skills-section">
            <h4>Extracted Skills ({result.skills.skill_count})</h4>
            <div className="skills-grid">
              {result.skills.extracted_skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-description">{skill.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="model-info">
            <p><strong>Mode:</strong> {result.model_info.mode}</p>
            <p><strong>Extractor:</strong> {result.model_info.extractor_mode}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleAnalysis;