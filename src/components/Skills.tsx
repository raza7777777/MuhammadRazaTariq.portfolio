import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Bot, Palette, Database, Globe, MessageSquare, Users, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
  { name: 'Web Designing', icon: Palette, level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', icon: Code, level: 85, color: 'bg-yellow-400' },
  { name: 'AWS Cloud Architecture', icon: Code, level: 85, color: 'bg-orange-500' },
  { name: 'Microsoft Azure', icon: Code, level: 80, color: 'bg-sky-600' },
  { name: 'Docker', icon: Code, level: 85, color: 'bg-cyan-500' },
  { name: 'Linux Administration', icon: Code, level: 75, color: 'bg-emerald-500' },
  { name: 'HTML & CSS', icon: Globe, level: 95, color: 'bg-red-400' },
  { name: 'Chatbot Design (Dialogflow)', icon: Bot, level: 80, color: 'bg-green-500' },
  { name: 'VS Code', icon: Code, level: 90, color: 'bg-indigo-500' },
  { name: 'Kommunicate Integration', icon: MessageSquare, level: 75, color: 'bg-purple-500' },
  { name: 'devops engineer', icon: MessageSquare, level: 75, color: 'bg-emerald-500' },
  { name: 'AI engineer', icon: MessageSquare, level: 75, color: 'bg-teal-500' },


];


  const softSkills = [
    { name: 'Communication', icon: MessageSquare, description: 'Effective verbal and written communication' },
    { name: 'Teamwork', icon: Users, description: 'Collaborative work and team leadership' },
    { name: 'Problem-solving', icon: Lightbulb, description: 'Analytical thinking and creative solutions' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className={`h-2 rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Soft Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

 {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <Bot className="w-5 h-5 mr-2 text-blue-600" />
              Currently Learning
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              AI Chatbot Development, Flowise AI & Automation Workflows
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Natural Language Processing
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                API Automation
              </span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-medium">
                Conversational AI
              </span>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;