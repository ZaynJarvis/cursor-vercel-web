'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/zaynjarvis",
    href: "https://github.com/zaynjarvis",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/zhihengliu",
    href: "https://www.linkedin.com/in/zhihengliu/",
    color: "hover:text-blue-600"
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "zaynjarvis@gmail.com",
    href: "mailto:zaynjarvis@gmail.com",
    color: "hover:text-red-500"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+65 8309 9012",
    href: "tel:+6583099012",
    color: "hover:text-green-500"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 mb-12 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next project
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {contactInfo.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.icon !== FaPhone ? "_blank" : undefined}
            rel={contact.icon !== FaPhone ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center space-x-4">
              <div className={`text-gray-400 transition-colors ${contact.color}`}>
                <contact.icon size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  {contact.label}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {contact.value}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <a
          href="mailto:zaynjarvis@gmail.com"
          className="inline-block text-white px-8 py-4 rounded-full text-lg font-medium 
                   transition-all hover:shadow-lg hover:scale-105 
                   bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-500 hover:to-sky-500"
        >
          Send me a message
        </a>
      </motion.div>
    </section>
  );
} 