import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import { Collection } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";

const COLLECTIONS_QUERY = `*[_type == "collection"] {
    _id ,
    name,
    title,
    slug,
    description,
    image
            }`;

const getCollections = async (): Promise<Collection[]> => {
  const response = await client.fetch(COLLECTIONS_QUERY);
  return response;
};
const Collections = async () => {
  const collections: Collection[] = await getCollections();

  return (
    <div className="flex flex-wrap gap-4 py-8 px-4 justify-center items-center">
      {collections.map((collection) => (
        <Link
          href={
            collection.slug?.current
              ? `/collections/${collection.slug?.current}`
              : "#"
          }
          key={collection._id}
        >
          <div className="w-48 h-48 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={urlFor(collection.image).width(200).url()}
              width={1000}
              height={1000}
              alt={collection.name}
              className="object-cover w-full h-full"
            />
          </div>

          <h6 className="text-center text-lg font-semibold mt-2">
            {collection.name}
          </h6>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
