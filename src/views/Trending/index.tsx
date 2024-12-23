import React from "react";
import Recipes from "./Recipes";

const Index = () => {
  return (
    <main>
      <Hero />
      <Recipes />
    </main>
  );
};

export default Index;

const Hero = () => {
  return (
    <div className="pl-8 pr-36 py-12 bg-slate-100">
      <span className="text-sm text-gray-500 mb-12">{"Home > Categories"}</span>
      <h1 className="text-6xl font-bold mb-4">
      Recipes people love today

      </h1>
      <p className="text-lg mb-4">
        {
          "Simple recipes people are cooking and loving right now. Fresh ideas that make dinner time something to look forward to."}
      </p>
      <p className="text-lg">resule XXXXXX</p>
    </div>
  );
};
