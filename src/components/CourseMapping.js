
import React, { useState } from 'react';
import { COURSE_INPUT } from '../data/mockData';

const CourseMapping = () => {
  // State variables - keeping your exact logic
  const [targetDomain, setTargetDomain] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [learningOutcomes, setLearningOutcomes] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Domain suggestions - keeping your logic
  const domainSuggestions = [
  'CyberSecurity Consultant',
  'CyberSecurity Analyst',
  'CyberSecurity Architect',
  'CyberSecurity Operations',
  'Information Security',
  'CyberSecurity Testers'
];


  // Handle domain selection - keeping your logic
  const handleDomainSelect = (domain) => {
    setTargetDomain(domain);
  };

  // Load example - using single course data
  const loadExample = () => {
    setTargetDomain(COURSE_INPUT.domain);
    setCourseTitle('Data Privacy and Security');
    setCourseDescription(COURSE_INPUT.description);
    setLearningOutcomes('LO1: Understand fundamental concepts and principles of data privacy including anonymization and K-Anonymity. LO2: Identify key legislation like GDPR and analyze their impact. LO3: Evaluate privacy risks and develop mitigation strategies. LO4: Apply privacy-by-design principles. LO5: Assess impact of AI and IoT on data privacy. LO6: Analyze data protection frameworks and privacy impact assessments.');
  };

  // Analyze course - keeping your logic
  const analyzeCourse = () => {
    if (!targetDomain || !courseTitle || !courseDescription) {
      alert('Please fill in all required fields');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call - keeping your logic
    setTimeout(() => {
      // Mock analysis results based on domain
      const mockResults = generateMockResults(targetDomain, courseTitle, courseDescription, learningOutcomes);
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Generate mock results - keeping your logic
  const generateMockResults = (domain, title, description, outcomes) => {
    const skillSets = {
  'CyberSecurity Consultant': [
    'Risk Assessment', 'Security Auditing', 'Client Advisory',
    'Compliance Management', 'Policy Development', 'ISO27001',
    'Security Awareness Training', 'Threat Intelligence'
  ],
  'CyberSecurity Analyst': [
    'Incident Detection', 'Log Analysis', 'SIEM Tools (Splunk, QRadar)',
    'Threat Intelligence', 'Vulnerability Scanning', 'Data Loss Prevention',
    'Phishing Detection', 'SOC Operations'
  ],
  'CyberSecurity Architect': [
    'Security Architecture Design', 'Network Security', 'Cloud Security',
    'Zero Trust Design', 'Identity and Access Management (IAM)',
    'Security Frameworks (NIST, SABSA)', 'Cryptographic Protocols'
  ],
  'CyberSecurity Operations': [
    'Security Monitoring', 'Firewall Management', 'Intrusion Detection Systems',
    'Patch Management', 'Operational Risk Analysis', 'Endpoint Protection',
    'Security Automation & Orchestration'
  ],
  'Information Security': [
        'GDPR Compliance', 'Privacy-by-Design', 'Anonymization & K-Anonymity',
        'Data Governance', 'Data Privacy Principles', 'Differential Privacy',
        'Privacy Risk Assessment', 'Privacy Frameworks (PIA, Policies)',
        'ISO27001', 'Security Policies', 'Access Control'
      ],

  'CyberSecurity Testers': [
    'Penetration Testing', 'Vulnerability Assessment', 'Exploit Development',
    'Web Application Security', 'Security Testing Tools (Burp Suite, Nessus)',
    'Red Teaming', 'Social Engineering Simulation', 'OWASP Top 10'
  ]
};


    const domainSkills = skillSets[domain] || skillSets['Information Security'];
    
    // For our specific course, use the extracted skills
    let courseSkills = [];
    if (domain === 'Information Security' && title.includes('Privacy')) {
      courseSkills = COURSE_INPUT.extractedSkills;
    } else {
      // Simulate matching logic - keeping your approach
      courseSkills = domainSkills.slice(0, Math.floor(Math.random() * 4) + 3);
    }
    
    const matchedSkills = domainSkills.filter(skill => 
      courseSkills.some(courseSkill => 
        courseSkill.includes(skill) || skill.includes(courseSkill) || courseSkill === skill
      )
    );
    
    const missingSkills = domainSkills.filter(skill => !matchedSkills.includes(skill));
    const coverage = Math.round((matchedSkills.length / domainSkills.length) * 100);

    return {
      matchedSkills,
      missingSkills: missingSkills.slice(0, 5),
      coverage,
      recommendations: generateRecommendations(coverage, missingSkills.slice(0, 3))
    };
  };

  // Generate recommendations - keeping your logic
  const generateRecommendations = (coverage, missingSkills) => {
    const recommendations = [];
    
    if (coverage < 60) {
      recommendations.push('Consider adding more hands-on projects to cover essential skills');
    }
    if (coverage < 80) {
      recommendations.push('Include practical exercises for missing skills');
    }
    if (missingSkills.length > 0) {
      recommendations.push(`Focus on incorporating: ${missingSkills.join(', ')}`);
    }
    
    return recommendations;
  };

  // Reset form - keeping your logic
  const resetForm = () => {
    setTargetDomain('');
    setCourseTitle('');
    setCourseDescription('');
    setLearningOutcomes('');
    setResults(null);
  };

  return (
    <div className="course-mapping">
      <div className="input-section">
        <div className="form-group">
          <label>Target Domain *</label>
          <input
            type="text"
            value={targetDomain}
            onChange={(e) => setTargetDomain(e.target.value)}
            placeholder="Enter target skill domain (e.g., Information Security)"
            className="input-field"
          />
          <div className="domain-suggestions">
            {domainSuggestions.map((domain, index) => (
              <button
                key={index}
                onClick={() => handleDomainSelect(domain)}
                className="suggestion-btn"
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Course Title *</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Enter course title"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Course Description *</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Describe the course content, topics covered, and teaching methods"
            className="textarea-field"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Learning Outcomes</label>
          <textarea
            value={learningOutcomes}
            onChange={(e) => setLearningOutcomes(e.target.value)}
            placeholder="List the expected learning outcomes (optional)"
            className="textarea-field"
            rows="3"
          />
        </div>

        <div className="example-section">
          <p className="demo-files-text">
            Want to see how course alignment works? Try our example course:
          </p>
          <button
            onClick={loadExample}
            className="demo-files-btn"
          >
            Load Example Course (Data Privacy and Security - University of Sydney)
          </button>
        </div>

        <div className="action-buttons">
          <button
            onClick={analyzeCourse}
            disabled={isAnalyzing || !targetDomain || !courseTitle || !courseDescription}
            className="analyze-btn"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Course Alignment'}
          </button>
          <button onClick={resetForm} className="reset-btn">
            Reset
          </button>
        </div>
      </div>

      {results && (
        <div className="results-section">
          <h3>Course Alignment Results</h3>
          
          <div className="coverage-indicator">
            <div className="coverage-bar">
              <div 
                className="coverage-fill" 
                style={{ width: `${results.coverage}%` }}
              ></div>
            </div>
            <span className="coverage-text">{results.coverage}% Skill Coverage</span>
          </div>

          <div className="skills-grid course-results">
            <div className="matched-skills">
              <h4>Covered Skills ({results.matchedSkills.length})</h4>
              <ul>
                {results.matchedSkills.map((skill, index) => (
                  <li key={index} className="skill-item matched">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="missing-skills">
              <h4>Missing Skills ({results.missingSkills.length})</h4>
              <ul>
                {results.missingSkills.map((skill, index) => (
                  <li key={index} className="skill-item missing">{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {results.recommendations.length > 0 && (
            <div className="recommendations">
              <h4>Recommendations</h4>
              <ul>
                {results.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseMapping;