// About section
function About() {
  const skills = {
    'Languages': ['Java', 'C', 'Python', 'JavaScript','Typescript', 'SQL', 'R', 'PHP', 'HTML/CSS', 'XML', 'JSON'],
    'Frameworks & Tools': ['React', 'Excel', 'Generative & Agentic AI Models', 'Microsoft Office 365', 'Node.js', 'Android Studio', 'Git/GitHub', 'Tableau', 'Power BI', 'Jupyter', 'Postman', 'SolidWorks CAD', 'eclipse','VS Code','Snowflake', 'DMBMS','CRM Systems', 'Figma', 'Miro', 'Confluence'],
    'Soft Skills': ['Requirement Analysis', 'Critical Thinking', 'Active listening', 'Team Collaboration', 'Problem-solving','Emotional Intelligence','Bilingual (EN/FR)'],
    'Technical Skills': ['Data Visualization', 'Machine Learning', 'Statistical Analysis', 'Web Development', 'Solution Design', 'Object Oriented Programming', 'Data Structures']
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
            React.createElement('h2', { className: 'section-title' }, 'The Person Behind the Code')
          ),

          React.createElement('p', { className: 'reveal reveal-delay-1' },
            'Hi I\'m ', React.createElement('span', null, 'Afua'),
            ' — a Computer Science student at the ', React.createElement('span', null, 'University of British Columbia'),
            ' graduating in 2026. I\'m passionate about using technology to solve real problems. I achieve my mission by leveraging mobile apps, data platforms, product design, troubleshooting and intuitive web sites.'
          ),

          React.createElement('p', { className: 'reveal reveal-delay-2' },
            'My work spans — from Android dev in Java to SQL pipelines, from solution designs to data analysis using Python. I\'ve had the chance to learn and apply my skills at organizations like ',
            React.createElement('span', null, 'Symend'),
            ' and the ',
            React.createElement('span', null, 'Government of Canada (Innovation, Science and Economic Development Canada)'),
            '.'
          ),

          React.createElement('p', { className: 'reveal reveal-delay-2' },
            'Away from my work, you\'ll find me biking, curating music playlists, shooting photography, or making digital art. I\'m fully bilingual in ',
            React.createElement('span', null, 'English and French'),
            '.'
          ),

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
