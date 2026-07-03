// app/components/Contact.tsx
import React from 'react';

export default function Contact() {
  return (
    <footer className="bg-[#0b1120] border-t border-slate-800 pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Robust</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
          I am currently based in California, ready to streamline your B2B logistics frontend architectures. If you need a senior developer who understands real-world operational bottlenecks and codes with strict error-handling, let's connect.
        </p>

        {/* Actionable Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
          <a 
            href="mailto:ryuda7979@gmail.com" 
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] inline-block text-center"
          >
            Say Hello
          </a>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/joon-won-woo-65564441b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-center px-6 py-4 rounded-lg border border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/ryuda7979-glitch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-center px-6 py-4 rounded-lg border border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-slate-800/50 pt-8 mt-auto">
          <p className="text-slate-600 text-sm">
            © 2026 vaneflow. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}