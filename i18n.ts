import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'zh'];

export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from the requestLocale parameter
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    console.error(`Invalid locale received: ${locale}`); // Log the invalid locale
    notFound();
  }

  // Load messages and return configuration
  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return {
      locale, 
      messages
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    notFound(); // Trigger 404 if messages file is missing
  }
}); 