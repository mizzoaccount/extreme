import { ShippingInfo } from "@/types/checkout";
import { CartItem } from "@/types/cart";
import { OrderSummary } from "./OrderSummary";

interface ReviewSectionProps {
  shippingInfo: ShippingInfo;
  paymentMethod: string;
  deliveryMethod: string;
  items: CartItem[];
  totalPrice: () => number;
  deliveryOptions: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}

export const ReviewSection = ({
  shippingInfo,
  paymentMethod,
  deliveryMethod,
  items,
  totalPrice,
  deliveryOptions,
}: ReviewSectionProps) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Order</h2>
    
    {/* Shipping Info Review */}
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h3>
      {/* Shipping details... */}
    </div>

    {/* Payment Method Review */}
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
      {/* Payment details... */}
    </div>

    {/* Order Summary Review */}
    <OrderSummary 
      items={items}
      totalPrice={totalPrice}
      deliveryMethod={deliveryMethod}
      deliveryOptions={deliveryOptions}
    />
  </div>
);