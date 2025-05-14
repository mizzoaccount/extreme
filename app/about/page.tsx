/*"use client";

import { motion } from "framer-motion";
import NavbarTwo from "@/components/HeaderTwo";
import LuxuryFooter from "@/components/LuxuryFooter";
import { ArrowRight, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const AboutPage = () => {
  // Timeline data
  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "Extreme Collections was born in a small Milan studio, with a vision to redefine luxury streetwear.",
      image: "https://i.pinimg.com/736x/5a/3e/6a/5a3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg"
    },
    {
      year: "2012",
      title: "First Flagship Store",
      description: "Opened our first boutique in downtown Milan, introducing the 'Extreme Luxury' concept to the world.",
      image: "https://i.pinimg.com/736x/77/ea/a2/77eaa2802affc0b41489388e2d2bdc2e.jpg"
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Launched international shipping and opened stores in Paris, New York, and Tokyo.",
      image: "https://i.pinimg.com/736x/da/e1/00/dae1000ddbd86a468c90685ac6603879.jpg"
    },
    {
      year: "2018",
      title: "Collaboration Era",
      description: "Partnered with top artists and designers to create limited edition collections that sold out within hours.",
      image: "https://i.pinimg.com/736x/57/6e/ef/576eefe23318e35580853471036bbc8d.jpg"
    },
    {
      year: "2022",
      title: "Sustainability Pledge",
      description: "Committed to 100% sustainable and ethical production by 2025 without compromising our signature luxury.",
      image: "https://i.pinimg.com/736x/c8/0b/cb/c80bcbf585310970bc9a68e1ba7e96f1.jpg"
    },
    {
      year: "Present",
      title: "The Future",
      description: "Continuing to push boundaries in fashion with innovative designs and unparalleled quality.",
      image: "https://i.pinimg.com/736x/97/82/56/978256ac60bc5ed25e6dfeda175bd14d.jpg"
    }
  ];

  // Team members
  const team = [
    {
      name: "Alessandro Rossi",
      role: "Founder & Creative Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Fashion is the armor to survive reality."
    },
    {
      name: "Sophia Chen",
      role: "Head Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Every stitch tells a story of rebellion and refinement."
    },
    {
      name: "James Laurent",
      role: "Global Brand Director",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "Luxury should be felt, not just seen."
    },
    {
      name: "Isabella Moretti",
      role: "Sustainability Officer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "True style respects the earth that creates it."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />
      
      {/* Hero Section *
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-looking-through-the-clothes-in-a-store-39845-large.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4b500] to-[#d4a017]">
              Extreme Collections
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Where bold design meets uncompromising quality. Redefining luxury for the rebellious at heart.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full flex items-center gap-2 mx-auto"
          >
            Explore Our Story <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </section>

      {/* Mission Statement *
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#f4b500]">Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Extreme Collections, we believe fashion should be fearless. Our designs blend Italian craftsmanship with streetwise edge, creating pieces that make statements without saying a word.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We're not just selling clothes - we're offering armor for the modern individual. Each collection is a carefully curated rebellion against the ordinary.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Meet The Team
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/9a/3e/6a/9a3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg" 
                alt="Extreme Collections design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Milan Atelier</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="https://i.pinimg.com/736x/8e/3e/6a/8e3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg" 
                alt="Extreme Collections design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Handcrafted Details</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden col-span-2">
              <img 
                src="https://i.pinimg.com/736x/97/82/56/978256ac60bc5ed25e6dfeda175bd14d.jpg" 
                alt="Extreme Collections design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Sustainable Luxury</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section *
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our <span className="text-[#f4b500]">Journey</span>
          </motion.h2>
          
          <div className="relative">
            {/* Vertical line *
            <div className="absolute left-1/2 h-full w-0.5 bg-[#f4b500] transform -translate-x-1/2 z-0"></div>
            
            {/* Timeline items *
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Year *
                  <div className="w-1/2 px-8">
                    <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Dot *
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#f4b500] border-4 border-white z-10"></div>
                  
                  {/* Content *
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="h-48 overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section *
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-[#f4b500]">Visionaries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the creative minds who turn rebellion into wearable art
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white italic">"{member.quote}"</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#f4b500] font-medium mb-2">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-[#f4b500]">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#f4b500]">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#f4b500]">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability Section *
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#f4b500]">Sustainable</span> Luxury
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our commitment to the planet is as strong as our designs. By 2025, 100% of our materials will be sustainably sourced without compromising our signature quality.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#f4b500] mr-2">✓</span>
                <span>Ethically sourced materials from certified suppliers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f4b500] mr-2">✓</span>
                <span>Carbon-neutral shipping worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f4b500] mr-2">✓</span>
                <span>Zero-waste production facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f4b500] mr-2">✓</span>
                <span>Recycling program for all Extreme Collections garments</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full"
            >
              Our Sustainability Report
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <img 
              src="https://i.pinimg.com/736x/c7/c5/b4/c7c5b45f89d252187a48e8517c23bc01.jpg" 
              alt="Sustainable fashion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-[#f4b500] h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-white">85% of our 2025 sustainability goals achieved</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section *
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Extreme Movement</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive drops, early access, and 15% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f4b500] text-white placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full"
            >
              Subscribe
            </motion.button>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-300 hover:text-[#f4b500]">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#f4b500]">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#f4b500]">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#f4b500]">
              <Youtube size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      <LuxuryFooter />
    </div>
  );
};

export default AboutPage;*/

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaAward, FaLeaf, FaGlobe, FaShieldAlt, FaHandsHelping, FaUserTie, FaHeart } from 'react-icons/fa';
import Navbar from '@/components/Header';
import Footer from '@/components/LuxuryFooter';
import NavbarTwo from '@/components/HeaderTwo';

