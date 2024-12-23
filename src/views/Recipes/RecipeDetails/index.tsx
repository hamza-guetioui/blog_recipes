import { client } from "@/sanity/lib/client";
import { Recipe } from "@/types/Recipe";
import React from "react";

const getRecipe = async (slug: string): Promise<Recipe> => {
  const RECIPE_QUERY = `*[_type == "recipe" && slug.current == "${slug}"] {
    _id,
    name,
    title,
    slug,
    description,
  }`;
  const response = await client.fetch(RECIPE_QUERY);
  return response[0];
};

const Index = async ({ slug }: { slug: string }) => {
  const recipe: Recipe = await getRecipe(slug);
  
  return (
    <main>
      <Hero
        name={recipe.name}
        title={recipe.title}
        description={recipe.description}
      />
    </main>
  );
};

export default Index;

type HeroProps = {
  name: string;
  title: string;
  description: string;
};
const Hero = ({ name, title, description }: HeroProps) => {
  return (
    <div className="pl-8 pr-36 py-12 bg-slate-100">
      <span className="text-sm text-gray-500 mb-16">{`Home > Collection > ${name}`}</span>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-lg">resule XXXXXX</p>
    </div>
  );
};
