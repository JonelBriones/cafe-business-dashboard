import React from "react";

const PaymentOptions = ({ paymentMethod, setPaymentMethod }: any) => {
  const paymentMethods = ["Cash", "Card", "Online"];

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
      <span className="font-semibold">Payment Method</span>
      <div className="flex justify-center gap-2">
        {paymentMethods.map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`py-1 px-2 flex-1 border-2 rounded-lg cursor-pointer ${
              paymentMethod == method
                ? "border-green-500"
                : "border-neutral-200"
            } transition-colors duration-100 ease-in-out`}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
