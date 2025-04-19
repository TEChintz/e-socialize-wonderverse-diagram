
import React from "react";
import ESocializeDiagram from "@/components/ESocializeDiagram";

const Index = () => {
  return (
    <div className="w-full h-screen bg-[#1A1F2C] overflow-hidden">
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          E-Socialize Wonderverse
        </h1>
        <p className="text-[#D6BCFA] text-sm md:text-base text-center mb-8">
          A visual representation of the E-Socialize philosophy and process
        </p>
        
        <div className="flex-1 w-full max-h-[80vh] relative">
          <ESocializeDiagram />
        </div>
      </div>
    </div>
  );
};

export default Index;