const AboutPage = () => {
  const stats = [
    { value: '20+', label: 'Years Experience', icon: <FaAward className="text-blue-600 text-3xl" /> },
    { value: '500+', label: 'Products', icon: <FaFlask className="text-blue-600 text-3xl" /> },
    { value: '40+', label: 'Counties Served', icon: <FaGlobe className="text-blue-600 text-3xl" /> },
    { value: '1000+', label: 'Satisfied Clients', icon: <FaHeart className="text-blue-600 text-3xl" /> },
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Safety First",
      description: "Rigorous quality control and safety protocols at every stage of production and delivery."
    },
    {
      icon: <FaLeaf className="text-blue-600 text-2xl" />,
      title: "Sustainable Solutions",
      description: "Developing eco-friendly chemical alternatives that reduce environmental impact."
    },
    {
      icon: <FaFlask className="text-blue-600 text-2xl" />,
      title: "Innovation Driven",
      description: "Dedicated R&D team constantly pushing boundaries in chemical technology."
    },
  ];

  const coreValues = [
    {
      icon: <FaHeart className="text-blue-600 text-2xl" />,
      title: "Cruelty Free",
      description: "We don't sell products tested on animals."
    },
    {
      icon: <FaAward className="text-blue-600 text-2xl" />,
      title: "Quality",
      description: "Committed to providing products that meet the highest standards of quality ensuring durability, accuracy and reliability."
    },
    {
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      title: "Expertise",
      description: "Our team consists of knowledgeable professionals with deep understanding of laboratory equipment and chemicals."
    },
    {
      icon: <FaLeaf className="text-blue-600 text-2xl" />,
      title: "Mild Formula",
      description: "Less irritation, suitable for sensitive skin."
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Safety",
      description: "Safety is our top priority. We understand the importance of creating a safe and secure laboratory environment."
    },
    {
      icon: <FaHandsHelping className="text-blue-600 text-2xl" />,
      title: "Customer Focus",
      description: "Dedicated to building strong long-term relationships. Your satisfaction is our priority."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <>
    <NavbarTwo />
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 40],
                x: [null, (Math.random() - 0.5) * 40],
                rotate: [0, 360],
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="2" />
                <path d="M16 12l3 3m-7 0l3-3m-5-5l3-3m-3 14l3-3" />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About Malex Chem <span className="text-blue-600">Supplies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering chemical innovation and reliable laboratory solutions since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.pinimg.com/736x/bb/74/ee/bb74eeb1fdeab54ae029d19ca30bfc0d.jpg" 
                  alt="Modern chemical laboratory"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
              </div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-100 border border-blue-200"
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 rounded-lg bg-blue-50 border border-blue-200"
                animate={{
                  rotate: [0, 5, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6"
                variants={itemVariants}
              >
                <span className="text-blue-600 font-medium">Our Story</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Building a Legacy of <span className="text-blue-600">Excellence</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                variants={itemVariants}
              >
                Malex Chemical Supplies Limited was founded in 2005 with a commitment to supply high-quality laboratory chemicals, equipment, and medical supplies. Our journey began with a small team of dedicated professionals and a vision to improve access to essential laboratory and medical supplies.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={itemVariants}
              >
                Over the years, we have grown to become a trusted name in the industry, serving a diverse clientele across East Africa. Today, we have expanded our operations and established a strong distribution network, ensuring that our products reach customers efficiently and reliably.
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <h3 className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-medium">Our Purpose</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Driving <span className="text-blue-600">Innovation</span> Forward
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaAward className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To be the most reliable company of choice in all our core services, recognized as a symbol of excellence that leaves a lasting impression on every customer we serve.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaFlask className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To provide high-quality laboratory chemicals, equipment, and medical supplies through innovative solutions, exceptional service, and sustainable practices that meet the evolving needs of our customers across East Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-medium">Our Foundation</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-600">Core Values</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The principles that guide every decision we make and every interaction we have.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-blue-50 rounded-xl p-6 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-blue-100 border border-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-medium">Why Choose Us</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-600">Commitment</span> to You
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-blue-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-blue-100">Expert Team</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our success is driven by a team of passionate professionals dedicated to excellence in chemical solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl">
              Learn About Our Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;