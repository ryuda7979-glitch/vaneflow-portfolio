// app/components/Projects.tsx
import React from 'react';

export default function Projects() {
  return (
    <section className="bg-slate-950 px-6 py-24 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Engineering</span>
        </h2>

        {/* CSS Grid for Projects: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Dream Visualizer */}
          <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Dream Visualizer</h3>
            <p className="text-slate-400 mb-6 flex-grow">
              An AI-powered web app visualizing the 'Dream Generation' concept. Built entirely from scratch without templates.
            </p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">▹</span>
                Engineered a robust Next.js/React architecture with Supabase for state & DB management.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">▹</span>
                Implemented strict Try-Catch & Type-Guards to prevent UI crashes and Race Conditions during OpenAI API integration.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">▹</span>
                Integrated RevenueCat for seamless in-app subscription logic.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'TypeScript', 'Supabase', 'Tailwind'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full">{tag}</span>
              ))}
            </div>
            <button className="w-full py-3 rounded-lg border border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-200 mt-auto">
              Live Demo
            </button>
          </div>

          {/* Card 2: Chik-Tok */}
          <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-900/20 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Chik-Tok</h3>
            <p className="text-slate-400 mb-6 flex-grow">
              A UX-driven product planning project solving a real-world friction point: helping children open toothpaste caps using the principle of leverage.
            </p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">▹</span>
                Analyzed user pain points (children's grip strength vs. safety) to design an intuitive mechanical UI.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">▹</span>
                Translated physical UX bottlenecks into actionable design solutions, showcasing strong product mindset.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {['UX Research', 'Product Planning', 'Problem Solving'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs rounded-full">{tag}</span>
              ))}
            </div>
            <button className="w-full py-3 rounded-lg border border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-200 mt-auto">
              View Project
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}