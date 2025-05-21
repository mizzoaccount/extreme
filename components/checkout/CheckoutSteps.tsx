import { motion } from "framer-motion";

type CheckoutStep = "shipping" | "payment" | "review";

interface CheckoutStepsProps {
  activeStep: CheckoutStep;
  setActiveStep: (step: CheckoutStep) => void;
}

export const CheckoutSteps = ({ activeStep, setActiveStep }: CheckoutStepsProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="flex items-center">
            {["shipping", "payment", "review"].map((step, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => setActiveStep(step as CheckoutStep)}
                  className={`flex flex-col items-center ${
                    activeStep === step ? "text-[#82cee4]" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      activeStep === step
                        ? "bg-[#82cee4] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium capitalize">{step}</span>
                </button>
                {index < 2 && <div className="w-16 h-px bg-gray-200 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};