/*"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star, ArrowRight } from "lucide-react";

// Dummy data for trending products
const trendingProducts = [
  {
    id: 1,
    name: "Silk Evening Gown",
    designer: "Valentino",
    price: 1299,
    originalPrice: 1899,
    image: "https://i.pinimg.com/736x/97/82/56/978256ac60bc5ed25e6dfeda175bd14d.jpg",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Leather Trench Coat",
    designer: "Balenciaga",
    price: 2499,
    originalPrice: 3200,
    image: "https://i.pinimg.com/736x/77/ea/a2/77eaa2802affc0b41489388e2d2bdc2e.jpg",
    rating: 4.6,
    isNew: false,
  },
  {
    id: 3,
    name: "Cashmere Blazer",
    designer: "Saint Laurent",
    price: 899,
    originalPrice: 1200,
    image: "https://i.pinimg.com/736x/da/e1/00/dae1000ddbd86a468c90685ac6603879.jpg",
    rating: 4.9,
    isNew: true,
  },
  {
    id: 4,
    name: "Embroidered Cocktail Dress",
    designer: "Dior",
    price: 1799,
    originalPrice: 2200,
    image: "https://i.pinimg.com/736x/57/6e/ef/576eefe23318e35580853471036bbc8d.jpg",
    rating: 4.7,
    isNew: false,
  },
  {
    id: 5,
    name: "Wool Wide-Leg Pants",
    designer: "Prada",
    price: 699,
    originalPrice: 950,
    image: "https://i.pinimg.com/736x/c8/0b/cb/c80bcbf585310970bc9a68e1ba7e96f1.jpg",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 6,
    name: "Velvet Blazer Set",
    designer: "Gucci",
    price: 1599,
    originalPrice: 2100,
    image: "https://i.pinimg.com/236x/c7/c5/b4/c7c5b45f89d252187a48e8517c23bc01.jpg",
    rating: 4.9,
    isNew: false,
  },
];

const FeaturedCollectionsLight = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header *
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#82cee4] bg-[#82cee4]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <Star size={14} /> TRENDING NOW
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#82cee4] to-[#62aee4]">
              Featured Collections
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover this season's most coveted designer pieces
          </p>
        </motion.div>

        {/* Product Grid *
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#82cee4]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Product Image *
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay *
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#82cee4] hover:bg-[#62aee4] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingBag size={16} /> Add to Bag
                  </motion.button>
                </div>
                {/* Badges *
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-[#82cee4] text-black text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                {/* Wishlist Button *
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-sm">
                  <Heart size={18} className="text-gray-800 group-hover:text-white" />
                </button>
              </div>

              {/* Product Info *
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.designer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#82cee4] font-bold">${product.price.toLocaleString()}</p>
                    {product.originalPrice > product.price && (
                      <p className="text-gray-400 text-sm line-through">${product.originalPrice.toLocaleString()}</p>
                    )}
                  </div>
                </div>
                {/* Rating *
                <div className="mt-3 flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "text-[#82cee4] fill-[#82cee4]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                </div>
                {/* Quick View *
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 w-full border border-gray-200 hover:border-[#82cee4] text-gray-700 hover:text-[#82cee4] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <Eye size={14} /> Quick View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button *
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="relative overflow-hidden group border-2 border-[#82cee4] text-gray-900 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md">
            <span className="relative z-10 flex items-center gap-2">
              View All Collections <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-[#82cee4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollectionsLight;*/


"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star, ArrowRight } from "lucide-react";
import useProducts from "@/utils/useProducts";

interface Product {
  _id: string;
  name: string;
  designer: string;
  category: {
    main: string;
    sub: string;
    brand: string;
  };
  price: number;
  stock: number;
  images: string[];
  attributes: Record<string, string>;
  createdAt: string;
}

const FeaturedCollectionsLight = () => {
  const { products, loading, error } = useProducts();

  // Transform the API products to match our frontend format
  const trendingProducts = products.map((product, index) => ({
    id: product._id,
    name: product.name,
    designer: product.designer,
    price: product.price,
    originalPrice: product.price * 1.3, // Adding 30% as "original" price for display
    image: product.images[0] || "https://via.placeholder.com/300", // Fallback image
    rating: 4.5 + (index % 5 * 0.1), // Generate ratings between 4.5-5.0
    isNew: new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000 // Mark as new if created in last 30 days
  }));

  if (loading) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse h-8 w-32 bg-gray-200 rounded-full mx-auto"></div>
          <div className="animate-pulse h-12 w-64 bg-gray-200 rounded-full mx-auto mt-6"></div>
          <div className="animate-pulse h-4 w-96 bg-gray-200 rounded-full mx-auto mt-4"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl h-[500px] animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#82cee4] bg-[#82cee4]/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
            <Star size={14} /> TRENDING NOW
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#82cee4] to-[#62aee4]">
              Featured Collections
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover this season's most coveted designer pieces
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#82cee4]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#82cee4] hover:bg-[#62aee4] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingBag size={16} /> Add to Bag
                  </motion.button>
                </div>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-[#82cee4] text-black text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#82cee4] hover:text-white transition-colors shadow-sm">
                  <Heart size={18} className="text-gray-800 group-hover:text-white" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.designer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#82cee4] font-bold">Ksh {product.price.toLocaleString()}</p>
                    {product.originalPrice > product.price && (
                      <p className="text-gray-400 text-sm line-through">Ksh {product.originalPrice.toLocaleString()}</p>
                    )}
                  </div>
                </div>
                {/* Rating */}
                <div className="mt-3 flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "text-[#82cee4] fill-[#82cee4]" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">({product.rating.toFixed(1)})</span>
                </div>
                {/* Quick View */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 w-full border border-gray-200 hover:border-[#82cee4] text-gray-700 hover:text-[#82cee4] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <Eye size={14} /> Quick View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="relative overflow-hidden group border-2 border-[#82cee4] text-gray-900 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md">
            <span className="relative z-10 flex items-center gap-2">
              View All Collections <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-[#82cee4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollectionsLight;