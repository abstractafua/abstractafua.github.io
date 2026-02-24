// Contact section — links + mailto form
function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client with pre-filled fields (no backend needed)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(`Hi Afua,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`);
    window.location.href = `mailto:afuaf2@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: '/in/afua-frempong-798218258',
      href: 'https://www.linkedin.com/in/afua-frempong-798218258/',
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: '@abstractafua',
      href: 'https://github.com/abstractafua',
    },
    {
      icon: 'fa-regular fa-envelope',
      label: 'Email',
      value: 'afuaf2@gmail.com',
      href: 'mailto:afuaf2@gmail.com',
    },
  ];

  return React.createElement('section', { id: 'contact', className: 'page-section' },
    React.createElement('div', { className: 'container' },

      React.createElement('div', { className: 'section-header reveal' },
        React.createElement('span', { className: 'section-label' }, '06. Contact'),
        React.createElement('h2', { className: 'section-title' }, 'Let\'s Connect'),
        React.createElement('p', { className: 'section-subtitle' },
          'Whether it\'s a job opportunity, collaboration, or just a hello — I\'d love to hear from you.'
        )
      ),

      React.createElement('div', { className: 'contact-grid' },

        // Left — info
        React.createElement('div', { className: 'contact-text reveal' },
          React.createElement('p', null,
            "I'm actively looking for full-time technical roles starting in 2026. If you have an opportunity that aligns with my experience — let's talk."
          ),
          React.createElement('div', { className: 'contact-links' },
            ...links.map(link =>
              React.createElement('a', {
                key: link.label,
                href: link.href,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'contact-link-item'
              },
                React.createElement('div', { className: 'contact-link-icon' },
                  React.createElement('i', { className: link.icon })
                ),
                React.createElement('div', { className: 'contact-link-text' },
                  React.createElement('strong', null, link.label),
                  React.createElement('span', null, link.value)
                )
              )
            )
          )
        ),

        // Right — form
        React.createElement('form', {
          className: 'contact-form reveal reveal-delay-1',
          onSubmit: handleSubmit
        },
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'name' }, 'Your Name'),
            React.createElement('input', {
              id: 'name', name: 'name', type: 'text',
              placeholder: 'Jane Smith',
              value: form.name,
              onChange: handleChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'email' }, 'Your Email'),
            React.createElement('input', {
              id: 'email', name: 'email', type: 'email',
              placeholder: 'jane@company.com',
              value: form.email,
              onChange: handleChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { htmlFor: 'message' }, 'Message'),
            React.createElement('textarea', {
              id: 'message', name: 'message',
              rows: 5,
              placeholder: "Hi Afua, I'd love to chat about...",
              value: form.message,
              onChange: handleChange,
              required: true
            })
          ),
          React.createElement('div', { className: 'form-submit' },
            React.createElement('button', { type: 'submit', className: 'btn btn-primary' },
              React.createElement('i', { className: 'fa-regular fa-paper-plane' }),
              'Send Message'
            )
          ),
          sent && React.createElement('div', { className: 'form-success' },
            React.createElement('i', { className: 'fa-solid fa-circle-check' }),
            ' Your email client should open momentarily!'
          )
        )
      )
    ),

    // Footer
    React.createElement('footer', { className: 'site-footer' },
      React.createElement('div', { className: 'container' },
        React.createElement('p', null,
          'Designed & built by ',
          React.createElement('span', null, 'Afua Frempong'),
          ' · ', new Date().getFullYear(),
          ' · Built with React & custom CSS'
        )
      )
    )
  );
}
