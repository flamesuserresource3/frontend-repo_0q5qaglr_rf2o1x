import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import System from './components/System';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Single-page portfolio for Bro Ahmad — AI Creative Strategist
// Layout: Hero → About → Projects → System → CTA → Footer
// Includes lightweight SEO meta injection and smooth-scrolling.
function App() {
  // Basic meta tags for SEO without extra dependencies
  useEffect(() => {
    document.title = 'Bro Ahmad — AI Creative Strategist | Human–Machine Collaboration';

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'Portfolio of Bro Ahmad, AI Creative Strategist bridging humans and machines to build impactful, intelligent systems. Projects: VYNR, Fatloss OS, Beyond Campus.'
    );
    ensureMeta('keywords', 'Bro Ahmad, AI Strategist, AI Creative Strategist, Human Machine Collaboration, VYNR Project, AI Systems, Prompt Engineering');
    ensureMeta('author', 'Bro Ahmad');
  }, []);

  return (
    <div className="scroll-smooth bg-black">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* PROJECTS SECTION */}
      <Projects />

      {/* SYSTEM / WORKFLOW SECTION */}
      <System />

      {/* CTA SECTION */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
