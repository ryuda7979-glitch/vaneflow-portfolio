import React from 'react';

interface SummaryHighlight {
  title: string;
  description: string;
}

// Static, typed data — no async fetching, so no null references or race conditions are possible
const highlights: SummaryHighlight[] = [
  {
    title: "Operator's Empathy",
    description:
      "For 20 years I lived inside the exact workflows ShipCore digitizes: managing 70% of a major store's revenue at Zion Market, resolving inventory bottlenecks, and leading vendor negotiations. I know precisely how much a frozen dashboard costs when a truck is waiting at the dock.",
  },
  {
    title: 'Defensive Engineering',
    description:
      'When tools fail, real-world operations stop. That is why I engineer with a strict focus on Try-Catch safety, TypeScript Type-Guards, and race-condition prevention — building order and inventory UIs that stay standing during peak hours.',
  },
  {
    title: 'AI-Assisted Velocity',
    description:
      'I build fast and learn faster. Leveraging modern AI-assisted workflows (Cursor, AI agents), I independently architected and shipped Dream Visualizer — a full Next.js/Flutter/Supabase product — from zero to a live Google Play beta.',
  },
];

export default function AboutMe() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 to-[#0b1120] px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col">

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            The Philosophy: <span className="text-cyan-400 font-medium">Why I Code</span>
          </h2>
        </div>

        {/* Core Philosophy Quote */}
        <blockquote className="border-l-4 border-cyan-500 pl-6 md:pl-8 py-4 mb-10 bg-slate-900/20 rounded-r-xl border-y border-r border-slate-800/30">
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
            &ldquo;When tools fail, real-world operations stop. I build fast, learn faster, and engineer
            with a strict focus on Try-Catch safety because I know exactly how much a system crash
            costs on the operations floor.&rdquo;
          </p>
        </blockquote>

        {/* Highlight Cards */}
        <ul className="space-y-6">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-6 md:p-7 transition-colors hover:border-cyan-900/60"
            >
              <h3 className="text-cyan-400 font-semibold text-sm md:text-base tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Locality & Language Note */}
        <p className="mt-10 text-slate-400 text-sm md:text-base leading-relaxed">
          Based in La Mirada, CA — local to Southern California — and fully bilingual in English and
          Korean, I bridge engineering, operations, and cross-cultural business communication without
          friction.
        </p>

      </div>
    </section>
  );
}
