import React from 'react';

// FOOTER SECTION
// Provides copyright and contact information.
const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/70">© 2025 Bro Ahmad — AI Creative Strategist</p>
          <div className="text-sm text-white/70">
            <span className="block md:inline">Email: <a href="mailto:broahmad@domain.com" className="text-white hover:text-[#1A73E8]">broahmad@domain.com</a></span>
            <span className="mx-2 hidden md:inline">|</span>
            <span className="block md:inline">Instagram: <a href="https://instagram.com/vynr.growth" target="_blank" rel="noreferrer" className="text-white hover:text-[#1A73E8]">@vynr.growth</a></span>
            <span className="mx-2 hidden md:inline">|</span>
            <span className="block md:inline">LinkedIn: <a href="https://www.linkedin.com/in/broahmad" target="_blank" rel="noreferrer" className="text-white hover:text-[#1A73E8]">/in/broahmad</a></span>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">Built with human intuition and machine precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
