/*"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, ShoppingBag, Heart, CreditCard, Settings, LogOut, Plus, Edit, Trash } from "lucide-react";
import NavbarTwo from "@/components/HeaderTwo";
import LuxuryFooter from "@/components/LuxuryFooter";

// Dummy user data
const currentUser = {
  id: 1,
  name: "Alexandra Smith",
  email: "alexandra@example.com",
  role: "admin", // 'admin' or 'customer'
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  joinedDate: "January 2023",
  shippingAddress: {
    street: "123 Fashion Avenue",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States"
  },
  billingAddress: {
    street: "123 Fashion Avenue",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States"
  }
};

// Dummy orders data
const orders = [
  {
    id: "#ORD-78901",
    date: "2023-10-15",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "Silk Evening Gown",
        designer: "Valentino",
        price: 1299,
        image: "https://i.pinimg.com/736x/97/82/56/978256ac60bc5ed25e6dfeda175bd14d.jpg",
        quantity: 1
      }
    ],
    total: 1299,
    trackingNumber: "UPS123456789"
  },
  {
    id: "#ORD-78902",
    date: "2023-09-28",
    status: "Shipped",
    items: [
      {
        id: 2,
        name: "Leather Trench Coat",
        designer: "Balenciaga",
        price: 2499,
        image: "https://i.pinimg.com/736x/77/ea/a2/77eaa2802affc0b41489388e2d2bdc2e.jpg",
        quantity: 1
      },
      {
        id: 7,
        name: "Silk Camisole Top",
        designer: "Versace",
        price: 499,
        image: "https://i.pinimg.com/736x/8e/3e/6a/8e3e6a6c8a1a9b1e8e3e6a6c8a1a9b1e.jpg",
        quantity: 2
      }
    ],
    total: 3497,
    trackingNumber: "FEDEX987654321"
  }
];

// Dummy users data (for admin)
const users = [
  {
    id: 1,
    name: "Alexandra Smith",
    email: "alexandra@example.com",
    role: "admin",
    joined: "2023-01-15",
    orders: 12
  },
  {
    id: 2,
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "customer",
    joined: "2023-02-20",
    orders: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "customer",
    joined: "2023-03-10",
    orders: 8
  }
];

// Dummy products data (for admin)
const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    designer: "Valentino",
    price: 1299,
    stock: 15,
    category: "Dresses"
  },
  {
    id: 2,
    name: "Leather Trench Coat",
    designer: "Balenciaga",
    price: 2499,
    stock: 8,
    category: "Outerwear"
  },
  {
    id: 3,
    name: "Cashmere Blazer",
    designer: "Saint Laurent",
    price: 899,
    stock: 12,
    category: "Suits"
  }
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    shippingStreet: currentUser.shippingAddress.street,
    shippingCity: currentUser.shippingAddress.city,
    shippingState: currentUser.shippingAddress.state,
    shippingZip: currentUser.shippingAddress.zip,
    shippingCountry: currentUser.shippingAddress.country,
    billingStreet: currentUser.billingAddress.street,
    billingCity: currentUser.billingAddress.city,
    billingState: currentUser.billingAddress.state,
    billingZip: currentUser.billingAddress.zip,
    billingCountry: currentUser.billingAddress.country
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would save the data to your backend here
  };

  const handleEditProduct = (productId: number) => {
    // Handle product edit
    console.log("Editing product:", productId);
  };

  const handleDeleteProduct = (productId: number) => {
    // Handle product delete
    console.log("Deleting product:", productId);
  };

  const handleEditUser = (userId: number) => {
    // Handle user edit
    console.log("Editing user:", userId);
  };

  const handleDeleteUser = (userId: number) => {
    // Handle user delete
    console.log("Deleting user:", userId);
  };

  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />
      
      {/* Main Content *
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Profile Header *
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#f4b500]"
              />
              <button className="absolute bottom-0 right-0 bg-[#f4b500] p-2 rounded-full hover:bg-[#d4a017] transition-colors">
                <Edit size={16} className="text-black" />
              </button>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{currentUser.name}</h1>
              <p className="text-gray-600 mb-1">{currentUser.email}</p>
              <p className="text-gray-500 text-sm">Member since {currentUser.joinedDate}</p>
              {currentUser.role === "admin" && (
                <span className="inline-block mt-2 px-3 py-1 bg-[#f4b500] text-black text-xs font-bold rounded-full">
                  ADMIN
                </span>
              )}
            </div>
          </div>
        </motion.section>

        {/* Navigation Tabs *
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 border-b border-gray-200"
        >
          <nav className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("profile")}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === "profile" ? "border-[#f4b500] text-[#f4b500]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                Profile
              </div>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === "orders" ? "border-[#f4b500] text-[#f4b500]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            >
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} />
                Orders
              </div>
            </button>
            {currentUser.role === "admin" && (
              <>
                <button
                  onClick={() => setActiveTab("users")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === "users" ? "border-[#f4b500] text-[#f4b500]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    Users
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("products")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === "products" ? "border-[#f4b500] text-[#f4b500]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                >
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={18} />
                    Products
                  </div>
                </button>
              </>
            )}
          </nav>
        </motion.div>

        {/* Tab Content *
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
        >
          {/* Profile Tab *
          {activeTab === "profile" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors"
                  >
                    <Edit size={16} /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {!isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-gray-900">{currentUser.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="text-gray-900">{currentUser.email}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Addresses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <ShoppingBag size={16} /> Shipping Address
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {currentUser.shippingAddress.street}<br />
                          {currentUser.shippingAddress.city}, {currentUser.shippingAddress.state} {currentUser.shippingAddress.zip}<br />
                          {currentUser.shippingAddress.country}
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <CreditCard size={16} /> Billing Address
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {currentUser.billingAddress.street}<br />
                          {currentUser.billingAddress.city}, {currentUser.billingAddress.state} {currentUser.billingAddress.zip}<br />
                          {currentUser.billingAddress.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f4b500] focus:border-[#f4b500]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f4b500] focus:border-[#f4b500]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Addresses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <ShoppingBag size={16} /> Shipping Address
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <label htmlFor="shippingStreet" className="block text-xs font-medium text-gray-500 mb-1">
                              Street
                            </label>
                            <input
                              type="text"
                              id="shippingStreet"
                              name="shippingStreet"
                              value={formData.shippingStreet}
                              onChange={handleInputChange}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="shippingCity" className="block text-xs font-medium text-gray-500 mb-1">
                                City
                              </label>
                              <input
                                type="text"
                                id="shippingCity"
                                name="shippingCity"
                                value={formData.shippingCity}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="shippingState" className="block text-xs font-medium text-gray-500 mb-1">
                                State
                              </label>
                              <input
                                type="text"
                                id="shippingState"
                                name="shippingState"
                                value={formData.shippingState}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="shippingZip" className="block text-xs font-medium text-gray-500 mb-1">
                                ZIP Code
                              </label>
                              <input
                                type="text"
                                id="shippingZip"
                                name="shippingZip"
                                value={formData.shippingZip}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="shippingCountry" className="block text-xs font-medium text-gray-500 mb-1">
                                Country
                              </label>
                              <input
                                type="text"
                                id="shippingCountry"
                                name="shippingCountry"
                                value={formData.shippingCountry}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <CreditCard size={16} /> Billing Address
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <label htmlFor="billingStreet" className="block text-xs font-medium text-gray-500 mb-1">
                              Street
                            </label>
                            <input
                              type="text"
                              id="billingStreet"
                              name="billingStreet"
                              value={formData.billingStreet}
                              onChange={handleInputChange}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="billingCity" className="block text-xs font-medium text-gray-500 mb-1">
                                City
                              </label>
                              <input
                                type="text"
                                id="billingCity"
                                name="billingCity"
                                value={formData.billingCity}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="billingState" className="block text-xs font-medium text-gray-500 mb-1">
                                State
                              </label>
                              <input
                                type="text"
                                id="billingState"
                                name="billingState"
                                value={formData.billingState}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="billingZip" className="block text-xs font-medium text-gray-500 mb-1">
                                ZIP Code
                              </label>
                              <input
                                type="text"
                                id="billingZip"
                                name="billingZip"
                                value={formData.billingZip}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="billingCountry" className="block text-xs font-medium text-gray-500 mb-1">
                                Country
                              </label>
                              <input
                                type="text"
                                id="billingCountry"
                                name="billingCountry"
                                value={formData.billingCountry}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-[#f4b500] focus:border-[#f4b500]"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Orders Tab *
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h2>
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Delivered" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.designer}</p>
                                <p className="text-sm text-gray-900">${item.price.toLocaleString()} x {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">Tracking number</p>
                            <p className="font-medium text-gray-900">{order.trackingNumber}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-bold text-gray-900">${order.total.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                  <p className="text-gray-500 mb-6">Your orders will appear here once you make a purchase</p>
                  <button className="px-6 py-3 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors">
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Users Tab (Admin Only) *
          {activeTab === "users" && currentUser.role === "admin" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors">
                  <Plus size={16} /> Add User
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Joined
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Orders
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <User size={20} className="text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.role === "admin" 
                              ? "bg-[#f4b500] text-black" 
                              : "bg-gray-200 text-gray-800"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.orders}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEditUser(user.id)}
                              className="text-[#f4b500] hover:text-[#d4a017] p-1 rounded-full hover:bg-[#f4b500]/10"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-500/10"
                            >
                              <Trash size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Products Tab (Admin Only) *
          {activeTab === "products" && currentUser.role === "admin" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors">
                  <Plus size={16} /> Add Product
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Designer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.designer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEditProduct(product.id)}
                              className="text-[#f4b500] hover:text-[#d4a017] p-1 rounded-full hover:bg-[#f4b500]/10"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-500/10"
                            >
                              <Trash size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </main>
      <LuxuryFooter />
    </div>
  );
};

export default ProfilePage;*/

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, ShoppingBag, Heart, CreditCard, Settings, LogOut, Plus, Edit, Trash } from "lucide-react";
import NavbarTwo from "@/components/HeaderTwo";
import LuxuryFooter from "@/components/LuxuryFooter";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { ProfileInfoSection } from "@/components/profile/ProfileInfoSection";
import { ProfileEditForm } from "@/components/profile/ProfileEditForm";
import { OrderList } from "@/components/profile/OrderList";
import { AdminTable } from "@/components/profile/AdminTable";

