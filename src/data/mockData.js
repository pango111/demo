// Mock data for single analysis - Updated structure
export const MOCK_SINGLE_RESULT = {
  success: true,
  prediction: {
    category_name: 'Security Architect',
    category_description: 'Design and lead security architecture strategies, ensuring secure infrastructure, regulatory compliance, and strategic alignment.',
    category_color: '#673AB7'
  },
  skills: {
    skill_count: 12,
    extracted_skills: [
      {
        name: 'OS Hardening',
        description: 'Implementing configurations to reduce system vulnerabilities and enhance operating system security.'
      },
      {
        name: 'Identity and Access Management (IAM)',
        description: 'Managing user identities and defining access rights across systems and platforms.'
      },
      {
        name: 'Network Segmentation',
        description: 'Dividing networks into zones to limit lateral movement and contain threats.'
      },
      {
        name: 'Threat Assessment',
        description: 'Identifying, evaluating, and prioritizing potential cybersecurity threats.'
      },
      {
        name: 'Security Architecture',
        description: 'Designing secure system structures aligned with business and regulatory needs.'
      },
      {
        name: 'Incident Response',
        description: 'Detecting, analyzing, and responding to security incidents to mitigate impact.'
      },
      {
        name: 'Compliance and Regulatory Knowledge',
        description: 'Understanding and applying laws and standards like GDPR, HIPAA, and PCI-DSS.'
      },
      {
        name: 'Zero Trust Model',
        description: 'Implementing security strategies that assume no implicit trust within or outside the network.'
      },
      {
        name: 'Infrastructure Security',
        description: 'Securing physical and virtual infrastructure including servers, storage, and networks.'
      },
      {
        name: 'Application Security',
        description: 'Ensuring software is designed, developed, and maintained securely.'
      },
      {
        name: 'Cloud Security',
        description: 'Protecting cloud-based assets, services, and infrastructure.'
      },
      {
        name: 'Security Frameworks (ISO27001, NIST, PCI-DSS)',
        description: 'Applying recognized security standards to ensure compliance and risk management.'
      }
    ]
  },
  model_info: {
    mode: 'demo_mode',
    extractor_mode: 'hybrid',
    timestamp: new Date().toISOString()
  }
};

// Role-based skills for comparison - Updated for security focus
export const ROLE_SKILLS = {
  'Information Security': [
    'GDPR Compliance',
    'Privacy-by-Design',
    'Anonymization & K-Anonymity',
    'Data Governance',
    'Data Privacy Principles',
    'Differential Privacy',
    'Privacy Risk Assessment',
    'Privacy Frameworks (PIA, Policies)',
    'ISO27001',
    'Security Policies',
    'Access Control',
    'Privacy Impact Assessment',
    'Data Classification',
    'Privacy Breach Response',
    'Regulatory Compliance Analysis',
    'Data Retention Policies',
    'Privacy-Preserving Technologies',
    'Data Stewardship',
    'Incident Response',
    'Security Architecture',
    'Threat Assessment',
    'Vulnerability Management',
    'Security Monitoring',
    'Data Loss Prevention',
    'Encryption Technologies',
    'Network Security',
    'Identity Management',
    'Security Auditing',
    'Risk Management',
    'Compliance Management',
    'Security Training & Awareness',
    'Business Continuity Planning',
    'Forensic Analysis',
    'Penetration Testing',
    'Security Framework Implementation'
  ],
  'Security Architect': [
    'OS Hardening', 
    'Identity and Access Management (IAM)', 
    'Network Segmentation', 
    'Security Architecture', 
    'Zero Trust Model', 
    'Infrastructure Security', 
    'Application Security', 
    'Cloud Security', 
    'Security Frameworks (ISO27001, NIST, PCI-DSS)'
  ],
  'Penetration Tester': [
    'Penetration Testing', 
    'Vulnerability Assessment', 
    'Kali Linux', 
    'Metasploit',
    'Network Scanning', 
    'Web App Security', 
    'Exploit Development', 
    'Burp Suite'
  ],
  'Security Analyst': [
    'SIEM Tools', 
    'Log Analysis', 
    'Incident Response', 
    'Threat Hunting',
    'Firewall Rules', 
    'Security Monitoring', 
    'Endpoint Detection', 
    'SOC Workflow'
  ],
  'Security Consultant': [
    'Security Consulting', 
    'Risk Assessment', 
    'Client Advisory', 
    'Security Frameworks',
    'Cloud Security Strategy', 
    'Audit Readiness', 
    'Governance Models', 
    'Security Roadmaps'
  ]
};

