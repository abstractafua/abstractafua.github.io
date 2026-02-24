// Navbar component — sticky, scrolled-state aware, mobile hamburger
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const links = [
    { id: 'about',       label: 'About'       },
    { id: 'experience',  label: 'Experience'  },
    { id: 'projects',    label: 'Projects'    },
    { id: 'designs',     label: 'Designs'     },
    { id: 'photography', label: 'Photography' },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['hero', ...links.map(l => l.id), 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    React.createElement(React.Fragment, null,
      React.createElement('nav', { className: `navbar ${scrolled ? 'scrolled' : ''}` },
        React.createElement('div', { className: 'navbar-inner' },
          // Logo
          React.createElement('button', {
            className: 'navbar-logo',
            onClick: () => scrollTo('hero'),
            style: { background: 'none', border: 'none', cursor: 'pointer' }
          }, 'af.dev'),

          // Desktop links
          React.createElement('div', { className: 'navbar-links' },
            ...links.map(link =>
              React.createElement('a', {
                key: link.id,
                href: `#${link.id}`,
                className: activeSection === link.id ? 'active' : '',
                onClick: (e) => { e.preventDefault(); scrollTo(link.id); }
              }, link.label)
            ),
            React.createElement('a', {
              href: '#contact',
              className: 'navbar-cta',
              onClick: (e) => { e.preventDefault(); scrollTo('contact'); }
            }, 'Contact Me')
          ),

          // Hamburger
          React.createElement('button', {
            className: 'navbar-hamburger',
            onClick: () => setMenuOpen(!menuOpen),
            'aria-label': 'Toggle menu'
          },
            React.createElement('span', null),
            React.createElement('span', null),
            React.createElement('span', null)
          )
        )
      ),

      // Mobile menu
      React.createElement('div', { className: `navbar-mobile ${menuOpen ? 'open' : ''}` },
        ...links.map(link =>
          React.createElement('a', {
            key: link.id,
            href: `#${link.id}`,
            onClick: (e) => { e.preventDefault(); scrollTo(link.id); }
          }, link.label)
        ),
        React.createElement('a', {
          href: '#contact',
          onClick: (e) => { e.preventDefault(); scrollTo('contact'); },
          style: { color: 'var(--accent)', fontWeight: '600', border: 'none' }
        }, 'Contact Me')
      )
    )
  );
}
