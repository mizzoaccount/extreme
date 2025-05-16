import { motion } from "framer-motion";

interface PaymentMethodsProps {
  methods: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
  }>;
  selected: string;
  onSelect: (id: string) => void;
  showForm: boolean;
}

export const PaymentMethods = ({ methods, selected, onSelect, showForm }: PaymentMethodsProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
    
    <div className="space-y-4">
      {methods.map((method) => (
        <div
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            selected === method.id
              ? "border-[#82cee4] bg-[#82cee4]/10"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white rounded-full shadow-sm">
              {method.icon}
            </div>
            <h4 className="font-medium text-gray-900">{method.name}</h4>
          </div>
        </div>
      ))}
    </div>

    {showForm && (
      <PaymentForm />
    )}
  </motion.div>
);