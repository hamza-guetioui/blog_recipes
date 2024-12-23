import { client } from "@/sanity/lib/client";
import { Collection } from "@/types/collection";
import React from "react";

const getCollection = async (slug: string): Promise<Collection> => {
  const COLLECTION_QUERY = `*[_type == "collection" && slug.current == "${slug}"] {
    _id,
    name,
    title,
    slug,
    description,
  }`;
  const response = await client.fetch(COLLECTION_QUERY);
  return response[0];
};

const Index = async ({ slug }: { slug: string }) => {
  const collection: Collection = await getCollection(slug);
  
  return (
    <main>
      <Hero
        name={collection.name}
        title={collection.title}
        description={collection.description}
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
