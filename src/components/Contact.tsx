import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_hsh800m',
        'template_uy1z7ad',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'PVZtsh2XSyGROMtZI'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'raza.tariq234@gmail.com', href: 'mailto:raza.tariq234@gmail.com', color: 'text-red-500' },
    { icon: Phone, label: 'Phone', value: '0311-8322574', href: 'tel:03118322574', color: 'text-green-500' },
    { icon: MapPin, label: 'Location', value: 'Pakistan', href: null, color: 'text-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
  Let’s Connect
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
<p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
  Have an exciting project in mind, need a tech solution, or just want to talk about 
  <span className="font-semibold text-blue-600 dark:text-blue-400"> AI & Innovation</span>? 
  I’d be happy to collaborate and bring your ideas to life!
</p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800`}>
                      <Icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

         {/* Contact Form */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <form 
    onSubmit={async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "a066433d-92d6-4ca7-976e-3dff13673f35"); // Replace with your key

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    }} 
    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700"
  >
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

    {submitStatus && (
      <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {submitStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
        <span>{submitStatus === 'success' ? 'Message sent successfully!' : 'Something went wrong. Please try again.'}</span>
      </div>
    )}

    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Tell me about your project or just say hello!"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
      >
        <Send className="w-5 h-5" />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </motion.button>
    </div>
  </form>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
