import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
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
  
  return {
    title: messages?.metadata?.title ?? 'Default Title',
    description: messages?.metadata?.description ?? 'Default Description',
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
  unstable_setRequestLocale(locale); // Call setRequestLocale
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 