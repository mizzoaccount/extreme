/*"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useState } from "react";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    designer: string;
    price: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    isNew: boolean;
    stock: number;
  };
  theme?: {
    primary: string;
    hover: string;
    text: string;
  };
  onQuickView?: () => void;
  onAddToCart?: () => void;
  animationDelay?: number;
}

export const ProductCard = ({
  product,
  theme = { primary: "#f4b500", hover: "#d4a017", text: "black" },
  onQuickView = () => {},
  onAddToCart = () => {},
  animationDelay = 0,
}: ProductCardProps) => {
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some((item) => item.id === product._id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product._id);
    } else {
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        brand: product.designer,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#f4b500]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >

      <div className="relative h-80 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

      
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isNew && (
            <span className={`bg-[${theme.primary}] text-black text-xs font-bold px-3 py-1 rounded-full`}>
              NEW
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
              -{Math.round((1 - product.price / product.originalPrice!) * 100)}%
            </span>
          )}
        </div>

     
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#f4b500] hover:text-white transition-colors shadow-sm"
        >
          <Heart
            size={18}
            className="text-gray-800 group-hover:text-white"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

    
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.designer}</p>
          </div>
          <div className="text-right">
            <p className={`text-[${theme.primary}] font-bold`}>
              Ksh {product.price.toLocaleString()}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-gray-400 text-sm line-through">
                Ksh {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>

     
        <div className="mt-3 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating)
                  ? `text-[${theme.primary}] fill-[${theme.primary}]`
                  : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.rating.toFixed(1)})</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onQuickView}
          className="mt-4 w-full border border-gray-200 hover:border-[#f4b500] text-gray-700 hover:text-[#f4b500] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <Eye size={14} /> Quick View
        </motion.button>
      </div>
    </motion.div>
  );
};*/

"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star } from "lucide-react";
import { useState } from "react";
import { useWishlistStore } from "@/stores/wishlistStore";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    images: string[];
    stock: number;
    category: {
      brand: string;
      main: string;
      sub: string;
    };
    attributes?: {
      Colorway?: string;
      ReleaseDate?: string;
      Size?: string;
    };
  };
  theme?: {
    primary: string;
    hover: string;
    text: string;
  };
  onQuickView?: () => void;
  onAddToCart?: () => void;
  animationDelay?: number;
}

export const ProductCard = ({
  product,
  theme = { primary: "#f4b500", hover: "#d4a017", text: "black" },
  onQuickView = () => {},
  onAddToCart = () => {},
  animationDelay = 0,
}: ProductCardProps) => {
  const { items, addItem, removeItem } = useWishlistStore();
  const isWishlisted = items.some((item) => item.id === product._id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product._id);
    } else {
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        brand: product.category.brand,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#f4b500]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Stock Status Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.stock > 0 ? (
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#f4b500] hover:text-white transition-colors shadow-sm"
        >
          <Heart
            size={18}
            className="text-gray-800 group-hover:text-white"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-gray-500 text-sm"><span className="font-bold">Brand:</span> {product.category.brand}</p>   
          </div>
          <div className="text-right">
            <p className="text-[#f4b500] font-bold">
              Ksh {product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Colorway */}
        {product.attributes?.Colorway && (
          <div className="mt-2 flex items-center">
            <span className="text-gray-500 text-sm">Color: {product.attributes.Colorway}</span>
          </div>
        )}

        {/* Quick View Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onQuickView}
          className="mt-4 w-full border border-gray-200 hover:border-[#f4b500] text-gray-700 hover:text-[#f4b500] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <Eye size={14} /> Quick View
        </motion.button>
      </div>
    </motion.div>
  );
};