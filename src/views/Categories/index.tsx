import React from "react";
import Categories from "./Categories";

const Index = () => {
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  );
};

export default Index;

const Hero = () => {
  return <div className="pl-8 pr-36 py-12 bg-slate-100">
    <span className="text-sm text-gray-500 mb-12">{'Home > Categories'}</span>
    <h1 className="text-6xl font-bold mb-4">Everything you want to cook, right here</h1>
    <p className="text-lg mb-4">Simple recipes sorted into groups so you can find what you feel like cooking. Good food that makes you want to get into the kitchen and start making something tasty.</p>
    <p className="text-lg">resule XXXXXX</p>
  </div>;
};
