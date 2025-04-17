'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const navItems = [
  { href: '#hero', label: 'navigation.home' },
  { href: '#about', label: 'navigation.about' },
  { href: '#projects', label: 'navigation.projects' }
];

export default function Navigation() {
  const pathname = usePathname();
  const t = useTranslations();
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[2rem] lg:px-[2rem]">
        <div className="flex items-center justify-end h-16">
          {/* PC Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === `/${currentLocale}${item.href}`;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
                >
                  <Link
                    href={`/${currentLocale}${item.href}`}
                    className={`relative px-[0.75rem] py-[0.5rem] text-sm font-medium transition-colors ${
                      isActive ? 'text-black' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {t(item.label)}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-black"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Language Switcher */}
          <div className="md:hidden">
            <Link
              href={`/${currentLocale === 'en' ? 'cn' : 'en'}${pathname.substring(3)}`}
              className="px-[0.75rem] py-[0.5rem] text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {currentLocale === 'en' ? '中文' : 'EN'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 