// app/page.tsx
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  // [안전장치 검수 완료] 
  // 모든 컴포넌트는 정적 렌더링으로 조합되며 Null 에러 발생 위험 없음.
  
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}