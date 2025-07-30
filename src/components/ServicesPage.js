// src/components/ServicesPage.js
import React, { useState } from 'react';
import { BarChart3, FolderOpen, Workflow, X } from 'lucide-react';
import SingleAnalysis from './services/SingleAnalysis';
import BatchProcessing from './services/BatchProcessing';
import CourseMapping from './services/CourseMapping';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'single',
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'Single Analysis',
      description: 'Extract cybersecurity skill keywords from a single job description across 6 specialized domains.',
      component: <SingleAnalysis />
    },
    {
      id: 'batch',
      icon: <FolderOpen className="h-12 w-12" />,
      title: 'Batch Processing',
      description: 'Upload multiple cybersecurity job ads and extract structured skill data efficiently.',
      component: <BatchProcessing />
    },
    {
      id: 'course',
      icon: <Workflow className="h-12 w-12" />,
      title: 'Course Mapping',
      description: 'Align course content with real-world cybersecurity job market requirements.',
      component: <CourseMapping />
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity skill analysis solutions across 6 specialized domains
            </p>
          </div>

          {!selectedService ? (
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="text-green-600 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Try {service.title}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="text-green-600">{selectedService.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6">
                  {selectedService.component}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;