// app/components/Experience.tsx
import React from 'react';

export default function Experience() {
  return (
    <section className="bg-[#0b1120] px-6 py-24 relative overflow-hidden border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          The Journey: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">From Logistics to Code</span>
        </h2>

        {/* 2-Column Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Subtle vertical divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2"></div>

          {/* Left Column: Logistics Past */}
          <div className="flex flex-col items-end text-right">
            <div className="mb-6 flex items-center justify-end w-full">
              <h3 className="text-2xl font-bold text-slate-200 mr-4">Domain Expertise</h3>
              {/* Box Icon */}
              <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-slate-400 mb-2">Grocery Operations Manager</h4>
            <p className="text-sm text-cyan-500/70 uppercase tracking-widest mb-6">10+ Years Experience</p>
            
            <ul className="space-y-4 text-slate-400 text-base max-w-md">
              <li>
                Managed 80% of total store revenue, orchestrating complex daily inventory workflows, supply chain bottlenecks, and vendor relations in the US market.
              </li>
              <li>
                Gained deep, real-world empathy for B2B dashboards—understanding exactly why slow UI or confusing data structures lead to critical operational failures.
              </li>
            </ul>
          </div>

          {/* Right Column: Engineering Present */}
          <div className="flex flex-col items-start text-left md:mt-24">
            <div className="mb-6 flex items-center justify-start w-full">
              {/* Code/Terminal Icon */}
              <svg className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-2xl font-bold text-white ml-4">Engineering Architecture</h3>
            </div>
            <h4 className="text-xl font-semibold text-cyan-300 mb-2">Senior Frontend Developer</h4>
            <p className="text-sm text-cyan-500/70 uppercase tracking-widest mb-6">Present</p>
            
            <ul className="space-y-4 text-slate-300 text-base max-w-md">
              <li>
                Translating 10 years of operational friction into robust Next.js/React architectures.
              </li>
              <li>
                Obsessive focus on system stability. I strictly implement Type-Guards and Try-Catch error handling to prevent Race Conditions and Null errors, ensuring logistics platforms never crash during peak hours.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}