"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaCheckCircle, FaChartLine, FaRegClock, FaHandshake } from 'react-icons/fa';

export default function ClientsImpact() {
  const caseStudies = [
    {
      title: "Streamlining Mandera's Budget Process",
      client: "Mandera County Assembly",
      challenge: "40% budget implementation delays",
      solution: "LLI's customized financial management training",
      impact: "Reduced processing time by 65% in 6 months",
      image: "/dummy-case1.jpg",
      icon: <FaRegClock className="w-6 h-6 text-blue-500" />
    },
    {
      title: "CIDP Modernization Initiative",
      client: "Meru County Government",
      challenge: "Outdated development planning framework",
      solution: "5-year strategic CIDP overhaul",
      impact: "100% compliance with national standards",
      image: "/dummy-case2.jpg",
      icon: <FaChartLine className="w-6 h-6 text-blue-500" />
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="clients" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Proven Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforming <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Governance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving measurable results for legislative bodies and government institutions
          </p>
        </motion.div>

        {/* Client Logos - Static Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {["Meru", "Kajiado", "Samburu", "Lewa", "Child Welfare", "Kakuma"].map((client, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span className="text-gray-700 font-semibold flex items-center">
                <FaHandshake className="mr-2 text-blue-500" />
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                  {study.icon}
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-700">Client</p>
                        <p className="text-gray-600">{study.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-700">Challenge</p>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-700">Solution</p>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>Impact: {study.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { number: "30+", label: "Years Experience" },
            { number: "150+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "45", label: "Counties Served" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}