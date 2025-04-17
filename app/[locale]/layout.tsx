import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  // Ensure this matches the locales used everywhere else
  return [{ locale: 'en' }, { locale: 'zh' }]; 
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  
  const title = messages?.metadata?.title ?? 'Liu Zhiheng - Software Engineer';
  const description = messages?.metadata?.description ?? 'Senior Software Engineer at TikTok, specializing in scalable systems and infrastructure optimization';
  const url = 'https://' + (process.env.VERCEL_URL || 'liuzhiheng.com');
  
  return {
    title,
    description,
    keywords: ['software engineer', 'TikTok', 'scalable systems', 'infrastructure', 'full stack', 'developer', 'web developer', 'backend engineer'],
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Liu Zhiheng - Portfolio',
      images: [
        {
          url: `${url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'Liu Zhiheng - Software Engineer',
        }
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${url}/og-image.svg`],
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${url}/en`,
        'zh': `${url}/zh`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-video-preview': -1,
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Type params as a Promise according to the error message for Next.js 15
  params: Promise<{ locale: string }>; 
}) {
  const { locale } = await params; 
  setRequestLocale(locale); // Call setRequestLocale
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 