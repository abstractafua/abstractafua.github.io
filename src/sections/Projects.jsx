// Projects section — filterable card grid
function Projects() {
  const [filter, setFilter] = React.useState('All');

  const projects = [
    {
      title: 'Aid-Finder',
      desc: 'Android app that locates nearby food banks, shelters, and community resources for people facing housing or food insecurity. Implements Google Maps API for navigation.',
      tags: ['Mobile', 'Java', 'Android', 'API'],
      image: 'images/p1.png',
      demo: 'media/AID FINDER App demo.mp4',
      code: 'https://github.com/abstractafua',
      type: 'Mobile',
    },
    {
      title: 'Learning Layers',
      desc: 'Full-stack e-learning platform with course management, user authentication, and interactive content delivery.',
      tags: ['Web', 'Full-Stack'],
      image: 'images/Screenshot 2024-07-30 at 10.32.38 PM.png',
      code: 'https://github.com/abstractafua',
      type: 'Web',
    },
    {
      title: 'Kicks!',
      desc: 'Database-driven Amazon-style storefront that sells shoes, featuring product listings, user accounts, and cart functionality.',
      tags: ['Web', 'SQL', 'PHP', 'Database'],
      image: 'images/p2.0.png',
      code: 'https://github.com/abstractafua',
      type: 'Web',
    },
    {
      title: 'Ziki',
      desc: 'Online forum and blog platform where users can post, comment, and engage in community discussions.',
      tags: ['Web', 'Full-Stack'],
      image: 'images/design12.jpg',
      code: 'https://github.com/abstractafua',
      type: 'Web',
    },
    {
      title: "Afua's Farm",
      desc: 'FarmVille-style farming simulation game built in Java, featuring resource management, planting cycles, and animated game states.',
      tags: ['Game', 'Java'],
      image: 'images/p3.jpg',
      code: 'https://github.com/abstractafua',
      type: 'Game',
    },
    {
      title: 'Plane Crash Data Analysis',
      desc: 'Statistical write-up and data analysis on plane crash data mined from the WHO. Includes regression models and visualizations in R.',
      tags: ['Data', 'R', 'Analysis'],
      image: 'images/p4.1.png',
      code: 'https://github.com/abstractafua',
      type: 'Data',
    },
    {
      title: 'Game Show Simulator',
      desc: 'Interactive computer game simulating a classic game show with randomized challenges, scoring, and a dynamic interface.',
      tags: ['Game', 'Java'],
      image: 'images/p5.1.png',
      code: 'https://github.com/abstractafua',
      type: 'Game',
    },
    {
      title: 'AT-TE Walker (CAD)',
      desc: 'Highly detailed Computer-Aided Design of the Star Wars AT-TE walker using SolidWorks, modelling all major mechanical assemblies.',
      tags: ['CAD', 'SolidWorks'],
      image: 'images/atte.jpg',
      code: 'https://github.com/abstractafua',
      type: 'CAD',
    },
    {
      title: 'APSC 171 CAD Project',
      desc: 'Engineering design project using SolidWorks CAD — applied rapid prototyping principles and team-based design methodology.',
      tags: ['CAD', 'SolidWorks'],
      image: 'images/IMG_3615 copy.png',
      code: 'https://github.com/abstractafua',
      type: 'CAD',
    },
    {
      title: 'This Portfolio',
      desc: 'You\'re looking at it! Built from scratch with React (CDN), modular JSX components, and a fully custom CSS design system.',
      tags: ['Web', 'React', 'CSS'],
      image: 'images/Screenshot 2024-07-30 at 10.33.42 PM.png',
      code: 'https://github.com/abstractafua/abstractafua.github.io',
      type: 'Web',
    },
  ];

  const filters = ['All', 'Web', 'Mobile', 'Data', 'Game', 'CAD'];

  const visible = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return React.createElement('section', { id: 'projects', className: 'page-section' },
    React.createElement('div', { className: 'container' },

      React.createElement('div', { className: 'section-header reveal' },
        React.createElement('span', { className: 'section-label' }, '03. Projects'),
        React.createElement('h2', { className: 'section-title' }, 'Things I\'ve Built'),
        React.createElement('p', { className: 'section-subtitle' },
          'A mix of academic work, personal experiments, and professional contributions.'
        )
      ),

      // Filter bar
      React.createElement('div', { className: 'filter-bar reveal' },
        ...filters.map(f =>
          React.createElement('button', {
            key: f,
            className: `filter-btn ${filter === f ? 'active' : ''}`,
            onClick: () => setFilter(f)
          }, f)
        )
      ),

      // Grid
      React.createElement('div', { className: 'projects-grid' },
        ...visible.map((proj, i) =>
          React.createElement('div', { key: proj.title, className: 'project-card' },

            // Thumbnail
            React.createElement('div', { className: 'project-thumb-wrap' },
              React.createElement('img', {
                src: proj.image,
                alt: proj.title,
                className: 'project-thumb',
                loading: 'lazy'
              }),
              React.createElement('div', { className: 'project-thumb-overlay' },
                React.createElement('i', { className: 'fa-solid fa-arrow-up-right-from-square' })
              )
            ),

            // Body
            React.createElement('div', { className: 'project-body' },
              React.createElement('div', { className: 'project-tags' },
                ...proj.tags.map(t =>
                  React.createElement('span', { key: t, className: 'project-tag' }, t)
                )
              ),
              React.createElement('h3', { className: 'project-title' }, proj.title),
              React.createElement('p', { className: 'project-desc' }, proj.desc),

              // Footer links
              React.createElement('div', { className: 'project-footer' },
                React.createElement('a', {
                  href: proj.code,
                  target: '_blank', rel: 'noopener noreferrer',
                  className: 'project-link'
                },
                  React.createElement('i', { className: 'fa-brands fa-github' }),
                  'Code'
                ),
                proj.demo && React.createElement('a', {
                  href: proj.demo,
                  className: 'project-link'
                },
                  React.createElement('i', { className: 'fa-solid fa-play' }),
                  'Demo'
                )
              )
            )
          )
        )
      )
    )
  );
}
