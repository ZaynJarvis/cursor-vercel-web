'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="min-h-screen py-[4rem] px-[1rem] sm:px-[2rem]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-[2rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-[3rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('about.description')}
        </motion.p>

        <div className="space-y-[3rem]">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-[1.5rem]">{t('about.experience.title')}</h3>
            <div className="space-y-[2rem]">
              <div className="border-l-2 border-black pl-[1.5rem]">
                <h4 className="text-xl font-semibold">{t('about.experience.tiktok.title')}</h4>
                <p className="text-gray-500 mb-[0.5rem]">{t('about.experience.tiktok.period')}</p>
                <p className="text-gray-600">{t('about.experience.tiktok.description')}</p>
              </div>
              <div className="border-l-2 border-black pl-[1.5rem]">
                <h4 className="text-xl font-semibold">{t('about.experience.senseTime.title')}</h4>
                <p className="text-gray-500 mb-[0.5rem]">{t('about.experience.senseTime.period')}</p>
                <p className="text-gray-600">{t('about.experience.senseTime.description')}</p>
              </div>
              <div className="border-l-2 border-black pl-[1.5rem]">
                <h4 className="text-xl font-semibold">{t('about.experience.goldman.title')}</h4>
                <p className="text-gray-500 mb-[0.5rem]">{t('about.experience.goldman.period')}</p>
                <p className="text-gray-600">{t('about.experience.goldman.description')}</p>
              </div>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-[1.5rem]">{t('about.strengths.title')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1rem]">
              {['individualization', 'command', 'learner', 'focus', 'maximizer'].map((strength, index) => (
                <motion.div
                  key={strength}
                  className="bg-gray-50 p-[1rem] rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <p className="font-medium">{t(`about.strengths.${strength}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-[1.5rem]">{t('about.traits.title')}</h3>
            <div className="space-y-[1rem]">
              {['innovative', 'communicative', 'analytical', 'thoughtful'].map((trait, index) => (
                <motion.div
                  key={trait}
                  className="bg-gray-50 p-[1rem] rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <p className="text-gray-600">{t(`about.traits.${trait}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 