// Mock data for batch processing - Updated structure
export const MOCK_BATCH_RESULTS = [
  {
    job_title: 'Senior Security Architect - Financial Services (Remote)',
    prediction: {
      category_name: 'CyberSecurity Architect',
      category_description: 'Design and oversee secure architectures across systems and networks.',
      category_color: '#673AB7'
    },
    skills: {
      skill_count: 11,
      extracted_skills: [
        {
          name: 'Cloud Security',
          description: 'Protecting cloud-based assets, services, and infrastructure.'
        },
        {
          name: 'Zero Trust Model',
          description: 'Implementing security strategies that assume no implicit trust within or outside the network.'
        },
        {
          name: 'OS Hardening',
          description: 'Implementing configurations to reduce system vulnerabilities and enhance operating system security.'
        },
        {
          name: 'Network Segmentation',
          description: 'Dividing networks into zones to limit lateral movement and contain threats.'
        },
        {
          name: 'IAM',
          description: 'Managing user identities and defining access rights across systems and platforms.'
        },
        {
          name: 'Security Frameworks (ISO27001, NIST)',
          description: 'Applying recognized security standards to ensure compliance and risk management.'
        },
        {
          name: 'Application Security',
          description: 'Ensuring software is designed, developed, and maintained securely.'
        },
        {
          name: 'Infrastructure Security',
          description: 'Securing physical and virtual infrastructure including servers, storage, and networks.'
        },
        {
          name: 'Incident Response',
          description: 'Detecting, analyzing, and responding to security incidents to mitigate impact.'
        },
        {
          name: 'Compliance Management',
          description: 'Monitoring and enforcing adherence to internal policies and external regulations.'
        },
        {
          name: 'Threat Modeling',
          description: 'Structuring potential threats to determine risk levels and necessary controls.'
        }
      ]
    }
  },
  {
    job_title: 'Penetration Tester - Red Team Operations ($120K-$140K)',
    prediction: {
      category_name: 'CyberSecurity Testers',
      category_description: 'Conduct security testing and identify vulnerabilities through simulated attacks.',
      category_color: '#E91E63'
    },
    skills: {
      skill_count: 9,
      extracted_skills: [
        {
          name: 'Penetration Testing',
          description: 'Simulating attacks to identify exploitable vulnerabilities in systems or applications.'
        },
        {
          name: 'Vulnerability Assessment',
          description: 'Systematic review of security weaknesses in an information system.'
        },
        {
          name: 'Kali Linux',
          description: 'Using a specialized Linux distribution for penetration testing and ethical hacking.'
        },
        {
          name: 'Metasploit',
          description: 'Utilizing a penetration testing framework for developing and executing exploit code.'
        },
        {
          name: 'Network Scanning',
          description: 'Detecting active devices and open ports in a network to identify vulnerabilities.'
        },
        {
          name: 'Web App Security',
          description: 'Protecting web applications from common threats like XSS and SQL injection.'
        },
        {
          name: 'Reporting Findings',
          description: 'Documenting vulnerabilities, impacts, and recommended remediations.'
        },
        {
          name: 'Exploit Development',
          description: 'Creating tools or techniques to leverage system vulnerabilities.'
        },
        {
          name: 'Burp Suite',
          description: 'Using an integrated platform for performing security testing of web applications.'
        }
      ]
    }
  },
  {
    job_title: 'SOC Analyst Level 2 - 24/7 Security Operations Center',
    prediction: {
      category_name: 'CyberSecurity Analyst',
      category_description: 'Monitor, detect, and respond to security incidents in real-time.',
      category_color: '#2196F3'
    },
    skills: {
      skill_count: 8,
      extracted_skills: [
        {
          name: 'SIEM Tools',
          description: 'Monitoring, analyzing, and correlating security logs to detect suspicious activity.'
        },
        {
          name: 'Log Analysis',
          description: 'Reviewing system and application logs to identify anomalies or security issues.'
        },
        {
          name: 'Incident Response',
          description: 'Detecting, analyzing, and responding to security incidents to mitigate impact.'
        },
        {
          name: 'Threat Hunting',
          description: 'Proactively searching for hidden threats in systems and networks.'
        },
        {
          name: 'Firewall Rules',
          description: 'Defining rules to control incoming and outgoing network traffic.'
        },
        {
          name: 'Security Monitoring',
          description: 'Continuously observing systems for signs of security incidents.'
        },
        {
          name: 'Endpoint Detection',
          description: 'Monitoring end-user devices for signs of malware or attacks.'
        },
        {
          name: 'SOC Workflow',
          description: 'Executing procedures and processes used in a Security Operations Center.'
        }
      ]
    }
  },
  {
    job_title: 'Information Security Manager - Healthcare Sector (Hybrid)',
    prediction: {
      category_name: 'Information Security',
      category_description: 'Manage information protection strategies, compliance, and governance.',
      category_color: '#009688'
    },
    skills: {
      skill_count: 10,
      extracted_skills: [
        {
          name: 'ISO27001',
          description: 'Implementing information security management system best practices.'
        },
        {
          name: 'GDPR',
          description: 'Ensuring compliance with European Union data protection regulations.'
        },
        {
          name: 'Risk Assessment',
          description: 'Evaluating risks to systems and data to guide mitigation efforts.'
        },
        {
          name: 'Security Policies',
          description: 'Defining organizational guidelines for secure system and data handling.'
        },
        {
          name: 'Compliance Auditing',
          description: 'Assessing adherence to policies, standards, and regulations.'
        },
        {
          name: 'Information Classification',
          description: 'Labeling data based on sensitivity and required protection levels.'
        },
        {
          name: 'Data Loss Prevention',
          description: 'Preventing unauthorized data transfer or leakage.'
        },
        {
          name: 'Security Awareness Training',
          description: 'Educating employees on cybersecurity best practices and risks.'
        },
        {
          name: 'Third-party Risk',
          description: 'Managing risks posed by vendors and service providers.'
        },
        {
          name: 'Policy Enforcement',
          description: 'Implementing and monitoring compliance with internal policies.'
        }
      ]
    }
  },
  {
    job_title: 'Cybersecurity Consultant - Risk Advisory (Big 4 Firm)',
    prediction: {
      category_name: 'CyberSecurity Consultant',
      category_description: 'Advise clients on security strategies, controls, and risk mitigation.',
      category_color: '#FF9800'
    },
    skills: {
      skill_count: 9,
      extracted_skills: [
        {
          name: 'Security Consulting',
          description: 'Providing expert advice on improving an organization security posture.'
        },
        {
          name: 'Risk Assessment',
          description: 'Evaluating risks to systems and data to guide mitigation efforts.'
        },
        {
          name: 'Client Advisory',
          description: 'Advising clients on risk management and security strategy.'
        },
        {
          name: 'Security Frameworks',
          description: 'Applying structured approaches to manage cybersecurity risks.'
        },
        {
          name: 'Cloud Security Strategy',
          description: 'Designing plans to secure cloud-based environments.'
        },
        {
          name: 'Audit Readiness',
          description: 'Preparing systems and documentation for security audits.'
        },
        {
          name: 'Governance Models',
          description: 'Establishing structures and policies for IT security oversight.'
        },
        {
          name: 'Security Roadmaps',
          description: 'Planning strategic security initiatives over time.'
        },
        {
          name: 'Regulatory Compliance',
          description: 'Meeting the requirements set by laws and regulatory bodies.'
        }
      ]
    }
  },
  {
    job_title: 'Cybersecurity Operations Engineer - Fortune 500 Company',
    prediction: {
      category_name: 'CyberSecurity Operations',
      category_description: 'Maintain and support core security infrastructure and respond to events.',
      category_color: '#4CAF50'
    },
    skills: {
      skill_count: 8,
      extracted_skills: [
        {
          name: 'Security Monitoring',
          description: 'Continuously observing systems for signs of security incidents.'
        },
        {
          name: 'SIEM Integration',
          description: 'Connecting systems and services to a central SIEM for unified monitoring.'
        },
        {
          name: 'Log Correlation',
          description: 'Linking log events from multiple sources to detect complex threats.'
        },
        {
          name: 'Patch Management',
          description: 'Regularly updating software to fix vulnerabilities.'
        },
        {
          name: 'Automation Tools',
          description: 'Using scripts or platforms to automate security tasks.'
        },
        {
          name: 'Firewall Administration',
          description: 'Managing firewall configuration and performance.'
        },
        {
          name: 'Ticketing Systems',
          description: 'Tracking security incidents and tasks through structured workflows.'
        },
        {
          name: 'Threat Detection',
          description: 'Identifying malicious activity or potential attacks.'
        }
      ]
    }
  }
];

