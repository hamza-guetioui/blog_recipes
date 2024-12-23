import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const index = () => {
  return (
    <header className="flex justify-between items-center py-4 px-2">
      <Logo />
      <Navigation />
    </header>
  );
};

export default index;
