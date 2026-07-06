// app/components/Experience.tsx
import React from 'react';

interface ExperienceItem {
  role: string;
  organization: string;
  meta: string;
  bullets: string[];
}

// Static, typed data — rendered synchronously, so no null errors or race conditions are possible
const operationsTrack: ExperienceItem[] = [
  {
    role: 'Operations Manager',
    organization: 'Zion Market',
    meta: 'Irvine, CA',
    bullets: [
      "Managed 70% of total store revenue, orchestrating daily inventory workflows, supply chain bottlenecks, and vendor negotiations in the competitive US grocery market.",
      'Lived the exact pain points of B2B inventory software — learning first-hand why slow UIs and confusing data structures cause critical operational failures.',
    ],
  },
  {
    role: 'Assistant Manager',
    organization: 'Seoul Club',
    meta: 'South Korea · 11 Years',
    bullets: [
      'Managed operations across 4 premium locations for 11 years, becoming the youngest manager in the organization.',
      'Awarded "Employee of the Year" for operational excellence and cross-team leadership.',
    ],
  },
  {
    role: 'Ph.D. Coursework, Business Management',
    organization: 'Stanton University',
    meta: 'Education',
    bullets: [
      'Advanced academic grounding in business management, complementing two decades of hands-on operations leadership.',
    ],
  },
];

const engineeringTrack: ExperienceItem[] = [
  {
    role: 'Frontend Engineer & Creator',
    organization: 'Dream Visualizer',
    meta: 'Next.js · React · Flutter · Supabase',
    bullets: [
      'Independently architected and launched an AI-powered app from scratch, running a 20-person Closed Beta on the Google Play Store with active user feedback loops.',
      "Engineer UI/UX that solves real inventory and B2B logistics problems — not just screens, but systems operators can trust.",
      'Obsessive focus on stability: strict TypeScript Type-Guards, Try-Catch error handling, and race-condition prevention so platforms never crash during peak hours.',
    ],
  },
];

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

          {/* Left Column: 20 Years of Operations Mastery */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center">
              {/* Box Icon */}
              <svg className="w-8 h-8 text-slate-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-slate-200">Domain Expertise</h3>
                <p className="text-sm text-cyan-500/70 uppercase tracking-widest mt-1">20 Years of Operations</p>
              </div>
            </div>

            <div className="space-y-10">
              {operationsTrack.map((item) => (
                <div key={item.organization} className="border-l-2 border-slate-800 pl-6">
                  <h4 className="text-xl font-semibold text-slate-300">
                    {item.role} <span className="text-slate-500">| {item.organization}</span>
                  </h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mt-1 mb-4">{item.meta}</p>
                  <ul className="space-y-3 text-slate-400 text-base">
                    {item.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-600 mr-3 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Present */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center">
              {/* Code/Terminal Icon */}
              <svg className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-white">Engineering Architecture</h3>
                <p className="text-sm text-cyan-500/70 uppercase tracking-widest mt-1">AI-Assisted Vibe Coder · Present</p>
              </div>
            </div>

            <div className="space-y-10">
              {engineeringTrack.map((item) => (
                <div key={item.organization} className="border-l-2 border-cyan-900/50 pl-6">
                  <h4 className="text-xl font-semibold text-cyan-300">
                    {item.role} <span className="text-slate-400">| {item.organization}</span>
                  </h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mt-1 mb-4">{item.meta}</p>
                  <ul className="space-y-3 text-slate-300 text-base">
                    {item.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-500 mr-3 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Bilingual & Local Advantage */}
              <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-6">
                <h4 className="text-cyan-400 font-semibold text-sm tracking-wide mb-2">
                  The Unfair Advantage
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Bilingual (English/Korean) and based in La Mirada, CA — a perfect geographical and
                  cultural fit for Southern California logistics teams building B2B software.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
