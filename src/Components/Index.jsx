import React from "react";
import Questions from "./Questions";
import Call from "./Call";
import SpecialHours from "./SpecialHours";
const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-0 p-4">
      <div className="w-full max-w-md">
        <Questions />
      </div>
      <div className="w-full max-w-md">
        <Call />
      </div>
      <div className="w-full max-w-md">
        <SpecialHours />
      </div>
    </div>
  );
};

export default Index;
