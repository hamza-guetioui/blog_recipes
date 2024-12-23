import React from "react";
import CollectionDetails from "@/views/Collections/CollectionDetails";
import { client } from "@/sanity/lib/client";
import { Collection } from "@/types/collection";

const POSTS_QUERY = `*[_type == "collection"] {slug}`;

export async function generateStaticParams() {
  const collections: Collection[] = await client.fetch(POSTS_QUERY);

  return collections.map((collection) => ({
    slug: collection?.slug?.current,
  }));
}

const page = async ({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) => {
  const slug = (await params).collectionId;

  return (
    <div>
      <CollectionDetails slug={slug} />
    </div>
  );
};

export default page;
