// App.jsx — Root component. Mounts all sections and sets up scroll-reveal.
function App() {

  // Scroll-reveal: observe all current + future .reveal elements via a MutationObserver
  // so dynamically rendered nodes (e.g. filtered project cards) also animate in correctly.
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target); // once visible, stop watching
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = (root) => {
      root.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));
    };

    // Observe elements already in the DOM
    observe(document);

    // Watch for new .reveal nodes added by React re-renders (e.g. filter changes)
    const mo = new MutationObserver(() => observe(document));
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar,      null),
    React.createElement(Hero,        null),
    React.createElement(About,       null),
    React.createElement(Experience,  null),
    React.createElement(Projects,    null),
    React.createElement(Designs,     null),
    React.createElement(Photography, null),
    React.createElement(Contact,     null)
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
