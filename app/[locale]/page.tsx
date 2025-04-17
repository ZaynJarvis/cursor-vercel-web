import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';

// Update props to expect params as a Promise for Next.js 15
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Ensure locale is set for static rendering at the page level
  setRequestLocale(locale);
  
  return (
    <main>
      <Navigation />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
} 