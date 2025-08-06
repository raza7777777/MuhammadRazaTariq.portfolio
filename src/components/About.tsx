import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { calculateAge } from '../utils/ageCalculator';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const age = calculateAge('1995-10-27');

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'raza.tariq234@gmail.com', href: 'mailto:raza.tariq234@gmail.com' },
    { icon: Phone, label: 'Phone', value: '03118322574', href: 'tel:03118322574' },
    { icon: MapPin, label: 'Location', value: 'Pakistan', href: null },
    { icon: Calendar, label: 'Age', value: `${age} years old`, href: null },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I’m Muhammad Raza, a passionate IT enthusiast skilled in AI, chatbot development, web design, database management, and creative problem-solving. My goal is to combine technology and innovation to deliver smart digital solutions that make an impact.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My journey in technology began with a passion for creating innovative digital solutions. Over time, I developed expertise in building intelligent chatbots, AI-powered applications, and responsive websites using modern web technologies. I’m driven by the goal of turning complex problems into seamless, user-friendly experiences.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My ultimate goal is to become a leading IT expert and contribute to innovative projects that create real-world impact. Beyond coding, I enjoy learning emerging technologies and envisioning global opportunities in the digital world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1 }}
              className="mt-8"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Languages Known
              </h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Urdu'].map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;