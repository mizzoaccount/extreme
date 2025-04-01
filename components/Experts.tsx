"use client";
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiFileText } from 'react-icons/fi';

export default function Experts() {
  const experts = [
    {
      name: "Consolata Munga",
      role: "Parliamentary Procedures Expert",
      experience: "30+ years legislative training",
      image: "/dummy-expert1.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Dr. Rori Mwangi",
      role: "Public Finance Specialist",
      experience: "15+ years PFM consulting",
      image: "/dummy-expert2.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Prof. Kamau Goro",
      role: "Constitutional Law Expert",
      experience: "Author of 5 legislative textbooks",
      image: "/dummy-expert3.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Dr. Aisha Mohamed",
      role: "Governance Strategist",
      experience: "UN Development Policy Advisor",
      image: "/dummy-expert4.jpg",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "James Kariuki",
      role: "Legislative Tech Innovator",
      experience: "Digital transformation specialist",
      image: "/dummy-expert5.jpg",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <section id="experts" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Legislative Leaders
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seasoned professionals driving legislative excellence across Africa
          </p>
        </div>

        {/* Expert Carousel */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {experts.map((expert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="flex-shrink-0 w-80 mx-4 snap-center"
            >
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image with Overlay */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={expert.social.twitter} className="p-2 bg-white rounded-full shadow-sm">
                      <FiTwitter className="w-5 h-5 text-blue-600" />
                    </a>
                    <a href={expert.social.linkedin} className="p-2 bg-white rounded-full shadow-sm">
                      <FiLinkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6 relative -mt-16">
                  <div className="bg-white rounded-xl shadow-lg p-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                    <p className="text-blue-600 mb-3 font-medium">{expert.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{expert.experience}</p>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        View Profile
                        <FiFileText className="ml-2 w-4 h-4" />
                      </button>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-blue-100 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {experts.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-300 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}