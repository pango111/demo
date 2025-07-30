// src/components/AboutPage.js
import React from 'react';
import { BarChart3, Users, Award, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We Help Organizations Bridge the Gap Between Cybersecurity Job Market Demands and University Curriculum Design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 relative">
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  6 Domains
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-green-200 rounded w-3/4"></div>
                  <div className="h-6 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-6 bg-purple-200 rounded w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">AI</div>
                      <div className="text-sm">Powered</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">Real-time</div>
                      <div className="text-sm">Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Transforming Cybersecurity Skill Analysis with Advanced Technology
              </h3>
              <p className="text-gray-600 mb-6">
                Our platform leverages machine learning model to analyze cybersecurity job descriptions 
                and extract meaningful skill requirements across 6 specialized domains. We help organizations understand 
                market demands and align their training programs accordingly.
              </p>
              <p className="text-gray-600 mb-8">
                Leveraging a hybrid pipeline of machine learning and rule-based techniques, our system has analyzed thousands of cybersecurity job descriptions to support curriculum design and workforce development. We employ an SVM-based classifier combined with rule-based logic to categorize job roles, and use a KeyBERT + rule-based extractor to identify relevant skill keywords. Extracted skills are then interpreted using the Qwen-0.6B language model to enhance student understanding. Finally, a Sparse Encoder is applied to semantically map extracted skills to course-provided skill sets, enabling accurate curriculum-to-market alignment.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                    <h4 className="font-semibold">6 Specialized Domains</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Analysis across CyberSecurity Architect, Analyst, Consultant, Operations, Testers, and Information Security.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold">Expert Team</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    User-centric design supporting curriculum alignment and career guidance across cybersecurity fields.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-purple-600" />
                    <h4 className="font-semibold">Proven Results</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Resource-efficient implementation enabling fast and scalable skill extraction.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <h4 className="font-semibold">Secure Platform</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Enterprise-grade security for your sensitive data and analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cybersecurity Domains Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our 6 Cybersecurity Domains</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'CyberSecurity Architect', 
                  desc: 'Design and oversee secure architectures across systems and networks',
                  color: 'bg-purple-100 text-purple-800'
                },
                { 
                  title: 'CyberSecurity Analyst', 
                  desc: 'Monitor, detect, and respond to security incidents in real-time',
                  color: 'bg-blue-100 text-blue-800'
                },
                { 
                  title: 'CyberSecurity Consultant', 
                  desc: 'Advise clients on security strategies, controls, and risk mitigation',
                  color: 'bg-orange-100 text-orange-800'
                },
                { 
                  title: 'CyberSecurity Operations', 
                  desc: 'Maintain and support core security infrastructure and respond to events',
                  color: 'bg-green-100 text-green-800'
                },
                { 
                  title: 'Information Security', 
                  desc: 'Manage information protection strategies, compliance, and governance',
                  color: 'bg-teal-100 text-teal-800'
                },
                { 
                  title: 'CyberSecurity Testers', 
                  desc: 'Conduct security testing and identify vulnerabilities through simulated attacks',
                  color: 'bg-pink-100 text-pink-800'
                }
              ].map((domain, index) => (
                <div key={index} className="text-center">
                  <div className={`${domain.color} px-4 py-2 rounded-lg font-semibold mb-3 inline-block`}>
                    {domain.title}
                  </div>
                  <p className="text-sm text-gray-600">{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Analysis Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Data Input', desc: 'Upload cybersecurity job descriptions or course content for analysis' },
                { step: '02', title: 'AI Processing', desc: 'Advanced algorithms extract and categorize skills across 6 domains' },
                { step: '03', title: 'Domain Analysis', desc: 'Generate insights and mapping recommendations for each domain' },
                { step: '04', title: 'Results', desc: 'Receive detailed reports and actionable cybersecurity insights' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;