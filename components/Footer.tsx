"use client";
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Services", href: "#services" },
        { name: "Experts", href: "#experts" },
        { name: "Clients", href: "#clients" },
        { name: "Resources", href: "#resources" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Approach", href: "#approach" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Legislative Leadership Institute
            </h3>
            <p className="text-gray-400 mb-6">
              Advancing legislative excellence through expert consultation, capacity building, and innovative governance solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <span>Town House, 8th Floor<br/>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 text-blue-400 mr-3" />
                <span>+254 722 833202</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 text-blue-400 mr-3" />
                <span>info@lli.org</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Legislative Leadership Institute. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}