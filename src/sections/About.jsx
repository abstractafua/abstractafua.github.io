// About section
function About() {
  const skills = {
    'Languages': ['Java', 'C', 'Python', 'JavaScript','Typescript', 'SQL', 'R', 'PHP', 'HTML/CSS', 'XML', 'JSON'],
    'Frameworks & Tools': ['React', 'Docker','Microsoft Excel','Snowflake', 'Power BI','Generative & Agentic AI Models', 'Postman','JIRA', 'Pytest','Microsoft Office 365', 'Database Management Systems','Node.js', 'Android Studio', 'Git/GitHub', 
      'Tableau', 'Jupyter',  'SolidWorks CAD', 'CRM Systems','VS Code', 'Figma', 'Miro', 'Confluence'],
    'Soft Skills': ['Requirement Analysis', 'Critical Thinking', 'Active listening', 'Team Collaboration', 'Problem-solving','Emotional Intelligence','Bilingual (EN/FR)'],
    'Technical Skills': ['Data Visualization', 'Technical Translation', 'Machine Learning', 'Statistical Analysis', 'Web Development', 'Solution Design', 'Object Oriented Programming', 'Data Structures & Algorithms']
  };


  return React.createElement('section', { id: 'about', className: 'page-section' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'about-grid' },

        // Image
        React.createElement('div', { className: 'about-image-wrap reveal' },
          React.createElement('img', {
            src: 'images/1763576275196.jpg',
            alt: 'Illustrated portrait of Afua Frempong'
          })
        ),

        // Text
        React.createElement('div', { className: 'about-text' },
          React.createElement('div', { className: 'section-header reveal' },
            React.createElement('span', { className: 'section-label' }, '01. About Me'),
            React.createElement('h2', { className: 'section-title' }, 'Behind the Screen')
          ),

          React.createElement('p', { className: 'reveal reveal-delay-1' },
            'Hi I\'m ', React.createElement('span', null, 'Afua'),
            ' — a Computer Science student at the ', React.createElement('span', null, 'University of British Columbia'),
            ' graduating in Spring of 2026. I\'m passionate about using technology to solve real problems.'
          ),

          React.createElement('p', { className: 'reveal reveal-delay-2' },
            'My work spans from application development to data dashboards and from solution designs to data analysis using SQL. I\'ve had the chance to learn and apply my skills during my time at UBC as well as with private and public organizations such as ',
            React.createElement('span', null, 'Symend'),
            ' and the ',
            React.createElement('span', null, 'Government of Canada'),
            '.'
          ),

          React.createElement('p', { className: 'reveal reveal-delay-2' },
            'Away from my work, you\'ll find me biking, curating spotify playlists, shooting photography, or making digital art.'),

          // Skills
          ...Object.entries(skills).map(([category, items], i) =>
            React.createElement(React.Fragment, { key: category },
              React.createElement('p', { className: `skills-heading reveal reveal-delay-${Math.min(i + 1, 3)}` }, category),
              React.createElement('div', { className: `skills-grid reveal reveal-delay-${Math.min(i + 1, 3)}` },
                ...items.map(s =>
                  React.createElement('span', { key: s, className: 'skill-chip' }, s)
                )
              )
            )
          )
        )
      )
    )
  );
}
