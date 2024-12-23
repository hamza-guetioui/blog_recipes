import React from "react";
import CategoryDetails from "@/views/Categories/CategoryDetails";

import { client } from "@/sanity/lib/client";
import { Category } from "@/types/category";

const CATEGORIES_QUERY = `*[_type == "categories"] {slug}`;

export async function generateStaticParams() {
  const categories: Category[] = await client.fetch(CATEGORIES_QUERY);

  return categories.map((category) => ({
    slug: category?.slug?.current,
  }));
}

const page = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const slug = (await params).categoryId;
  

  return  <CategoryDetails slug={slug} />;
};

export default page;
