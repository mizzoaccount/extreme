interface DeliveryOptionsProps {
  options: Array<{
    id: string;
    name: string;
    price: number;
    time: string;
    icon: React.ReactNode;
  }>;
  selected: string;
  onSelect: (id: string) => void;
}

export const DeliveryOptions = ({ options, selected, onSelect }: DeliveryOptionsProps) => (
  <div className="pt-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Method</h3>
    <div className="space-y-4">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`p-4 border rounded-lg cursor-pointer transition-all ${
            selected === option.id
              ? "border-[#82cee4] bg-[#82cee4]/10"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-full shadow-sm">
                {option.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{option.name}</h4>
                <p className="text-sm text-gray-500">{option.time}</p>
              </div>
            </div>
            <span className="font-medium">
              {option.price === 0 ? "Free" : `$${option.price}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);