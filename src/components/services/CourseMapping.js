// src/components/services/CourseMapping.js
import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Target, CheckCircle, XCircle, Lightbulb, FileText, GraduationCap, BarChart3 } from 'lucide-react';
import { COURSE_INPUT } from '../../data/mockData';

const CourseMapping = ({ setCurrentPage }) => {
  const [targetDomain, setTargetDomain] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [learningOutcomes, setLearningOutcomes] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const domainSuggestions = [
    'CyberSecurity Consultant',
    'CyberSecurity Analyst',
    'CyberSecurity Architect',
    'CyberSecurity Operations',
    'Information Security',
    'CyberSecurity Testers'
  ];

  const handleDomainSelect = (domain) => {
    setTargetDomain(domain);
  };

  const loadExample = () => {
    setTargetDomain(COURSE_INPUT.domain);
    setCourseTitle('Data Privacy and Security');
    setCourseDescription(COURSE_INPUT.description);
    setLearningOutcomes(COURSE_INPUT.learningOutcomes || '');
  };

  const analyzeCourse = () => {
    if (!targetDomain || !courseTitle || !courseDescription) {
      alert('Please fill in all required fields');
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
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
    let courseSkills = [];

    if (domain === 'Information Security' && title.includes('Privacy')) {
      courseSkills = COURSE_INPUT.extractedSkills;
    } else {
      courseSkills = domainSkills.slice(0, Math.floor(Math.random() * 4) + 3);
    }

    const matchedSkills = domainSkills.filter(skill =>
      courseSkills.some(cs => cs.includes(skill) || skill.includes(cs) || cs === skill)
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

  const generateRecommendations = (coverage, missingSkills) => {
    const rec = [];
    if (coverage < 60) rec.push('Consider adding more hands-on projects to cover essential skills');
    if (coverage < 80) rec.push('Include practical exercises for missing skills');
    if (missingSkills.length > 0) rec.push(`Focus on incorporating: ${missingSkills.join(', ')}`);
    return rec;
  };

  const resetForm = () => {
    setTargetDomain('');
    setCourseTitle('');
    setCourseDescription('');
    setLearningOutcomes('');
    setResults(null);
  };

  return (
    <div className="pt-20 pb-10 min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => setCurrentPage && setCurrentPage('home')} 
          className="mb-6 flex items-center text-green-600 hover:text-green-700 font-medium group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Mapping</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Align your course content with real-world cybersecurity job market requirements
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="space-y-6">
            {/* Target Domain */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-600" />
                Target Cybersecurity Domain <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                value={targetDomain}
                onChange={(e) => setTargetDomain(e.target.value)}
                placeholder="e.g., Information Security, CyberSecurity Analyst..."
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {domainSuggestions.map((domain, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleDomainSelect(domain)} 
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm hover:from-purple-200 hover:to-pink-200 transition-all duration-200 font-medium border border-purple-200"
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-600" />
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Enter your course title"
              />
            </div>

            {/* Course Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-purple-600" />
                Course Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-vertical transition-colors"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                placeholder="Describe your course content, teaching methods, and key topics covered..."
                rows="4"
              />
            </div>

            {/* Learning Outcomes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-purple-600" />
                Learning Outcomes <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-vertical transition-colors"
                value={learningOutcomes}
                onChange={(e) => setLearningOutcomes(e.target.value)}
                placeholder="List the expected learning outcomes for students..."
                rows="3"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <button 
                onClick={analyzeCourse} 
                className="flex-1 min-w-[200px] bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2" 
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Analyzing Course...
                  </>
                ) : (
                  <>
                    <Target className="h-5 w-5" />
                    Analyze Course Alignment
                  </>
                )}
              </button>
              
              <button 
                onClick={loadExample} 
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all duration-200"
              >
                Load Example
              </button>
              
              <button 
                onClick={resetForm} 
                className="px-8 py-4 border-2 border-red-300 text-red-700 rounded-xl hover:bg-red-50 hover:border-red-400 font-semibold transition-all duration-200"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>

        {/* Processing Status */}
        {isAnalyzing && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <div>
                <div className="text-purple-800 font-semibold text-lg">Analyzing Course Alignment...</div>
                <div className="text-purple-600">Mapping course content to industry skill requirements</div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-purple-600" />
                Course Alignment Results
              </h3>
              
              {/* Coverage Progress */}
              <div className="bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
                <div 
                  className="h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000 flex items-center justify-end pr-2" 
                  style={{ width: `${results.coverage}%` }}
                >
                  <span className="text-white text-xs font-bold">
                    {results.coverage >= 20 ? `${results.coverage}%` : ''}
                  </span>
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-gray-700">
                {results.coverage}% Skill Coverage Match
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Matched Skills */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Matched Skills ({results.matchedSkills.length})
                </h4>
                <div className="space-y-2">
                  {results.matchedSkills.map((skill, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-lg border border-green-200 shadow-sm">
                      <span className="text-green-800 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {skill}
                      </span>
                    </div>
                  ))}
                  {results.matchedSkills.length === 0 && (
                    <p className="text-green-700 italic">No matching skills found</p>
                  )}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Missing Skills ({results.missingSkills.length})
                </h4>
                <div className="space-y-2">
                  {results.missingSkills.map((skill, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-lg border border-red-200 shadow-sm">
                      <span className="text-red-800 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {skill}
                      </span>
                    </div>
                  ))}
                  {results.missingSkills.length === 0 && (
                    <p className="text-red-700 italic">All required skills are covered!</p>
                  )}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {results.recommendations.length > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Recommendations for Improvement
                </h4>
                <div className="space-y-3">
                  {results.recommendations.map((rec, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                      <p className="text-blue-800 flex items-start gap-2">
                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        {rec}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseMapping;

