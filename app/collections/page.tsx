"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Eye, Star, ArrowRight, Search, X, ChevronDown, ChevronUp, Sliders } from "lucide-react";
import NavbarTwo from "@/components/HeaderTwo"; // Import your Navbar component
import LuxuryFooter from "@/components/LuxuryFooter";

// Extended dummy data for collections with categories
const collections = [
  {
    id: 1,
    name: "Silk Evening Gown",
    designer: "Valentino",
    price: 1299,
    originalPrice: 1899,
    image: "https://i.pinimg.com/736x/97/82/56/978256ac60bc5ed25e6dfeda175bd14d.jpg",
    rating: 4.8,
    isNew: true,
    category: "Dresses",
    color: "Black",
    size: ["S", "M", "L"],
    season: "Fall",
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
    category: "Outerwear",
    color: "Brown",
    size: ["M", "L", "XL"],
    season: "Winter",
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
    category: "Suits",
    color: "Navy",
    size: ["XS", "S", "M"],
    season: "All Season",
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
    category: "Dresses",
    color: "Gold",
    size: ["XS", "S", "M", "L"],
    season: "Spring",
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
    category: "Pants",
    color: "Gray",
    size: ["S", "M", "L"],
    season: "Winter",
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
    category: "Suits",
    color: "Green",
    size: ["M", "L", "XL"],
    season: "Fall",
  },
  {
    id: 7,
    name: "Silk Camisole Top",
    designer: "Versace",
    price: 499,
    originalPrice: 750,
    image: "https://i.pinimg.com/736x/8e/3e/6a/8e3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg",
    rating: 4.4,
    isNew: true,
    category: "Tops",
    color: "Red",
    size: ["XS", "S", "M"],
    season: "Summer",
  },
  {
    id: 8,
    name: "Denim Jacket",
    designer: "Diesel",
    price: 799,
    originalPrice: 999,
    image: "https://i.pinimg.com/736x/5a/3e/6a/5a3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg",
    rating: 4.3,
    isNew: false,
    category: "Outerwear",
    color: "Blue",
    size: ["S", "M", "L", "XL"],
    season: "All Season",
  },
  {
    id: 9,
    name: "Leather Mini Skirt",
    designer: "Balmain",
    price: 899,
    originalPrice: 1200,
    image: "https://i.pinimg.com/736x/9a/3e/6a/9a3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg",
    rating: 4.6,
    isNew: true,
    category: "Skirts",
    color: "Black",
    size: ["XS", "S", "M"],
    season: "Fall",
  },
];

// Extract unique categories, colors, sizes, and seasons for filters
const categories = [...new Set(collections.map(item => item.category))];
const colors = [...new Set(collections.map(item => item.color))];
const sizes = [...new Set(collections.flatMap(item => item.size))];
const seasons = [...new Set(collections.map(item => item.season))];
const designers = [...new Set(collections.map(item => item.designer))];

const CollectionsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortOption, setSortOption] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState("All Collections");

  // Collection themes
  const collectionThemes = [
    "All Collections",
    "New Arrivals",
    "Best Sellers",
    "Summer Essentials",
    "Winter Collection",
    "Designer Spotlight",
  ];

  // Filter products based on search and filters
  const filteredProducts = collections.filter((product) => {
    // Search query
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.designer.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(product.category);
    
    // Color filter
    const matchesColor = selectedColors.length === 0 || 
                        selectedColors.includes(product.color);
    
    // Size filter
    const matchesSize = selectedSizes.length === 0 || 
                       product.size.some(size => selectedSizes.includes(size));
    
    // Season filter
    const matchesSeason = selectedSeasons.length === 0 || 
                         selectedSeasons.includes(product.season);
    
    // Designer filter
    const matchesDesigner = selectedDesigners.length === 0 || 
                           selectedDesigners.includes(product.designer);
    
    // Price range filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Collection theme filter
    const matchesCollection = activeCollection === "All Collections" || 
                            (activeCollection === "New Arrivals" && product.isNew) ||
                            (activeCollection === "Best Sellers" && product.rating >= 4.7);

    return matchesSearch && matchesCategory && matchesColor && matchesSize && 
           matchesSeason && matchesDesigner && matchesPrice && matchesCollection;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  // Toggle filters
  const toggleFilter = (filter: string, filterType: string) => {
    switch (filterType) {
      case "category":
        setSelectedCategories(prev =>
          prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        break;
      case "color":
        setSelectedColors(prev =>
          prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        break;
      case "size":
        setSelectedSizes(prev =>
          prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        break;
      case "season":
        setSelectedSeasons(prev =>
          prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        break;
      case "designer":
        setSelectedDesigners(prev =>
          prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        );
        break;
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedSeasons([]);
    setSelectedDesigners([]);
    setPriceRange([0, 5000]);
    setSearchQuery("");
    setSortOption("featured");
    setActiveCollection("All Collections");
  };

  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />
      
      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4b500] to-[#d4a017]">
              Explore Our Collections
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated selections organized by theme, season, and style to elevate your wardrobe
          </p>
        </motion.section>

        {/* Collection Themes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-4 pb-2">
            {collectionThemes.map((theme) => (
              <motion.button
                key={theme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCollection(theme)}
                className={`px-6 py-3 rounded-full whitespace-nowrap ${activeCollection === theme ? "bg-[#f4b500] text-black font-bold" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {theme}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f4b500] focus:border-[#f4b500]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Sort and Filter Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f4b500] focus:border-[#f4b500]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
              >
                <Sliders className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block w-64 flex-shrink-0"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-32">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#f4b500] hover:text-[#d4a017]"
                >
                  Clear all
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full mb-2"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleFilter(category, "category")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center">
                      <input
                        id={`color-${color}`}
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleFilter(color, "color")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`color-${color}`} className="ml-3 text-sm text-gray-600">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFilter(size, "size")}
                      className={`px-3 py-1 text-sm rounded-full border ${selectedSizes.includes(size) ? "bg-[#f4b500] text-black border-[#f4b500]" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Season Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Season</h4>
                <div className="space-y-2">
                  {seasons.map((season) => (
                    <div key={season} className="flex items-center">
                      <input
                        id={`season-${season}`}
                        type="checkbox"
                        checked={selectedSeasons.includes(season)}
                        onChange={() => toggleFilter(season, "season")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`season-${season}`} className="ml-3 text-sm text-gray-600">
                        {season}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designer Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Designer</h4>
                <div className="space-y-2">
                  {designers.map((designer) => (
                    <div key={designer} className="flex items-center">
                      <input
                        id={`designer-${designer}`}
                        type="checkbox"
                        checked={selectedDesigners.includes(designer)}
                        onChange={() => toggleFilter(designer, "designer")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`designer-${designer}`} className="ml-3 text-sm text-gray-600">
                        {designer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "item" : "items"}
              </p>
              {selectedCategories.length > 0 || selectedColors.length > 0 || 
               selectedSizes.length > 0 || selectedSeasons.length > 0 || 
               selectedDesigners.length > 0 || priceRange[0] > 0 || 
               priceRange[1] < 5000 ? (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#f4b500] hover:text-[#d4a017] flex items-center gap-1"
                >
                  <X size={14} /> Clear filters
                </button>
              ) : null}
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#f4b500]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                          className="w-full bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
                        >
                          <ShoppingBag size={16} /> Add to Bag
                        </motion.button>
                      </div>
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.isNew && (
                          <span className="bg-[#f4b500] text-black text-xs font-bold px-3 py-1 rounded-full">
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
                      <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-[#f4b500] hover:text-white transition-colors shadow-sm">
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
                          <p className="text-[#f4b500] font-bold">${product.price.toLocaleString()}</p>
                          {product.originalPrice > product.price && (
                            <p className="text-gray-400 text-sm line-through">${product.originalPrice.toLocaleString()}</p>
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
                              className={i < Math.floor(product.rating) ? "text-[#f4b500] fill-[#f4b500]" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                      </div>
                      {/* Quick View */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-4 w-full border border-gray-200 hover:border-[#f4b500] text-gray-700 hover:text-[#f4b500] py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
                      >
                        <Eye size={14} /> Quick View
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Mobile Filters */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-white p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Price Range Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full mb-2"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">Category</h4>
                  <ChevronDown size={18} />
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleFilter(category, "category")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`mobile-category-${category}`} className="ml-3 text-sm text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">Color</h4>
                  <ChevronDown size={18} />
                </div>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center">
                      <input
                        id={`mobile-color-${color}`}
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleFilter(color, "color")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`mobile-color-${color}`} className="ml-3 text-sm text-gray-600">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">Size</h4>
                  <ChevronDown size={18} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFilter(size, "size")}
                      className={`px-3 py-1 text-sm rounded-full border ${selectedSizes.includes(size) ? "bg-[#f4b500] text-black border-[#f4b500]" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Season Filter */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">Season</h4>
                  <ChevronDown size={18} />
                </div>
                <div className="space-y-2">
                  {seasons.map((season) => (
                    <div key={season} className="flex items-center">
                      <input
                        id={`mobile-season-${season}`}
                        type="checkbox"
                        checked={selectedSeasons.includes(season)}
                        onChange={() => toggleFilter(season, "season")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`mobile-season-${season}`} className="ml-3 text-sm text-gray-600">
                        {season}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designer Filter */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">Designer</h4>
                  <ChevronDown size={18} />
                </div>
                <div className="space-y-2">
                  {designers.map((designer) => (
                    <div key={designer} className="flex items-center">
                      <input
                        id={`mobile-designer-${designer}`}
                        type="checkbox"
                        checked={selectedDesigners.includes(designer)}
                        onChange={() => toggleFilter(designer, "designer")}
                        className="h-4 w-4 rounded border-gray-300 text-[#f4b500] focus:ring-[#f4b500]"
                      />
                      <label htmlFor={`mobile-designer-${designer}`} className="ml-3 text-sm text-gray-600">
                        {designer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold py-3 rounded-full"
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LuxuryFooter />
    </div>
  );
};

export default CollectionsPage;