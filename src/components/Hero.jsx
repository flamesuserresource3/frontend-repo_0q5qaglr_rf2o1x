import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// HERO SECTION
// Displays headline, subtext, and primary CTA with a Spline 3D aura animation background.
const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Background radial glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(26,115,232,0.25),transparent_55%)]" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-[#1A73E8] bg-clip-text text-transparent">
              Bridging Humans and Machines to Create Impactful AI Systems
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            I’m Bro Ahmad — an AI Creative Strategist who designs systems where creativity meets intelligence.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#contact"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
