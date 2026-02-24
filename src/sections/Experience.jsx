// Experience section — tabbed: Work / Education / Volunteering
function Experience() {
  const [activeTab, setActiveTab] = React.useState('work');

  const work = [
    {
      company: 'Symend',
      role: 'Solutions Analyst Intern',
      date: 'December 2025 – April 2026',
      location: 'Hybrid',
      bullets: [
        'Contribute to scalable and reliable backend processes supporting financial and debt-collection workflows.',
        'Support production systems and backend configurations used by banks and large telecommunications clients, ensuring stability and accuracy across live data pipelines.',
        'Collaborate with engineering teams to analyze incidents, validate system behavior, and troubleshoot data inconsistencies impacting client operations.',
        'Build and execute SQL queries in Snowflake and DBeaver to generate, validate, and audit large-scale datasets for performance testing and system verification.',
        'Review and manipulate JSON configurations to publish accurate system designs, reducing turnaround time by 16% and minimizing deployment errors.',
 
      ],
    },
    {
      company: 'Symend',
      role: 'Business Systems Analyst Intern',
      date: 'Sep 2024 – December 2025',
      location: 'Hybrid',
      bullets: [
         'Act as a bridge between technical and business teams by translating business requirements into system configurations and validation logic.',
        'Provide consistent recommendations to improve client financial debt collection processes through optimized solution design based on understanding of client specific business requirements.',
        'Understand company product & system design in order to deliver standardized data driven solutions and ensure client onboarding & retention after POV period.',
        'Present data-driven insights to improve client relationships and onboarding process.',
      'Update, audit, and publish solution designs through JSON file manipulation to reduce turnaround time.',
    ],
    },
    {
      company: 'Government of Canada (ISED)',
      role: 'Student Data Analyst',
      date: 'May 2024 – Aug 2024',
      location: 'Remote',
      bullets: [
        'Developed automated Power BI templates to improve reporting accuracy and efficiency for HR analytics teams.',
        'Validated datasets to ensure data integrity and consistency for executive-level dashboards.',
        'Designed infographics for senior leadership supporting the Federal 2023–2025 Employment Equity, Diversity, and Inclusion Project.',
        'Strengthened experience working in high-accountability environments with strict data accuracy standards.',
      ],
    },
    {
      company: 'Telus International AI',
      role: 'Freelance Online Data Analyst',
      date: 'Sep 2023 – Apr 2024',
      location: 'Remote',
      bullets: [
        'Applied logical deduction and QA processes to validate data integrity, achieving 100% improvement in data accuracy.',
        'Enhanced AI search processes by identifying and rectifying anomalies in international search queries.',
      ],
    },
    {
      company: 'UBC Engineering — Geering Up',
      role: 'Instructor',
      date: 'Jan 2023 – Apr 2023',
      location: 'Kelowna, BC',
      bullets: [
        'Delivered hands-on programming and STEM workshops to over 30 students at a time, emphasizing structured problem-solving and logical thinking.',
        'Coordinated with instructors to plan, refine, and execute weekly learning modules.',
        'Developed strong communication skills by translating technical concepts to non-technical audiences.',
      ],
    },
  ];

  const education = [
    {
      company: 'University of British Columbia',
      role: 'BSc, Computer Science',
      date: 'Sep 2021 – Expected 2026',
      location: 'Kelowna, BC',
      bullets: [
        'Co-op student with coursework in Data Structures, Databases, Data Analysis, Machine Learning, Web Programming, Operating Systems, Human Computer Interaction, Software Engineering, Network Science, Computer Graphics, Computer Architecture, and Algorithms.',
        'Full professional proficiency in English and French.',
      ],
    },
    {
      company: 'Bishop Carroll High School',
      role: 'Diploma',
      date: 'Sep 2016 – Jun 2019',
      location: 'Calgary, AB',
      bullets: [
        'Graduated with Honours and Distinction.',
        'French Immersion Diploma graduate and Alexander Rutherford Scholarship recipient (80%+ graduating average).',
      ],
    },
  ];

  const volunteering = [
     {
      company: 'UBC AI Club',
      role: 'Design Director',
      date: 'Sep 2025 – Ongoing',
      location: 'Kelowna, BC',
      bullets: ['Lead creative direction for technical events and projects.',
                'Collaborate with the executive team to maintain consistent branding and communication.',
      ],
    },
    {
      company: 'UBC SUO Red Cross',
      role: 'Social Media Manager',
      date: 'Sep 2023 – Ongoing',
      location: 'Kelowna, BC',
      bullets: [
        'Used Canva and Adobe Suite to create visually engaging posts; grew club online engagement by 33.6% in the first term.',
        'Promoted bake sale fundraiser which raised over $800 for Islamic International Relief.',
      ],
    },
    {
      company: 'Droppin In YYC Collective',
      role: 'Coordinator',
      date: 'Summer 2021 – Ongoing',
      location: 'Calgary, AB',
      bullets: [
        'Organized and coordinated monthly group meetups of over 50 people.',
        'Established a means of making skating accessible to marginalized youth in Mokinshis, Alberta.',
        'Coached a wide range of individuals on skating and safety skills.',
      ],
    },
    {
      company: 'Centre for Reproductive Health',
      role: 'Data Entry Volunteer',
      date: 'Summer 2023',
      location: 'Kelowna, BC',
      bullets: [
        'Maintained strict data accuracy and confidentiality standards.',
        'Reduced weekly administrative workload by 4+ hours through efficient processing.',
      ],
    },
    {
      company: 'Calgary Black Film Festival',
      role: 'Volunteer',
      date: 'Summer 2023',
      location: 'Calgary, AB',
      bullets: [
        'Implemented Java’s Hashmap and basic hashing techniques to find first occurrence of word in a given text url.',
        'Ensured a low collision function was used and thrown exceptions were handled.',
        'Implemented Unit Testing to assess corner cases and overall code functionality.',
      ],
    },
    {
      company: 'Westside Recreation Centre',
      role: 'Gym Monitor',
      date: 'Sep 2018 – Summer 2022',
      location: 'Calgary, AB',
      bullets: [
        'Reinforced integrated facility monitoring via two-way radio system, ensuring patron safety.',
        'Trained youth volunteers, planned youth nights, and devised equitable gym schedules.',
      ],
    },
  ];

  const certifications = [
     
    {
      title: 'learning Hubspot : CRM basics',
      date: 'February 2026',
      issuer: 'LinkedIn Learning',
    },
    {
      title: 'Zendesk Customer Service Professional certificate',
      date: 'Ongoing',
      issuer: 'LinkedIn Learning',
    },
    {
      title: 'Playwright Web Testing and Automation',
      date: 'January 2026',
      issuer: 'Udemy',
    },
     {
      title: 'Database Web Development Badge',
      date: 'December 2023',
      issuer: 'UBC',
    },
  ];

  const tabs = [
    { key: 'work',        label: 'Work Experience', data: work        },
    { key: 'education',   label: 'Education',       data: education   },
    { key: 'volunteering',label: 'Volunteering',    data: volunteering},
  ];

  const currentData = tabs.find(t => t.key === activeTab).data;

  return React.createElement('section', { id: 'experience', className: 'page-section' },
    React.createElement('div', { className: 'container' },

      // Header
      React.createElement('div', { className: 'section-header reveal' },
        React.createElement('span', { className: 'section-label' }, '02. Experience'),
        React.createElement('h2', { className: 'section-title' }, 'Where I\'ve Worked & Studied'),
        React.createElement('p', { className: 'section-subtitle' },
          'A timeline of my professional journey, academic background, and community involvement.'
        )
      ),

      // Tabs
      React.createElement('div', { className: 'exp-tabs reveal' },
        ...tabs.map(tab =>
          React.createElement('button', {
            key: tab.key,
            className: `exp-tab ${activeTab === tab.key ? 'active' : ''}`,
            onClick: () => setActiveTab(tab.key)
          }, tab.label)
        )
      ),

      // Timeline
      React.createElement('div', { className: 'timeline reveal' },
        ...currentData.map((item, i) =>
          React.createElement('div', { key: i, className: 'timeline-item' },
            React.createElement('div', { className: 'timeline-dot' }),
            React.createElement('div', { className: 'timeline-card' },
              React.createElement('div', { className: 'timeline-meta' },
                React.createElement('div', null,
                  React.createElement('div', { className: 'timeline-company' }, item.company),
                  React.createElement('div', { className: 'timeline-role' }, item.role),
                  React.createElement('div', { className: 'timeline-location' },
                    React.createElement('i', { className: 'fa-solid fa-location-dot' }),
                    item.location
                  )
                ),
                React.createElement('span', { className: 'timeline-date' }, item.date)
              ),
              React.createElement('ul', { className: 'timeline-bullets' },
                ...item.bullets.map((b, j) =>
                  React.createElement('li', { key: j }, b)
                )
              )
            )
          )
        )
      )
    )
  );
}
