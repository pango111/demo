// src/components/services/BatchProcessing.js
import React, { useState } from 'react';
import { ArrowLeft, Upload, FolderOpen, Download, FileText, Zap, BarChart3, Target } from 'lucide-react';
import { MOCK_BATCH_RESULTS, MOCK_BATCH_SUMMARY } from '../../data/mockData';

const BatchProcessing = ({ setCurrentPage }) => {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState(null);

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
    setTimeout(() => {
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
    <div className="pt-20 pb-10 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4">
            <FolderOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Batch Processing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload multiple job postings to extract and analyze cybersecurity skills across 6 specialized domains
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-blue-600" />
                Upload Job Posting Files
              </label>
              
              {/* Beautiful File Upload Area */}
              <div className="relative">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  id="file-upload"
                />
                
                {/* Custom Upload Design */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center hover:from-blue-100 hover:to-indigo-200 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                  
                  {/* Cloud Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Main Text */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Drop your files here, or browse
                    </h3>
                    <p className="text-gray-600">
                      Select multiple job posting files to analyze
                    </p>
                  </div>
                  
                  {/* File Types */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-sm">PDF</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-sm">DOC</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-sm">DOCX</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-sm">TXT</span>
                  </div>
                  
                  {/* Browse Button */}
                  <button 
                    type="button"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Browse Files
                  </button>
                </div>
              </div>
            </div>

            {/* Demo Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Try Demo Files
              </h3>
              <p className="text-blue-700 mb-4">Experience our system with sample cybersecurity job postings</p>
              <button 
                onClick={loadDemoFiles} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                Load {demoFiles.length} Sample Job Postings
              </button>
            </div>

            {/* Selected Files */}
            {files.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Selected Files ({files.length})
                </h3>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-700 font-medium">{file.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <button
                onClick={processFiles}
                disabled={isProcessing || files.length === 0}
                className="flex-1 min-w-[250px] bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing {files.length} files...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    Extract Skills from {files.length} Job{files.length !== 1 ? 's' : ''}
                  </>
                )}
              </button>
              
              <button 
                onClick={clearFiles} 
                className="px-8 py-4 border-2 border-red-300 text-red-700 rounded-xl hover:bg-red-50 hover:border-red-400 font-semibold transition-all duration-200"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Processing Status */}
        {isProcessing && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div>
                <div className="text-blue-800 font-semibold text-lg">Processing {files.length} Job Postings...</div>
                <div className="text-blue-600">Analyzing cybersecurity roles across 6 specialized domains</div>
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        {summary && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              Processing Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">{summary.total_jobs}</div>
                <div className="text-sm font-semibold text-green-700">Job Postings</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{summary.categories_found}</div>
                <div className="text-sm font-semibold text-blue-700">Categories Found</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200">
                <div className="text-lg font-bold text-purple-600 mb-2">{summary.model_mode}</div>
                <div className="text-sm font-semibold text-purple-700">Model Mode</div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 text-center border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">{summary.extractor_mode}</div>
                <div className="text-sm font-semibold text-orange-700">Extractor Mode</div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Skill Extraction Results
              </h3>
              <button 
                onClick={downloadResults} 
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download Results
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{result.job_title}</h4>
                  
                  <div className="mb-4">
                    <span 
                      className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold shadow-sm" 
                      style={{ backgroundColor: result.prediction.category_color }}
                    >
                      {result.prediction.category_name}
                    </span>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{result.prediction.category_description}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Skills Found ({result.skills.skill_count})
                    </h5>
                    
                    <div className="space-y-2">
                      {result.skills.extracted_skills.slice(0, 3).map((skill, i) => (
                        <div key={i} className="bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm">
                          <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                        </div>
                      ))}
                      {result.skills.skill_count > 3 && (
                        <div className="text-sm text-gray-600 bg-gray-200 px-4 py-3 rounded-lg text-center font-medium">
                          +{result.skills.skill_count - 3} more skills
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchProcessing;