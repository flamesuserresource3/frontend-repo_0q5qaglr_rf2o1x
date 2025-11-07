import React from 'react';
import { motion } from 'framer-motion';

// CTA SECTION
// Encourages collaboration with a clear action.
const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(26,115,232,0.1),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Let’s Build Intelligent Systems Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          If you’re building something that merges creativity and technology, I’d love to collaborate.
        </motion.p>
        <div className="mt-8 flex items-center justify-center">
          <a
            href="mailto:broahmad@domain.com"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1A73E8] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#1A73E8]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:ring-offset-2 focus:ring-offset-black"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
