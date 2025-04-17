import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative">
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Skills Section */}
          <Skills />

          {/* Contact Section */}
          <Contact />
        </div>

        {/* Background Decoration */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-100 opacity-20 blur-[100px]" />
        </div>
      </main>
    </div>
  );
} 