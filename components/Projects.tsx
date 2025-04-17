'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Video Delivery Optimization",
    description: "Led the development of TikTok's video delivery system optimization, improving CDN efficiency and reducing latency by 40%. Implemented adaptive bitrate streaming and intelligent caching strategies.",
    tech: ["Go", "Kubernetes", "Redis", "CDN", "NGINX"],
    metrics: ["40% latency reduction", "2x throughput increase", "50% bandwidth savings"],
    type: "Infrastructure"
  },
  {
    title: "Storage System Architecture",
    description: "Designed and implemented a distributed storage system for video content, handling petabytes of data with high availability and fault tolerance. Optimized for rapid content delivery and data durability.",
    tech: ["Rust", "Distributed Systems", "Object Storage", "Kafka"],
    metrics: ["99.999% availability", "3x cost reduction", "5PB+ data handled"],
    type: "Systems"
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Built a real-time analytics system for video performance metrics, processing millions of events per second. Enables data-driven decisions for content delivery optimization.",
    tech: ["Scala", "Apache Flink", "Elasticsearch", "Grafana"],
    metrics: ["1M+ events/sec", "Real-time insights", "Custom dashboards"],
    type: "Analytics"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-[#0099ff]">
          Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Showcasing my work in scalable systems, infrastructure optimization, and high-performance computing
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all border border-gray-200"
          >
            <div className="absolute inset-0 bg-[#f8faff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-[#0099ff] bg-[#e6f4ff] rounded-full">
                {project.type}
              </span>
              
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.metrics.map(metric => (
                    <div
                      key={metric}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg className="w-4 h-4 mr-2 text-[#0099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {metric}
                    </div>
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