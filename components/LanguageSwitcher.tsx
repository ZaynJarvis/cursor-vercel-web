'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <motion.div
      className="fixed top-[1rem] right-[1rem] z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-[0.5rem] bg-white/80 backdrop-blur-sm rounded-full p-[0.25rem] shadow-lg">
        <motion.button
          className={`px-[0.75rem] py-[0.25rem] rounded-full text-sm font-medium transition-colors ${
            pathname.startsWith('/en') ? 'bg-black text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
          onClick={() => switchLanguage('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        <motion.button
          className={`px-[0.75rem] py-[0.25rem] rounded-full text-sm font-medium transition-colors ${
            pathname.startsWith('/zh') ? 'bg-black text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
          onClick={() => switchLanguage('zh')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          中文
        </motion.button>
      </div>
    </motion.div>
  );
} 