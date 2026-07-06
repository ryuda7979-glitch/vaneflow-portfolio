// app/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 px-6 py-20 overflow-hidden">
      {/* Background subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start space-y-6">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            20 Years of Operations. Translated into Code.
          </p>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Frontend Engineer,
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
              vaneflow (Joon Won Woo)
            </h2>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            I spent 20 years running real-world operations—managing 70% of a major store's revenue, untangling inventory bottlenecks, and negotiating with vendors. Now, as an AI-assisted Vibe Coder based in La Mirada, CA, I architect the B2B logistics and inventory dashboards I once desperately needed on the floor.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/resume.pdf" 
              download="vaneflow_resume.pdf" 
              className="inline-block text-center px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors duration-200 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>
            <a 
              href="https://github.com/ryuda7979-glitch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-center px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Window Mockup */}
        <div className="w-full bg-slate-900 rounded-xl border border-slate-800 shadow-2xl shadow-cyan-900/20 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 text-xs text-slate-500 font-mono">
              ~/shipcore/fetch-inventory.ts
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed">
            <pre className="text-slate-300">
              <code className="block">
                <span className="text-slate-500">{`// Connect to Supabase & Fetch real-time stock`}</span>
                {'\n'}
                <span className="text-purple-400">import</span> {`{ createClient }`} <span className="text-purple-400">from</span> <span className="text-green-400">{`'@supabase/supabase-js'`}</span>{`;\n\n`}
                <span className="text-blue-400">const</span> {`supabase = createClient(SUPABASE_URL, SUPABASE_KEY);\n\n`}
                <span className="text-purple-400">export async function</span> <span className="text-yellow-200">getWarehouseStock</span>{`(location: `}<span className="text-blue-400">string</span>{`) {\n`}
                <span className="text-slate-500">{`  // Safely try-catch to prevent UI crash on null/error`}</span>{'\n'}
                {`  `}<span className="text-purple-400">try</span> {`{\n`}
                {`    `}<span className="text-blue-400">const</span> {`{ data, error } = `}<span className="text-purple-400">await</span> {`supabase\n`}
                {`      .from(`}<span className="text-green-400">{`'inventory'`}</span>{`)\n`}
                {`      .select(`}<span className="text-green-400">{`'sku, quantity, status'`}</span>{`)\n`}
                {`      .eq(`}<span className="text-green-400">{`'location'`}</span>{`, location);\n\n`}
                {`    `}<span className="text-purple-400">if</span> {`(error) `}<span className="text-purple-400">throw</span> {`error;\n`}
                {`    `}<span className="text-purple-400">return</span> {`data;\n`}
                {`  } `}<span className="text-purple-400">catch</span> {`(err) {\n`}
                {`    console.`}<span className="text-blue-400">error</span>{`(`}<span className="text-green-400">{`'Logistics DB Error:'`}</span>{`, err);\n`}
                {`    `}<span className="text-purple-400">return</span> <span className="text-orange-400">null</span>{`; `}<span className="text-slate-500">{`// Fallback UI safety`}</span>{'\n'}
                {`  }\n`}
                {`}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
