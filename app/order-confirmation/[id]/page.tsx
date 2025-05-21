"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import orderService from "@/utils/orderService";
import { CheckCircle, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";

interface OrderDetails {
  _id: string;
  customer: {
    name: string;
    email: string;
  };
  totals: {
    total: number;
  };
  status: string;
  createdAt: string;
  items: Array<{
    image: string;
    name: string;
    quantity: number;
  }>;
}

export default function OrderConfirmation({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!token) {
          router.push("/login");
          return;
        }

        const data = await orderService.getOrderDetails(params.id, token);
        setOrder(data.order);
      } catch (err: any) {
        if (err.response?.status === 401) {
          logout();
          router.push("/login");
          return;
        }
        setError(err.response?.data?.message || "Failed to load order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [params.id, token, router, logout]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white flex items-center justify-center">
        <div className="text-center">
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-white flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error || "Order not found"}</p>
          <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase, {order.customer.name}!
          </p>
          <p className="text-gray-600">
            Your order #{order._id} has been received and is being processed.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delivery Information</h3>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  <Truck size={20} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-medium capitalize">{order.status}</p>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Total:</span>
                  <span className="font-medium">Ksh {order.totals.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/orders"
            className="inline-block px-6 py-3 bg-[#82cee4] hover:bg-[#62aee4] text-black font-bold rounded-full transition-colors mr-4"
          >
            View My Orders
          </Link>
          <Link
            href="/collections"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}