import { CartItem } from "@/types/cart";

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: () => number;
  deliveryMethod?: string;
  deliveryOptions?: Array<{
    id: string;
    name: string;
    price: number;
  }>;
  sticky?: boolean;
}

export const OrderSummary = ({
  items,
  totalPrice,
  deliveryMethod,
  deliveryOptions = [],
  sticky = false,
}: OrderSummaryProps) => (
  <div className={`bg-gray-50 p-6 rounded-xl border border-gray-200 ${sticky ? 'sticky top-24' : ''}`}>
    <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
    {/* Items list */}
    <div className="space-y-4">
      {items.map((item) => (
        <div key={`${item.id}-${item.size}`} className="flex justify-between">
          {/* Item details... */}
        </div>
      ))}
    </div>
    
    {/* Totals */}
    <div className="border-t border-gray-200 my-6"></div>
    <div className="space-y-3">
      {/* Subtotal, shipping, tax, etc. */}
    </div>
  </div>
);