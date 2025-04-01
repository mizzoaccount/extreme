"use client"
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Instagram, Twitter, ShoppingBag, Eye } from "lucide-react";

const images = [
  {
    url: "https://i.pinimg.com/474x/99/c2/1a/99c21a7b75dd0d5f8f1e17b3547531ea.jpg",
    shape: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]",
    size: "w-64 h-80 md:w-72 md:h-96",
    rotate: "-rotate-6",
    overlay: "bg-[#f4b500]/20"
  },
  {
    url: "https://i.pinimg.com/236x/e9/fa/bf/e9fabfce6ae935e36868c4ba6ca98d83.jpg",
    shape: "rounded-tl-[100px] rounded-br-[100px]",
    size: "w-72 h-64 md:w-80 md:h-72",
    rotate: "rotate-3",
    overlay: "bg-[#1a1a1a]/50"
  },
  {
    url: "https://i.pinimg.com/236x/36/e5/52/36e55270678f71bdb222eeeb8651ee23.jpg",
    shape: "rounded-full",
    size: "w-56 h-56 md:w-64 md:h-64",
    rotate: "rotate-0",
    overlay: "bg-[#ffffff]/20"
  },
  {
    url: "https://i.pinimg.com/236x/64/35/c2/6435c222aaa4c8286b99cee765bbcbbd.jpg",
    shape: "rounded-[40px]",
    size: "w-60 h-72 md:w-68 md:h-80",
    rotate: "rotate-2",
    overlay: "bg-[#0a0a0a]/60"
  },
  {
    url: "https://i.pinimg.com/236x/56/2b/0e/562b0edbf09f5ddbd502f3790706bc93.jpg",
    shape: "rounded-tr-[150px] rounded-bl-[150px]",
    size: "w-80 h-60 md:w-96 md:h-72",
    rotate: "-rotate-3",
    overlay: "bg-[#f4b500]/10"
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const constraintsRef = useRef(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  // The minimum distance to consider a swipe
  const minSwipeDistance = 50; 

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 30,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    });
    return controls.stop;
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => !hovered && nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [hovered]);

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      ref={constraintsRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center px-4 py-20 md:py-32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-[#f4b500]/10 blur-xl rounded-full"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-16 w-32 h-32 bg-[#ffffff]/5 blur-lg rounded-full"
        animate={{
          x: [0, -15, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left px-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="inline-block"
          >
            <span className="text-xs font-semibold tracking-widest text-[#f4b500] bg-black/30 px-4 py-2 rounded-full border border-[#f4b500]/20 flex items-center gap-2">
              <ShoppingBag size={14} />
              NEW COLLECTION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4b500] to-[#ffffff]">
              Extreme Collection
            </span>{" "}
            <span className="text-[#f4b500] text-3xl">shop your style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
          >
            Exclusive designer pieces crafted with precision and passion. Limited editions available worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="relative overflow-hidden group bg-[#f4b500] hover:bg-white text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f4b500]/30">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>

            <button className="relative overflow-hidden group border-2 border-[#f4b500] text-white hover:text-[#f4b500] font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f4b500]/20">
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={18} /> View Lookbook
              </span>
              <span className="absolute inset-0 bg-[#f4b500] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6 md:pt-8 flex items-center justify-center lg:justify-start gap-4 md:gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f4b500]">
                <motion.span>{rounded}</motion.span>+
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Exclusive Items</div>
            </div>
            <div className="h-10 w-px bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f4b500]">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
            </div>
            <div className="h-10 w-px bg-gray-600"></div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#f4b500] transition-colors hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f4b500] transition-colors hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Image gallery */}
        <motion.div 
          className="relative h-[400px] md:h-[500px] w-full mt-8 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`absolute ${img.size} ${img.shape} ${img.rotate} overflow-hidden border-2 ${index === current ? 'border-[#f4b500]' : 'border-transparent'} shadow-2xl transition-all duration-500`}
              style={{
                top: `${20 + (index * 10)}%`,
                left: `${10 + (index * 15)}%`,
                zIndex: index === current ? 20 : 10 - index,
                opacity: index === current ? 1 : Math.max(0, 0.7 - (Math.abs(index - current) * 0.3)),
                scale: index === current ? 1 : 0.9 - (Math.abs(index - current) * 0.1),
                filter: index === current ? 'none' : 'brightness(0.8)',
              }}
              whileHover={{ scale: index === current ? 1.05 : 0.95 }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
            >
              <img 
                src={img.url} 
                alt={`Fashion ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {index === current && (
                <motion.div 
                  className={`absolute inset-0 ${img.overlay} flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <button className="bg-[#f4b500] hover:bg-white text-black font-bold py-2 px-4 rounded-full text-xs flex items-center gap-2 transition-all duration-300 shadow-md">
                    <Eye size={14} /> Quick View
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation arrows - visible on all screens */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-[#f4b500] text-white hover:text-black rounded-full transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-[#f4b500] text-white hover:text-black rounded-full transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#f4b500] w-4 md:w-6" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#f4b500]/30"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#f4b500]/30"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#f4b500]/30"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#f4b500]/30"></div>
    </div>
  );
};

export default HeroSection;

