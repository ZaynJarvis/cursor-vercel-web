import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import Script from 'next/script';

// Update props to expect params as a Promise for Next.js 15
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Ensure locale is set for static rendering at the page level
  setRequestLocale(locale);
  
  return (
    <>
      <Script id="schema-person" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Liu Zhiheng",
            "jobTitle": "Senior Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "TikTok"
            },
            "description": "Senior Software Engineer at TikTok, specializing in scalable systems and infrastructure optimization",
            "knowsAbout": ["Scalable Systems", "Infrastructure Optimization", "Go", "Rust", "Distributed Systems", "Video Delivery"],
            "sameAs": [
              "https://github.com/zaynjarvis",
              "https://linkedin.com/in/zhihengliu"
            ]
          }
        `}
      </Script>
      <Script id="schema-professional-service" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Liu Zhiheng - Software Engineering",
            "description": "Software engineering services specializing in scalable systems and infrastructure optimization",
            "knowsAbout": ["Scalable Systems", "Infrastructure Optimization", "Go", "Rust", "Distributed Systems"],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Infrastructure Design & Optimization",
                  "description": "Design and optimization of scalable infrastructure for high-performance applications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Distributed Systems Development",
                  "description": "Development of distributed systems for handling large-scale data and traffic"
                }
              }
            ]
          }
        `}
      </Script>
      <main>
        <Navigation />
        <LanguageSwitcher />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
} 