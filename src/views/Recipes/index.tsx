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
        From quick meals to full dinners
      </h1>
      <p className="text-lg mb-4">
        {
          "Every recipe we have, ready for your kitchen to try. Good food that's been tested and loved by home cooks like you."
        }
      </p>
      <p className="text-lg">resule XXXXXX</p>
    </div>
  );
};
