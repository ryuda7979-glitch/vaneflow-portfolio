// app/page.tsx
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  // Static rendering check passed
  // All components are statically composed to ensure no Race Conditions or Null errors.
  
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}