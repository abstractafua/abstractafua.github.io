// Photography section — square grid with lightbox
function Photography() {
  const [lightbox, setLightbox] = React.useState(null);

  const photos = [
    { src: 'images/img16.JPG', date: 'July 7th, 2019'      },
    { src: 'images/img11.jpg', date: 'August 1st, 2019'    },
    { src: 'images/img14.jpg', date: 'April 20th, 2019'    },
    { src: 'images/img13.jpg', date: 'December 11th, 2018' },
    { src: 'images/img12.jpg', date: 'June 15th, 2019'     },
    { src: 'images/img15.JPG', date: 'July 7th, 2018'      },
    { src: 'images/img10.jpg', date: 'May 22nd, 2019'      },
    { src: 'images/img9.jpg',  date: 'July 1st, 2019'      },
    { src: 'images/img8.jpg',  date: 'August 16th, 2019'   },
    { src: 'images/img7.jpg',  date: 'November 3rd, 2020'  },
    { src: 'images/img6.jpg',  date: 'February 29th, 2018' },
    { src: 'images/img5.jpg',  date: 'July 30th, 2018'     },
    { src: 'images/img4.jpg',  date: 'July 30th, 2018'     },
    { src: 'images/img0.jpg',  date: 'July 30th, 2018'     },
    { src: 'images/img3.jpg',  date: 'August 1st, 2018'    },
    { src: 'images/img2.jpg',  date: 'March 27th, 2017'    },
    { src: 'images/img1.jpg',  date: 'Undated'             },
  ];

  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length);
  const next = () => setLightbox(i => (i + 1) % photos.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft'  && lightbox !== null) prev();
      if (e.key === 'ArrowRight' && lightbox !== null) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return React.createElement('section', { id: 'photography', className: 'page-section' },
    React.createElement('div', { className: 'container' },

      React.createElement('div', { className: 'section-header reveal' },
        React.createElement('span', { className: 'section-label' }, '05. Photography'),
        React.createElement('h2', { className: 'section-title' }, 'Through My Lens'),
        React.createElement('p', { className: 'section-subtitle' },
          'Snapshots from my travels, everyday moments, and things I found worth capturing.'
        )
      ),

      React.createElement('div', { className: 'photo-grid reveal' },
        ...photos.map((p, i) =>
          React.createElement('div', {
            key: i,
            className: 'photo-item',
            onClick: () => setLightbox(i)
          },
            React.createElement('img', { src: p.src, alt: `Photo taken ${p.date}`, loading: 'lazy' }),
            React.createElement('div', { className: 'photo-date' }, p.date)
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
        src: photos[lightbox].src,
        alt: `Photo taken ${photos[lightbox].date}`,
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
        React.createElement('p', null, photos[lightbox].date),
        React.createElement('span', null, `${lightbox + 1} / ${photos.length}`)
      )
    )
  );
}
