import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES_QUERY = `*[_type == "category"] {
    _id ,
    name,
    title,
    slug,
    description,
    image
            }`;

const getCategories = async (): Promise<Category[]> => {
  const response = await client.fetch(CATEGORIES_QUERY);
  return response;
};
const Categories = async () => {
  const categories: Category[] = await getCategories();

  return (
    <div >
    <div className="flex justify-between items-center gap-4 px-4">
      <h1 className="font-bold text-3xl">Categories</h1>
      <div className="w-full h-2 bg-gray-200 rounded-full border-3 border-dashed border-black"></div>
   
      <Link href={"/categories"} className="font-semibold text-xl">all</Link>
    </div>
    <div className="grid grid-cols-3 gap-4 justify-center items-center p-4">
      {categories.map((category) => (
        <Link
          href={
            category.slug?.current
              ? `/categories/${category.slug?.current}`
              : "#"
          }
          key={category._id}
        >
          <div className="w-full h-40 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={urlFor(category.image).width(200).url()}
              width={480}
              height={240}
              alt={category.name}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
          <p>results 23</p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Categories;
