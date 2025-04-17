'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Script from 'next/script';

const projects = [
  {
    title: "Video Delivery Optimization",
    description: "Led the development of TikTok's video delivery system optimization, improving CDN efficiency and reducing latency by 40%. Implemented adaptive bitrate streaming and intelligent caching strategies for high-traffic video content.",
    tech: ["Go", "Kubernetes", "Redis", "CDN", "NGINX"],
    metrics: ["40% latency reduction", "2x throughput increase", "50% bandwidth savings"],
    type: "Infrastructure",
    keywords: ["CDN optimization", "video streaming", "caching strategies", "performance tuning"]
  },
  {
    title: "Storage System Architecture",
    description: "Designed and implemented a distributed storage system for video content, handling petabytes of data with high availability and fault tolerance. Optimized for rapid content delivery and data durability with multi-region replication and automatic failover.",
    tech: ["Rust", "Distributed Systems", "Object Storage", "Kafka"],
    metrics: ["99.999% availability", "3x cost reduction", "5PB+ data handled"],
    type: "Systems",
    keywords: ["distributed storage", "high availability", "fault tolerance", "data replication"]
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Built a real-time analytics system for video performance metrics, processing millions of events per second. Enables data-driven decisions for content delivery optimization with customizable dashboards and automated alerting for anomaly detection.",
    tech: ["Scala", "Apache Flink", "Elasticsearch", "Grafana"],
    metrics: ["1M+ events/sec", "Real-time insights", "Custom dashboards"],
    type: "Analytics",
    keywords: ["real-time analytics", "event processing", "data visualization", "performance metrics"]
  }
];

export default function Projects() {
  return (
    <>
      <Script id="schema-portfolio" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              ${projects.map((project, index) => `
                {
                  "@type": "Project",
                  "position": ${index + 1},
                  "name": "${project.title}",
                  "description": "${project.description}",
                  "keywords": ${JSON.stringify(project.keywords)},
                  "creator": {
                    "@type": "Person",
                    "name": "Liu Zhiheng"
                  }
                }
              `).join(',')}
            ]
          }
        `}
      </Script>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="projects-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-12 text-center"
        >
          <h2 id="projects-heading" className="text-4xl font-bold text-[#0099ff]">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise in scalable systems, infrastructure optimization, and high-performance computing for enterprise applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all border border-gray-200"
            >
              <div className="absolute inset-0 bg-[#f8faff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              
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
                        <svg className="w-4 h-4 mr-2 text-[#0099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {metric}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Keywords: </span>
                      {project.keywords.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
} 