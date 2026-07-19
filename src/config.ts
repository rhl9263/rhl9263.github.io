// Site-wide configuration. Edit once, propagates everywhere.

export const site = {
  name: 'Rahul Kumar',
  role: 'Senior SDET',
  years: '4.6',
  location: 'Bangalore, India',
  tagline:
    'Results-driven Senior SDET designing comprehensive test automation frameworks for web applications, APIs, and cloud-native architectures. Expert in AI-powered tools, CI/CD pipelines, and performance testing.',
  currentGig: {
    company: 'NextGen Healthcare',
    title: 'Senior QA Automation Engineer / SDET-II',
    url: 'https://www.nextgen.com',
  },
  urls: {
    email: 'rahul31raja@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rahul34/',
    linkedinLabel: 'linkedin.com/in/rahul34',
    github: 'https://github.com/rhl9263',
    githubLabel: 'github.com/rhl9263',
    phone: '+91-8709814557',
    resumePdf: '/RahulKumar_Resume.pdf',
    // The whiz.pub blog URL. Once you sign up at https://app.whiz.pub/auth/signup
    // and pick your subdomain, replace with e.g. 'https://kumarrahul.whiz.pub'.
    // If left empty, the nav Blog link falls back to whiz.pub landing page.
    blogUrl: '',
    // Enable RSS fetch to render latest posts inline on homepage.
    // Requires blogUrl above to be set to a live whiz.pub subdomain.
    blogRssEnabled: false,
  },
};

export const projects = [
  {
    number: '01',
    title: 'AI-Powered Test Data Generator',
    tags: ['React', 'ChatGPT API'],
    description:
      'Developed React-based web application integrated with ChatGPT API and product backend APIs to intelligently generate realistic patient profiles with diverse clinical datasets, reducing test data preparation time by 80% and improving test coverage comprehensiveness.',
    stack: ['React', 'ChatGPT API', 'TypeScript', 'REST APIs'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/rhl9263' },
    ],
  },
  {
    number: '02',
    title: 'Test Suite Modernization',
    tags: ['180+ test cases', 'Re-engineering'],
    description:
      'Led initiative to refactor and modernize legacy test suite of 180+ obsolete test cases, re-engineering test scenarios aligned with current business requirements through stakeholder interviews and product owner reviews.',
    stack: ['Cypress', 'JavaScript', 'BDD', 'Cucumber'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/rhl9263' },
    ],
  },
  {
    number: '03',
    title: 'Performance Testing Framework',
    tags: ['K6', 'API Performance'],
    description:
      'Implemented K6-based performance testing framework for critical API endpoints, identifying and documenting performance bottlenecks that improved system response time by 40% under peak load conditions.',
    stack: ['K6', 'JavaScript', 'Grafana', 'REST APIs'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/rhl9263' },
    ],
  },
  {
    number: '04',
    title: 'AI Tool Integration',
    tags: ['GitHub Copilot', 'Windsurf'],
    description:
      'Pioneered adoption of AI coding assistants (GitHub Copilot, Windsurf) within QA team, creating best practice guidelines that accelerated team productivity by 25% and improved code quality.',
    stack: ['GitHub Copilot', 'Windsurf IDE', 'ChatGPT', 'Claude'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/rhl9263' },
    ],
  },
];

export const experience = [
  {
    company: 'NextGen Healthcare - Health Data Hub',
    role: 'Senior QA Automation Engineer / SDET-II',
    subtitle: 'Bangalore, India',
    location: 'Bangalore, India',
    from: 'Jun 2024',
    to: 'Present',
    highlights: [
      {
        title: 'AI-Enhanced Test Automation',
        body: 'Leveraged ChatGPT, Claude, and Windsurf IDE to generate 200+ optimized test scenarios and automate complex edge cases, reducing test script development time by 35%.',
      },
      {
        title: 'Framework Architecture',
        body: 'Designed and implemented scalable, data-driven automation framework using Cypress and Playwright with JavaScript, TypeScript, Bluebird, Lodash, Jest and Mocha for an Angular-based SaaS platform having Java microservices and AWS Lambda backend, achieving 85% test automation coverage.',
      },
      {
        title: 'CI/CD Pipeline Optimization',
        body: 'Integrated Playwright test suites with Jenkins CI/CD pipelines, implementing parallel execution strategies that reduced regression testing cycles by 40% and deployment validation time from 2.5 hours to 90 minutes.',
      },
      {
        title: 'Cloud-Native Testing',
        body: 'Conducted comprehensive end-to-end testing for AWS serverless architectures, validating Lambda function workflows, S3 data pipelines, Cognito authentication, and API Gateway integrations using custom automation scripts.',
      },
      {
        title: 'Mobile Testing',
        body: 'Architected and implemented an end-to-end mobile automation suite using Detox with TypeScript, leveraging its automatic synchronization to eliminate test flakiness and reduce execution times across iOS and Android emulators by 35%.',
      },
      {
        title: 'Database & Pipeline Validation',
        body: 'Developed automated PostgreSQL/MySQL test scripts to validate data integrity across complex AWS S3 and Lambda data pipelines, identifying data consistency anomalies and preventing downstream corrupted syncs in pre-production.',
      },
      {
        title: 'API Contract Testing',
        body: 'Established robust API testing framework using Cypress and Postman, ensuring 100% compliance with OpenAPI specifications and reducing production API defects by 30%.',
      },
      {
        title: 'Quality Leadership',
        body: 'Led test planning, risk assessment, and release sign-off for 8+ major product releases. Collaborated with product managers, developers, and stakeholders to define comprehensive test strategies and acceptance criteria.',
      },
      {
        title: 'Defect Management',
        body: 'Analyzed and resolved 150+ customer-reported production issues through systematic root-cause analysis, reducing critical defects by 28% through targeted test coverage improvements.',
      },
      {
        title: 'Mentorship & Training',
        body: 'Mentored junior QA engineers on Cypress automation, AWS testing strategies, BDD practices, and AI tool integration for test development.',
      },
    ],
  },
  {
    company: 'Tata Consultancy Services - India Post',
    role: 'QA Automation Engineer',
    subtitle: 'Bangalore, India',
    location: 'Bangalore, India',
    from: 'Dec 2021',
    to: 'Jun 2024',
    highlights: [
      {
        title: 'E2E Test Automation',
        body: "Collaborated with QA lead to architect and develop comprehensive Cypress-Cucumber BDD framework from scratch, automating 70% of critical user journeys for India Post's Delivery and Postman Management System (DPMS) serving 5M+ users.",
      },
      {
        title: 'Multi-Framework Implementation',
        body: 'Implemented dual automation approach using Cypress (JavaScript) for web UI and Selenium (Python) for legacy system integration, ensuring comprehensive test coverage across heterogeneous technology stack.',
      },
      {
        title: 'API Testing & Automation',
        body: 'Designed and executed 150+ Postman API test collections validating REST API contracts. Automated API regression suite using Cypress, reducing manual API testing effort by 60%.',
      },
      {
        title: 'Database Validation',
        body: 'Developed Oracle SQL test scripts for data integrity validation, implementing automated ETL testing procedures that identified 45+ data consistency issues pre-production.',
      },
      {
        title: 'Process Optimization',
        body: 'Created Python-based automation tool that optimized 90% of manual reporting workflows, generating automated test execution reports and metrics dashboards for stakeholder visibility.',
      },
      {
        title: 'Quality Assurance Leadership',
        body: 'Owned end-to-end QA lifecycle including requirement analysis, test planning, design reviews, test case development, execution coordination, and release sign-off for bi-weekly sprint deliverables.',
      },
      {
        title: 'Cross-Functional Collaboration',
        body: 'Partnered with business analysts and product owners to refine acceptance criteria, participated in daily standups, sprint planning, and retrospectives in Agile/Scrum environment.',
      },
    ],
  },
];

