"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaRegFilePdf, FaRegFileWord } from 'react-icons/fa';

export default function Resources() {
  const resources = [
    {
      title: "County Budget Analysis Framework",
      category: "Research Paper",
      description: "Comprehensive 2023 guide to effective fiscal management for county governments",
      link: "#",
      icon: <FaRegFilePdf className="w-6 h-6 text-red-500" />
    },
    {
      title: "Legislative Drafting Toolkit",
      category: "Template Pack",
      description: "Collection of 50+ customizable bill templates for various legislative needs",
      link: "#",
      icon: <FaRegFileWord className="w-6 h-6 text-blue-500" />
    }
  ];

  const blogPosts = [
    {
      title: "New Public Finance Management Regulations",
      excerpt: "In-depth analysis of 2023 constitutional amendments affecting county budgets and fiscal policies",
      date: "March 15, 2023",
      category: "Policy Updates",
      readTime: "8 min read"
    },
    {
      title: "Workshop: Modern Legislative Practices",
      excerpt: "Detailed recap of our Nairobi training session with 40+ county officials on contemporary legislative techniques",
      date: "February 28, 2023",
      category: "Events",
      readTime: "5 min read"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Knowledge Center
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our latest research, tools, and insights to empower your legislative work
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full mr-4 flex items-center">
                    {resource.icon}
                    <span className="ml-2">{resource.category}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  <span className="mr-2">Download Resource</span>
                  <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Latest <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
          </h3>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full p-8">
                  <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    <span className="mr-2">Read Article</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 shadow-xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Want more resources?</h3>
          <p className="text-blue-100 mb-6 text-lg">Subscribe to our monthly legislative insights newsletter</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}