// Dummy data imports (could be moved to separate files)
import { currentUser, orders, users, products } from "@/data/profileData";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    shippingStreet: currentUser.shippingAddress.street,
    shippingCity: currentUser.shippingAddress.city,
    shippingState: currentUser.shippingAddress.state,
    shippingZip: currentUser.shippingAddress.zip,
    shippingCountry: currentUser.shippingAddress.country,
    billingStreet: currentUser.billingAddress.street,
    billingCity: currentUser.billingAddress.city,
    billingState: currentUser.billingAddress.state,
    billingZip: currentUser.billingAddress.zip,
    billingCountry: currentUser.billingAddress.country,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would save the data to your backend here
  };

  const handleEditProduct = (productId: number) => {
    console.log("Editing product:", productId);
  };

  const handleDeleteProduct = (productId: number) => {
    console.log("Deleting product:", productId);
  };

  const handleEditUser = (userId: number) => {
    console.log("Editing user:", userId);
  };

  const handleDeleteUser = (userId: number) => {
    console.log("Deleting user:", userId);
  };

  const handleStartShopping = () => {
    console.log("Start shopping clicked");
    // Navigation logic would go here
  };

  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  const handleAddUser = () => {
    console.log("Add user clicked");
  };

  const handleAddProduct = () => {
    console.log("Add product clicked");
  };

  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProfileHeader
          name={currentUser.name}
          email={currentUser.email}
          avatar={currentUser.avatar}
          joinedDate={currentUser.joinedDate}
          role={currentUser.role}
          onEditAvatar={handleEditAvatar}
        />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isAdmin={currentUser.role === "admin"}
        />

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
        >
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors"
                  >
                    <Edit size={16} /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-[#f4b500] hover:bg-[#d4a017] text-black font-bold rounded-full transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {!isEditing ? (
                <ProfileInfoSection
                  name={currentUser.name}
                  email={currentUser.email}
                  shippingAddress={currentUser.shippingAddress}
                  billingAddress={currentUser.billingAddress}
                />
              ) : (
                <ProfileEditForm
                  formData={formData}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                  onCancel={() => setIsEditing(false)}
                />
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h2>
              <OrderList orders={orders} onStartShopping={handleStartShopping} />
            </div>
          )}

          {/* Users Tab (Admin Only) */}
          {activeTab === "users" && currentUser.role === "admin" && (
            <AdminTable
              title="User Management"
              columns={[
                {
                  key: "name",
                  label: "Name",
                  render: (name: string) => (
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={20} className="text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{name}</div>
                      </div>
                    </div>
                  ),
                },
                { key: "email", label: "Email" },
                {
                  key: "role",
                  label: "Role",
                  render: (role: string) => (
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        role === "admin"
                          ? "bg-[#f4b500] text-black"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {role}
                    </span>
                  ),
                },
                { key: "joined", label: "Joined" },
                { key: "orders", label: "Orders" },
              ]}
              data={users}
              onAdd={handleAddUser}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          )}

          {/* Products Tab (Admin Only) */}
          {activeTab === "products" && currentUser.role === "admin" && (
            <AdminTable
              title="Product Management"
              columns={[
                { key: "name", label: "Product" },
                { key: "designer", label: "Designer" },
                {
                  key: "category",
                  label: "Category",
                  render: (category: string) => (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                      {category}
                    </span>
                  ),
                },
                {
                  key: "price",
                  label: "Price",
                  render: (price: number) => `$${price.toLocaleString()}`,
                },
                { key: "stock", label: "Stock" },
              ]}
              data={products}
              onAdd={handleAddProduct}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}
        </motion.div>
      </main>
      <LuxuryFooter />
    </div>
  );
};

export default ProfilePage;