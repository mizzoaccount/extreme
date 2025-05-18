import { ArrowRight, Check } from "lucide-react";

interface CheckoutStepsProps {
  activeStep: "shipping" | "payment" | "review";
  setActiveStep: (step: "shipping" | "payment" | "review") => void;
  handlePlaceOrder?: () => void;
  canProceed: boolean;
  isLastStep: boolean;
}

export const CheckoutSteps = ({
  activeStep,
  setActiveStep,
  handlePlaceOrder,
  canProceed,
  isLastStep,
}: CheckoutStepsProps) => (
  <div className="pt-6 flex justify-between">
    <button
      type="button"
      onClick={() => setActiveStep(isLastStep ? "payment" : "shipping")}
      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
    >
      Back
    </button>
    <button
      type={isLastStep ? "button" : "submit"}
      onClick={isLastStep ? handlePlaceOrder : undefined}
      disabled={!canProceed}
      className="px-6 py-3 bg-[#82cee4] hover:bg-[#62aee4] text-black font-bold rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLastStep ? "Place Order" : "Continue"} {isLastStep ? <Check size={18} /> : <ArrowRight size={18} />}
    </button>
  </div>
);