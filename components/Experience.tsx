'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TikTok",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Leading video delivery and storage optimization initiatives. Architecting scalable solutions for content delivery and improving infrastructure efficiency.",
    achievements: [
      "Reduced video loading latency by 40% through CDN optimization",
      "Designed distributed storage system handling 5PB+ of data",
      "Led team of 6 engineers in modernizing video processing pipeline"
    ],
    tech: ["Go", "Rust", "Kubernetes", "AWS", "Redis", "Kafka"]
  },
  {
    company: "ByteDance",
    role: "Software Engineer",
    period: "2019 - 2021",
    description: "Developed core infrastructure components for content delivery networks and real-time analytics systems.",
    achievements: [
      "Built real-time analytics processing 1M+ events/second",
      "Implemented adaptive bitrate streaming system",
      "Optimized storage costs resulting in 30% reduction"
    ],
    tech: ["Scala", "Java", "Apache Flink", "Elasticsearch", "Cassandra"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 mb-12 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Building scalable systems and optimizing infrastructure at leading tech companies
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-px bg-gray-100" />
            )}

            <div className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
              {/* Left side - Period */}
              <div className="text-gray-600 space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-sky-400" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 space-y-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 