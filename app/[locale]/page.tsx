import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main>
      <Navigation />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Projects />
    </main>
  );
} 