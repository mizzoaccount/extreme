/*"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Edit } from "lucide-react";
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
import { ProductModal } from "@/components/profile/ProductModal";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
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
    setIsProductModalOpen(true);
  };

  const handleProductAdded = (newProduct: any) => {
    // In a real app, you would send this to your backend
    console.log("New product added:", newProduct);
    // For demo purposes, we'll just log it
  };
  
  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />

      {/* Main Content *
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

          {/* Orders Tab *
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h2>
              <OrderList orders={orders} onStartShopping={handleStartShopping} />
            </div>
          )}

          {/* Users Tab (Admin Only) *
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

          {/* Products Tab (Admin Only) *
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
      <ProductModal
          isOpen={isProductModalOpen}
          onClose={() => setIsProductModalOpen(false)}
          onAddProduct={handleProductAdded}
        />
      <LuxuryFooter />
    </div>
  );
};

export default ProfilePage;*/

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Edit } from "lucide-react";
import NavbarTwo from "@/components/HeaderTwo";
import LuxuryFooter from "@/components/LuxuryFooter";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { ProfileInfoSection } from "@/components/profile/ProfileInfoSection";
import { ProfileEditForm } from "@/components/profile/ProfileEditForm";
import { OrderList } from "@/components/profile/OrderList";
import { AdminTable } from "@/components/profile/AdminTable";
import { currentUser, orders, users } from "@/data/profileData";
import { ProductModal } from "@/components/profile/ProductModal";
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

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
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

  const { products, loading, error } = useProducts();

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
  };

  const handleEditProduct = (productId: string) => {
    console.log("Editing product:", productId);
    // Implement edit functionality here
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      
      // Refresh products after deletion
      const { products } = await response.json();
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditUser = (userId: number) => {
    console.log("Editing user:", userId);
  };

  const handleDeleteUser = (userId: number) => {
    console.log("Deleting user:", userId);
  };

  const handleStartShopping = () => {
    console.log("Start shopping clicked");
  };

  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  const handleAddUser = () => {
    console.log("Add user clicked");
  };

  const handleAddProduct = () => {
    setIsProductModalOpen(true);
  };

  const handleProductAdded = (newProduct: any) => {
    console.log("New product added:", newProduct);
  };

  // Format products for the AdminTable
  const formattedProducts = products.map((product: Product) => ({
    id: product._id,
    name: product.name,
    designer: product.designer,
   // category: `${product.category.main} / ${product.category.sub} / ${product.category.brand}`,
    category: `${product.category.main}`,
    price: product.price,
    stock: product.stock,
    rawData: product,
  }));

  return (
    <div className="bg-white min-h-screen">
      <NavbarTwo />

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
        >
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

          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h2>
              <OrderList orders={orders} onStartShopping={handleStartShopping} />
            </div>
          )}

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
                  render: (price: number) => `Ksh ${price.toFixed(2)}`,
                },
                { key: "stock", label: "Stock" },
              ]}
              data={formattedProducts}
              loading={loading}
              error={error}
              onAdd={handleAddProduct}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}
        </motion.div>
      </main>

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddProduct={handleProductAdded}
      />

      <LuxuryFooter />
    </div>
  );
};

export default ProfilePage;