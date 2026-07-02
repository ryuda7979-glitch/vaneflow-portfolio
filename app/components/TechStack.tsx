import React from 'react';

// Interface defining the structure of our technology stack categories
interface TechCategory {
  title: string;
  skills: string[];
}

// Statically defined data to guarantee zero Race Conditions or Null errors
const techStackData: TechCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Capacitor"],
  },
  {
    title: "Backend & AI",
    skills: ["Supabase", "OpenAI", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Cursor", "Git", "Vercel"],
  }
];

export default function TechStack() {
  // Try-Catch safety mindset: Fallback in case data is compromised (though statically it won't be)
  if (!techStackData || techStackData.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#0b1120] border-t border-slate-800/50 px-6 py-20 flex justify-center">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Arsenal: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech & Tools</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStackData.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-cyan-900/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)]"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-slate-200 mb-6 border-b border-slate-800/80 pb-4">
                {category.title}
              </h3>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="rounded-full px-4 py-2 text-sm font-medium text-cyan-300 bg-slate-800 border border-slate-700 hover:bg-slate-700/80 hover:text-cyan-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}