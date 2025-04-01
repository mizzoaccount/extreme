"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Services() {
  const services = [
    {
      title: "Legislative Training",
      description: "Comprehensive capacity building programs for legislators and legislative staff with our team's 30+ years of combined expertise in governance and lawmaking processes.",
      icon: "📚",
      features: [
        "Customized training modules",
        "International best practices",
        "Hands-on legislative simulations",
        "Post-training support"
      ]
    },
    {
      title: "Policy Formulation",
      description: "End-to-end policy analysis and development frameworks tailored to your institutional needs and national development goals.",
      icon: "📝",
      features: [
        "Stakeholder engagement",
        "Evidence-based policymaking",
        "Impact assessment",
        "Implementation roadmaps"
      ]
    },
    {
      title: "CIDP Development",
      description: "Expert preparation and review of County Integrated Development Plans aligned with national development objectives and local priorities.",
      icon: "🗺️",
      features: [
        "Public participation frameworks",
        "Sectoral needs assessment",
        "Monitoring & evaluation systems",
        "Budget alignment strategies"
      ]
    },
    {
      title: "Financial Management",
      description: "Advanced budget analysis and public finance management consulting services for optimal resource allocation and accountability.",
      icon: "💰",
      features: [
        "Budget preparation support",
        "Expenditure tracking",
        "Revenue enhancement strategies",
        "Fiscal decentralization advisory"
      ]
    },
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to strengthen legislative and governance frameworks at all levels
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-white p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl opacity-10">{service.icon}</div>
                <div className="flex flex-col h-full">
                  <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your legislative processes?</h3>
            <p className="text-blue-100 mb-8 text-lg">Our experts are ready to provide customized solutions for your institution.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}