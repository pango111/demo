import React, { useState } from 'react';
import { BarChart3, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from SkillExtractor');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:info@skillextractor.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Original footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400">EduCareer Bridge</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Platform for job market insights 
              and curriculum alignment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Single Analysis</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Batch Processing</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Course Mapping</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cybersecurity Domains</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Security Architect</li>
              <li>Security Analyst</li>
              <li>Security Consultant</li>
              <li>Security Operations</li>
              <li>Information Security</li>
              <li>Security Testers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">CONTACT</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get in touch with our team for personalized cybersecurity skill analysis solutions 
              and professional consultation services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-green-500 border-dashed rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-400">
                  A108 Adam Street, NSW
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-green-500 border-dashed rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">
                    +1 xxxx xxx xx55
                  </p>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-green-500 border-dashed rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">
                    info@skillextractor.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
              
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 mb-6 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
              ></textarea>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EduCareer Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;