import React from 'react';
import { motion } from 'framer-motion';

// PROJECTS SECTION
// Showcases three AI-driven projects with concise storytelling cards.
const projects = [
  {
    title: 'VYNR – Human x Machine Creative Ecosystem',
    description:
      'A vision-driven system I built to explore the intersection of dark masculinity, creative storytelling, and AI-generated identity. VYNR is not just content — it’s a movement designed to reprogram how men think, build, and express power in the digital age.',
  },
  {
    title: 'Fatloss Operating System',
    description:
      'A behavioral design project that systemizes daily habit loops to achieve sustainable fat loss. The ebook acts as a modular operating system — a framework for physical and mental transformation through consistent habit execution.',
  },
  {
    title: 'Beyond Campus',
    description:
      'A digital guide for young men navigating life after academia. This project targets those seeking direction, discipline, and clarity to build real-world competence. Its mission: shift focus from validation to value creation.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(26,115,232,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          AI-Driven Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1A73E8]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative text-lg font-semibold md:text-xl">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/75 md:text-base">{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
