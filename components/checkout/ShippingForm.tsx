import { motion } from "framer-motion";
import { ShippingInfo } from "@/types/checkout";
import { DeliveryOptions } from "./DeliveryOptions";

interface ShippingFormProps {
  shippingInfo: ShippingInfo;
  setShippingInfo: (info: Partial<ShippingInfo>) => void;
  deliveryMethod: string;
  setDeliveryMethod: (method: string) => void;
  deliveryOptions: Array<{
    id: string;
    name: string;
    price: number;
    time: string;
    icon: React.ReactNode;
  }>;
}

export const ShippingForm = ({
  shippingInfo,
  setShippingInfo,
  deliveryMethod,
  setDeliveryMethod,
  deliveryOptions,
}: ShippingFormProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
    
    {/* Form fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          required
          value={shippingInfo.firstName}
          onChange={(e) => setShippingInfo({ firstName: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82cee4] focus:border-[#82cee4] transition-all"
        />
      </div>
      {/* More form fields... */}
    </div>

    <DeliveryOptions 
      options={deliveryOptions}
      selected={deliveryMethod}
      onSelect={setDeliveryMethod}
    />
  </motion.div>
);