// Hero section
function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return React.createElement('section', { id: 'hero', className: 'hero' },
    React.createElement('div', { className: 'hero-bg' }),
    React.createElement('div', { className: 'hero-grid' }),
    React.createElement('div', { className: 'hero-content' },

      // Badge
      React.createElement('div', { className: 'hero-badge' },
        React.createElement('span', { className: 'hero-badge-dot' }),
        'Available for opportunities · Graduating 2026'
      ),

      // Name
      React.createElement('h1', { className: 'hero-name' },
        'Afua ', React.createElement('span', null, 'Frempong')
      ),

      // Title
      React.createElement('p', { className: 'hero-title' },
        React.createElement('strong', null, 'Aspiring Technical Leader'),
        ' · UBC Computer Science'
      ),

      // Description
      React.createElement('p', { className: 'hero-description' }, 
         'I\'m passionate about building and providing solutions that inform and benefit the people around me. I strive to create thoughtful digital experiences - From mobile apps and full-stack websites, to data visualizations and creative solution design.'
      ),

      // CTAs
      React.createElement('div', { className: 'hero-actions' },
        React.createElement('button', {
          className: 'btn btn-primary',
          onClick: () => scrollTo('projects')
        },
          React.createElement('i', { className: 'fa-solid fa-code' }),
          'View My Work'
        ),
        React.createElement('button', {
          className: 'btn btn-outline',
          onClick: () => scrollTo('contact')
        },
          React.createElement('i', { className: 'fa-regular fa-envelope' }),
          'Get In Touch'
        )
      ),

      // Socials
      React.createElement('div', { className: 'hero-socials' },
        React.createElement('a', {
          href: 'https://github.com/abstractafua',
          target: '_blank', rel: 'noopener noreferrer',
          'aria-label': 'GitHub'
        }, React.createElement('i', { className: 'fa-brands fa-github' })),
        React.createElement('a', {
          href: 'https://www.linkedin.com/in/afua-frempong-798218258/',
          target: '_blank', rel: 'noopener noreferrer',
          'aria-label': 'LinkedIn'
        }, React.createElement('i', { className: 'fa-brands fa-linkedin' })),
        React.createElement('a', {
          href: 'mailto:afuaf2@gmail.com',
          'aria-label': 'Email'
        }, React.createElement('i', { className: 'fa-regular fa-envelope' }))
      )
    ),

    // Scroll hint
    React.createElement('div', { className: 'hero-scroll-hint' },
      'scroll',
      React.createElement('i', { className: 'fa-solid fa-chevron-down' })
    )
  );
}
