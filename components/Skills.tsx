'use client';

import { motion } from 'framer-motion';

const skills = {
  "Backend Development": [
    { name: "Go", level: 95 },
    { name: "Rust", level: 90 },
    { name: "Scala", level: 85 },
    { name: "Java", level: 85 }
  ],
  "Infrastructure": [
    { name: "Kubernetes", level: 95 },
    { name: "AWS", level: 90 },
    { name: "Docker", level: 90 },
    { name: "Terraform", level: 85 }
  ],
  "Distributed Systems": [
    { name: "Kafka", level: 90 },
    { name: "Redis", level: 90 },
    { name: "Elasticsearch", level: 85 },
    { name: "Cassandra", level: 80 }
  ],
  "Performance Optimization": [
    { name: "CDN", level: 95 },
    { name: "Caching", level: 90 },
    { name: "Load Balancing", level: 90 },
    { name: "System Design", level: 95 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 mb-12 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Specialized in high-performance distributed systems and infrastructure optimization
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800">{category}</h3>
            <div className="space-y-4">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-blue-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-50 dark:bg-gray-700 rounded-full overflow-hidden border border-gray-100">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-sky-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 