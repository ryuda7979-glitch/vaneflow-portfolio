import React from 'react';

export default function AboutMe() {
  // Pure static rendering for zero Race Conditions or Null errors
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 to-[#0b1120] px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col">
        
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            The Philosophy: <span className="text-cyan-400 font-medium">Why I Code</span>
          </h2>
        </div>

        {/* Content Block */}
        <blockquote className="border-l-4 border-cyan-500 pl-6 md:pl-8 py-4 bg-slate-900/20 rounded-r-xl shadow-sm border-y border-r border-slate-800/30">
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
            "For over 10 years, I managed grocery operations, directly handling 80% of total store revenue. I navigated daily supply chain bottlenecks, vendor negotiations, and inventory crises in the fast-paced US market. During this time, I learned a critical lesson: when internal tools and dashboards fail, real-world operations grind to a halt. I transitioned into Frontend Engineering because I wanted to build the tools I desperately needed back then. I don't just write code; I engineer reliable, crash-free architectures. My relentless focus on Try-Catch safety, Type-Guards, and intuitive UX comes from deep empathy for the operators on the floor. I translate real-world friction into seamless software."
          </p>
        </blockquote>

      </div>
    </section>
  );
}