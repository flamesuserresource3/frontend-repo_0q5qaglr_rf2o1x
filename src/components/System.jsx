import React from 'react';
import { motion } from 'framer-motion';

// SYSTEM / WORKFLOW SECTION
// Explains the approach to Human-AI collaboration.
const System = () => {
  return (
    <section id="system" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(26,115,232,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          The System of Human-AI Collaboration
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl"
        >
          I develop frameworks that teach people how to build adaptive workflows using systemic prompt engineering. The goal is to align human creativity with AI automation — enabling people to stay relevant, strategic, and effective in the age of intelligent systems.
        </motion.p>
      </div>
    </section>
  );
};

export default System;
