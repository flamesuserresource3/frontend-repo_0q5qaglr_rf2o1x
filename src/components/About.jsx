import React from 'react';
import { motion } from 'framer-motion';

// ABOUT SECTION
// Presents Bro Ahmad's positioning and philosophy.
const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(26,115,232,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Who I Am
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl"
        >
          I build systems that merge human creativity with artificial intelligence to craft solutions that are both valuable and meaningful. My mission is to make AI collaboration accessible, intuitive, and powerful for creators, founders, and professionals who want to scale their impact.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
