import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { Recipe } from "@/types/Recipe";
import Image from "next/image";
import Link from "next/link";

const RECIPES_QUERY = `*[_type == "recipe"] {
    _id ,
    name,
    title,
    slug,
    description,
    image
            }`;

const getRecipes = async (): Promise<Recipe[]> => {
  const response = await client.fetch(RECIPES_QUERY);
  return response;
};
const WaffTopPicks = async () => {
  const recipes: Recipe[] = await getRecipes();

  return (
    <div>
      <Header />
      <div className="grid grid-cols-6 gap-4 justify-center items-center p-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default WaffTopPicks;

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-4">
      <h1 className="font-bold text-3xl min-w-fit">Waff Top Picks</h1>
      <div className="w-full h-2 bg-gray-200 rounded-full border-3 border-dashed border-black"></div>

      <Link href={"/categories"} className="font-semibold text-xl">
        all
      </Link>
    </div>
  );
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link
      href={recipe.slug?.current ? `/recipes/${recipe.slug?.current}` : "#"}
      key={recipe._id}
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={urlFor(recipe.image).width(200).url()}
          width={480}
          height={240}
          alt={recipe.name}
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-lg font-semibold mt-2">{recipe.name}</h2>
      <p>{recipe.description.substring(0, 100) + "..."}</p>
    </Link>
  );
};
