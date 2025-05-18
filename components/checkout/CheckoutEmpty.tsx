import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export const CheckoutEmpty = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="py-20"
  >
    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
      <ShoppingBag size={40} className="text-gray-400" />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
    <p className="text-gray-600 mb-8">
      You need to add items to your cart before proceeding to checkout
    </p>
    <Link
      href="/collections"
      className="inline-block px-6 py-3 bg-[#82cee4] hover:bg-[#62aee4] text-black font-bold rounded-full transition-colors"
    >
      Continue Shopping
    </Link>
  </motion.div>
);