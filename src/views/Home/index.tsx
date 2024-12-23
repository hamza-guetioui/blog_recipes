import React from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import TrendingRecipes from "./TrendingRecipes";
import TheNewestRecipes from "./TheNewestRecipes";
import WaffTopPicks from "./WaffTopPicks";
import Categories from "./Categories";
import Brands from "./Brands";

const index = () => {
  return (
    <main>
      <Hero />
      <Collections/>
      <TrendingRecipes/>
      <TheNewestRecipes/>
      <WaffTopPicks/>
      <Categories/>
      <Brands/>
    </main>
  );
};

export default index;
