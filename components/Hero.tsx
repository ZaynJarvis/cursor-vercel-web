'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const t = useTranslations();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[600px] sm:min-h-[800px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left side - Photo and Social Links */}
          <motion.div
            className="flex flex-col items-center space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center w-full">
              <div className="relative w-[200px] sm:w-[280px]">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                />
                <Image
                  src="/profile.jpg"
                  alt="Liu Zhiheng - Senior Software Engineer at TikTok specializing in scalable systems"
                  width={280}
                  height={280}
                  className="rounded-full relative border-4 border-white shadow-xl"
                  priority
                />
              </div>
            </div>
            
            <motion.nav
              className="flex justify-center space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              aria-label="Social media links"
            >
              {[
                { icon: FaGithub, href: "https://github.com/zaynjarvis", label: "GitHub profile of Liu Zhiheng" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/zhihengliu/", label: "LinkedIn profile of Liu Zhiheng" },
                { icon: FaEnvelope, href: "mailto:zaynjarvis@gmail.com", label: "Email Liu Zhiheng" },
                { icon: FaPhone, href: "tel:+6583099012", label: "Call Liu Zhiheng" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.label}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur" aria-hidden="true" />
                  <social.icon size={28} className="text-gray-700 group-hover:text-orange-600 transition-colors relative" />
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            className="text-left space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 
                id="hero-heading"
                className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent pb-2"
              >
                {t('hero.title', { name: 'Liu Zhiheng' })}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                {t('hero.subtitle')}
              </p>
            </motion.header>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="inline-block text-white px-8 py-4 rounded-full text-lg font-medium 
                         transition-all hover:shadow-lg hover:scale-105 
                         bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                aria-label="View my projects"
              >
                {t('hero.cta')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-5"
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
    </section>
  );
} 