'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-8 px-4 bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 font-medium"
          >
            © {currentYear} zaynjarvis. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <span>Built with</span>
            <a 
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#0099ff] hover:text-[#007acc] font-medium"
            >
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.325 3.05L8.667 20.432l1.999.618 4.658-17.382-1.999-.618zM7.612 18.36l1.36-1.448-.001-.019-4.295-4.06 4.295-4.058-.001-.019-1.36-1.448-5.61 5.525 5.61 5.527zM16.388 18.36l5.61-5.527-5.61-5.525-1.36 1.448-.001.019 4.295 4.058-4.295 4.06-.001.019 1.36 1.448z" />
              </svg>
              Cursor
            </a>
            <span>—</span>
            <span>The AI-first code editor</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 