export const skills = [
  {
    title: 'Programming Languages',
    items: ['JavaScript (Expert)', 'Python (Advanced)', 'TypeScript (Advanced)', 'SQL', 'Java (Basics)'],
  },
  {
    title: 'AI-Powered Tools',
    items: ['ChatGPT', 'Claude', 'Cursor', 'Windsurf IDE', 'GitHub Copilot'],
  },
  {
    title: 'Test Automation Frameworks',
    items: ['Playwright', 'Selenium WebDriver', 'TestNG', 'RestAssured', 'Detox', 'WebDriverIO'],
  },
  {
    title: 'API Testing & Performance',
    items: ['Postman', 'Newman', 'Playwright', 'Jest', 'Request', 'K6', 'JMeter', 'WireMock'],
  },
  {
    title: 'BDD, TDD & Design Patterns',
    items: ['Cucumber', 'Page Object Model (POM)', 'Data-Driven Framework'],
  },
  {
    title: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Docker'],
  },
  {
    title: 'Cloud & Serverless',
    items: ['AWS Lambda', 'AWS S3', 'AWS Cognito', 'AWS CloudWatch', 'Serverless Framework', 'Linux CLI', 'Shell Scripting'],
  },
  {
    title: 'Database Testing',
    items: ['Oracle SQL', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Version Control & Tools',
    items: ['Git', 'GitLab', 'Jira', 'Confluence', 'TestRail'],
  },
  {
    title: 'Testing Methodologies',
    items: ['Functional', 'Regression', 'Smoke', 'Sanity', 'Integration', 'E2E', 'White Box', 'Black Box'],
  },
];

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS', year: 'Pursuing' },
  { name: 'Cypress.io Certification', issuer: 'Cypress', year: '2023' },
  { name: 'Advanced JavaScript & TypeScript', issuer: 'Online', year: '2023' },
  { name: 'AI-Assisted Software Development', issuer: 'Online', year: '2024' },
];

export const education = [
  {
    institution: 'Asansol Engineering College',
    degree: 'Bachelor of Technology in Electrical Engineering',
    grade: 'CGPA: 8.4/10',
    location: 'Asansol, India',
    from: 'Aug 2015',
    to: 'Jul 2019',
  },
  {
    institution: 'Ram Krishna Mission, Deoghar',
    degree: 'Higher Secondary',
    grade: 'Percentage: 91.40',
    location: 'Deoghar, India',
    from: 'May 2014',
    to: 'Apr 2015',
  },
];

export const quickFacts = [
  { label: 'Currently', value: 'NextGen Healthcare — Senior SDET-II' },
  { label: 'Based in', value: 'Bangalore, India' },
  { label: 'Open to', value: 'Challenging QA & SDET roles' },
  { label: 'Degree', value: 'B.Tech EE, Asansol Engineering College (CGPA 8.4)' },
];

export const professionalDevelopment = {
  continuousLearning: [
    'AWS Certified Cloud Practitioner (Pursuing)',
    'Cypress.io Certification',
    'Advanced JavaScript & TypeScript',
    'AI-Assisted Software Development',
  ],
  areasOfInterest: [
    'Test Automation',
    'AI/ML in QA',
    'Cloud Testing',
    'Performance Engineering',
    'DevOps Practices',
  ],
};
