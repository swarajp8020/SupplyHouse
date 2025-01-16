import React from "react";
import customerSupportImage from "../assets/supply.png";

const Questions = () => {
  return (
    <div className="bg-[#fde5e5] text-black text-center p-4 rounded-md shadow-md">
      {/* Circular Image */}
      <img
        src={customerSupportImage}
        alt="Customer Support"
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      {/* Heading */}
      <h2 className="text-xl font-bold">Questions?</h2>
      {/* Description */}
      <p className="mt-2">
        Our Customer Support will be opening late today. We apologize for any
        inconvenience.
      </p>
    </div>
  );
};

export default Questions;
