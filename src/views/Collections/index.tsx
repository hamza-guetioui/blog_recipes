import React from "react";
import Collections from "./Collections";
import PrintContent from "./PrintContent";

const Index = () => {
  return (
    <main>
      <Hero />
      <Collections />
    </main>
  );
};

export default Index;

const Hero = () => {
  const heroContent =
    "<h1>Welcome to the Hero Section</h1><p>This is a description in the hero section.</p>";

  return (
    <div className="pl-8 pr-36 py-12 bg-slate-100">
      <span className="text-sm text-gray-500 mb-12">{"Home > Categories"}</span>
      <h1 className="text-6xl font-bold mb-4">Good food for any time</h1>
      <p className="text-lg mb-4">
        {
          "Here's a tasty collection of recipes that work in real kitchens. Simple cooking that makes your home smell good and brings everyone to the table."
        }
      </p>
      <p className="text-lg">resule XXXXXX</p>
      <PrintContent content={heroContent} />
    </div>
  );
};
