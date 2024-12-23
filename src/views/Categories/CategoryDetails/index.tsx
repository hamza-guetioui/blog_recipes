import { client } from "@/sanity/lib/client";
import { Category } from "@/types/category";
import React from "react";

const getCategory = async (slug: string): Promise<Category> => {
  const CATEGORY_QUERY = `*[_type == "category" && slug.current == "${slug}"] {
    _id,
    name,
    title,
    slug,
    description,
  }`;
  const response = await client.fetch(CATEGORY_QUERY);
  return response[0];
};

const Index = async ({ slug }: { slug: string }) => {
  const category: Category = await getCategory(slug);

  return (
    <main>
      <Hero
        name={category.name}
        title={category.title}
        description={category.description}
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
      <span className="text-sm text-gray-500 mb-16">{`Home > Categories > ${name}`}</span>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-lg">resule XXXXXX</p>
    </div>
  );
};
