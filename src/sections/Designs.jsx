// Designs section — masonry gallery with lightbox
function Designs() {
  const [lightbox, setLightbox] = React.useState(null); // index or null

  const designs = [
    { src: 'images/design12.jpg', title: 'Ziki Front End',               tool: 'Figma'    },
    { src: 'images/design10.jpg', title: 'Gifty Home Page',              tool: 'Canva'    },
    { src: 'images/design14.png', title: 'Patchwork — Fashion Club',     tool: 'Canva'    },
    { src: 'images/design6.jpg',  title: 'Red Cross Bake Sale Poster',   tool: 'Canva'    },
    { src: 'images/design11.jpg', title: "Droppin' In Mandate",          tool: 'Canva & Figma' },
    { src: 'images/design15.png', title: 'Red Cross Sticker Designs',    tool: 'Canva'    },
    { src: 'images/design9.jpg',  title: 'Imaginary Album Cover',        tool: 'Adobe PS' },
    { src: 'images/design8.jpg',  title: 'Overlay IV',                   tool: 'Adobe PS' },
    { src: 'images/design7.jpg',  title: 'Overlay III',                  tool: 'Adobe PS' },
    { src: 'images/design5.jpg',  title: 'End of Year Post',             tool: 'Canva'    },
    { src: 'images/design1.jpg',  title: 'Overlay I',                    tool: 'Adobe PS' },
    { src: 'images/design2.jpg',  title: 'Overlay II',                   tool: 'Adobe PS' },
    { src: 'images/design3.jpg',  title: 'Very Hungry Caterpillar Live', tool: 'Mixed'    },
    { src: 'images/design13.png', title: 'Untitled Design',              tool: 'Canva'    },
  ];

  const prev = () => setLightbox(i => (i - 1 + designs.length) % designs.length);
  const next = () => setLightbox(i => (i + 1) % designs.length);

  // Close on ESC
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft' && lightbox !== null) prev();
      if (e.key === 'ArrowRight' && lightbox !== null) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return React.createElement('section', { id: 'designs', className: 'page-section' },
    React.createElement('div', { className: 'container' },

      React.createElement('div', { className: 'section-header reveal' },
        React.createElement('span', { className: 'section-label' }, '04. Designs'),
        React.createElement('h2', { className: 'section-title' }, 'Creative Work'),
        React.createElement('p', { className: 'section-subtitle' },
          'Graphic design, UI mockups, and visual work made with Figma, Canva, and Adobe Photoshop.'
        )
      ),

      // Masonry grid
      React.createElement('div', { className: 'designs-grid reveal' },
        ...designs.map((d, i) =>
          React.createElement('div', {
            key: i,
            className: 'design-item',
            onClick: () => setLightbox(i)
          },
            React.createElement('img', { src: d.src, alt: d.title, loading: 'lazy' }),
            React.createElement('div', { className: 'design-caption' },
              React.createElement('p', null, d.title),
              React.createElement('span', null, d.tool)
            )
          )
        )
      )
    ),

    // Lightbox
    lightbox !== null && React.createElement('div', {
      className: 'lightbox',
      onClick: () => setLightbox(null)
    },
      React.createElement('img', {
        src: designs[lightbox].src,
        alt: designs[lightbox].title,
        className: 'lightbox-img',
        onClick: (e) => e.stopPropagation()
      }),
      React.createElement('button', { className: 'lightbox-close', onClick: () => setLightbox(null) },
        React.createElement('i', { className: 'fa-solid fa-xmark' })
      ),
      React.createElement('button', {
        className: 'lightbox-nav prev',
        onClick: (e) => { e.stopPropagation(); prev(); }
      }, React.createElement('i', { className: 'fa-solid fa-chevron-left' })),
      React.createElement('button', {
        className: 'lightbox-nav next',
        onClick: (e) => { e.stopPropagation(); next(); }
      }, React.createElement('i', { className: 'fa-solid fa-chevron-right' })),
      React.createElement('div', {
        className: 'lightbox-caption',
        onClick: (e) => e.stopPropagation()
      },
        React.createElement('p', null, designs[lightbox].title),
        React.createElement('span', null, designs[lightbox].tool)
      )
    )
  );
}
