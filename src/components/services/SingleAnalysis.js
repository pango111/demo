// src/components/services/SingleAnalysis.js
import React, { useState } from 'react';
import { ArrowLeft, Upload, Sparkles, Briefcase, FileText, Tag, Target } from 'lucide-react';

const SingleAnalysis = ({ setCurrentPage, apiService, apiConnected }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);

  const analyzeText = async () => {
    if (!inputText.trim()) {
      alert('Please enter some text to analyze');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      // Call real API with your backend
      const response = await fetch('https://function1.onrender.com/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: jobTitle || 'Cybersecurity Position',
          skillset: inputText,
          explain_skills: true
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        // Transform API response to match expected format
        const transformedResult = {
          success: true,
          prediction: data.prediction,
          skills: {
            skill_count: data.skills.skill_count,
            extracted_skills: data.skills.extracted_skills.map(skill => ({
              name: skill,
              description: getSkillDescription(skill)
            }))
          },
          skill_explanations: data.skill_explanations,
          model_info: data.model_info
        };
        
        setResult(transformedResult);
      } else {
        throw new Error(data.error || 'Analysis failed');
      }

    } catch (err) {
      console.error('Analysis error:', err);
      setError(`Analysis failed: ${err.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Helper function to get skill descriptions
  const getSkillDescription = (skillName) => {
    const skillDescriptions = {
      'python': 'A versatile programming language widely used in cybersecurity for automation, scripting, and security tool development.',
      'penetration testing': 'Ethical hacking methodology to identify vulnerabilities and security weaknesses in systems and applications.',
      'siem': 'Security Information and Event Management systems for real-time analysis of security alerts and log management.',
      'incident response': 'Systematic approach to handling security breaches, cyber attacks, and other security incidents.',
      'vulnerability assessment': 'Process of identifying, quantifying, and prioritizing security vulnerabilities in systems.',
      'burp suite': 'Comprehensive web application security testing platform used by security professionals.',
      'nmap': 'Network discovery and security auditing tool for network exploration and vulnerability assessment.',
      'metasploit': 'Penetration testing framework that helps verify vulnerabilities and manage security assessments.',
      'firewall': 'Network security system that monitors and controls incoming and outgoing network traffic.',
      'linux': 'Open-source operating system essential for cybersecurity professionals and security operations.',
      'windows': 'Microsoft operating system requiring specialized security knowledge for enterprise environments.',
      'aws': 'Amazon Web Services cloud platform with extensive security services and compliance frameworks.',
      'azure': 'Microsoft cloud computing platform with integrated security and identity management services.',
      'docker': 'Containerization platform requiring security considerations for deployment and orchestration.',
      'kubernetes': 'Container orchestration platform with complex security requirements and configurations.',
      'cybersecurity': 'Comprehensive field focused on protecting digital assets, networks, and information systems.',
      'digital forensics': 'Scientific investigation and analysis of digital evidence for legal and security purposes.',
      'malware analysis': 'Process of studying malicious software to understand its behavior and develop countermeasures.',
      'risk assessment': 'Systematic evaluation of potential security risks and their impact on organizational assets.'
    };

    return skillDescriptions[skillName.toLowerCase()] || 
           `${skillName} is a technology or skill relevant to cybersecurity and information security domains.`;
  };

  const loadSampleText = () => {
    setJobTitle('Senior Security Architect');
    setInputText('Led security architecture initiatives for enterprise cloud migration, implementing zero-trust frameworks and identity access management systems. Conducted threat assessments and vulnerability analyses, ensuring compliance with ISO27001 and GDPR regulations. Managed incident response procedures and coordinated with SOC teams for continuous security monitoring. Experience with SIEM platforms, penetration testing tools, and DevSecOps practices.');
  };

  const clearAnalysis = () => {
    setJobTitle('');
    setInputText('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="pt-20 pb-10 min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Single Analysis</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extract cybersecurity skills from job descriptions or resumes across 6 specialized domains
          </p>
        </div>

        {/* Connection Status Warning - Only show if there's an actual connection error */}
        {error && error.includes('fetch') && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <div className="text-red-800 font-semibold">Connection Error</div>
            <div className="text-red-600">Unable to connect to the analysis service</div>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="space-y-6">
            {/* Job Title Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-green-600" />
                Job Title or Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-gray-900"
                placeholder="e.g., Senior Security Architect, SOC Analyst, Penetration Tester..."
              />
            </div>

            {/* Text Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-600" />
                Job Description or Resume Content <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-vertical transition-colors"
                rows="8"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste job description, resume content, or any text to extract cybersecurity skills..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <button 
                className="flex-1 min-w-[200px] bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2" 
                onClick={analyzeText} 
                disabled={isAnalyzing || !inputText.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Extracting Skills...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    Extract Skills
                  </>
                )}
              </button>
              
              <button 
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all duration-200" 
                onClick={loadSampleText}
              >
                Load Sample
              </button>
              
              <button 
                className="px-8 py-4 border-2 border-red-300 text-red-700 rounded-xl hover:bg-red-50 hover:border-red-400 font-semibold transition-all duration-200" 
                onClick={clearAnalysis}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Processing Status */}
        {isAnalyzing && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div>
                <div className="text-blue-800 font-semibold text-lg">Analyzing Your Content...</div>
                <div className="text-blue-600">Extracting cybersecurity skills across 6 specialized domains</div>
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
            <div className="text-red-800 font-semibold text-lg">Analysis Error</div>
            <div className="text-red-600">{error}</div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skill Extraction Results</h3>
              <p className="text-gray-600">
                Analysis completed: {new Date(result.model_info.timestamp).toLocaleString()}
              </p>
            </div>

            {/* Category Section */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6 border-l-4 border-green-500">
              <h4 
                className="text-xl font-bold mb-2 flex items-center gap-2" 
                style={{ color: result.prediction.category_color }}
              >
                <Tag className="h-5 w-5" />
                {result.prediction.category_name}
              </h4>
              <p className="text-gray-700">{result.prediction.category_description}</p>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Extracted Skills ({result.skills.skill_count})
              </h4>
              
              <div className="grid gap-4 md:grid-cols-2">
                {result.skills.extracted_skills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {skill.name}
                    </h5>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Skill Explanations */}
            {result.skill_explanations && result.skill_explanations.success && (
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  AI Skill Explanations
                </h4>
                <div className="space-y-4">
                  {Object.entries(result.skill_explanations.skill_explanations).map(([skillName, explanation]) => (
                    <div key={skillName} className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 p-4 rounded-xl">
                      <h5 className="font-semibold text-purple-900 mb-2">{skillName}</h5>
                      <p className="text-purple-700 text-sm">{explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Model Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">Analysis Mode:</span>
                  <span className="ml-2 text-gray-600 font-mono">{result.model_info.mode}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">Extractor Engine:</span>
                  <span className="ml-2 text-gray-600 font-mono">{result.model_info.extractor_mode}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleAnalysis;