export const MOCK_BATCH_SUMMARY = {
  total_jobs: 25,
  categories_found: 6,
  model_mode: 'demo_mode',
  extractor_mode: 'advanced'
};

// Course input data for course mapping
export const COURSE_INPUT = {
  domain: 'Information Security',
  university: 'University of Sydney',
  credits: 6,
  description: 'With unprecedented ability and opportunities to collect personal data or information, privacy has become an essential aspect of cybersecurity. Many industries have experienced intentional and unintentional privacy breaches in the last few years. As such, the general public is also becoming aware of the value of protecting their digital privacy, while regulatory authorities are introducing new privacy regulations and guidelines. This unit provides theoretical, design and practical skills that are required to design and deploy privacy preserving technologies to protect user privacy in collection, computation and management of data. Emphasis is placed on practical implications of privacy preserving technologies with examples and perspectives from industry.',
  extractedSkills: [
    'Data Privacy Principles',
    'Anonymization & K-Anonymity',
    'GDPR Compliance',
    'Privacy-by-Design',
    'Privacy Risk Assessment',
    'Differential Privacy',
    'Privacy in AI and IoT',
    'Data Governance',
    'Privacy Frameworks (PIA, Policies)',
    'De-identification & Pseudonymization',
    'Privacy Impact Assessment',
    'Data Classification',
    'Privacy Breach Response',
    'Regulatory Compliance Analysis',
    'Data Retention Policies',
    'Privacy-Preserving Technologies',
    'Data Stewardship',
    '5G Network Privacy',
    'IoT Privacy Implementation',
    'Privacy Case Study Analysis',
    'Data Profiling Risk Mitigation',
    'Privacy Policy Development',
    'Information Entropy Analysis',
    'Cross-Border Data Transfer',
    'Privacy in Machine Learning'
  ]
};