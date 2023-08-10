import React from "react";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-auto w-full">
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;
