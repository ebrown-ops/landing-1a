import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { label: 'Businesses Funded', value: 10000, prefix: '+' },
  { label: 'Total Funding', value: 500, prefix: '$', suffix: 'M' },
  { label: 'Average Approval Time', value: 24, suffix: 'hrs' },
];

export default function AnimatedStatistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                {stat.prefix}{stat.value}{stat.suffix}
              </motion.div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}