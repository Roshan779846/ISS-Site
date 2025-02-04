// src/sanityClient.js
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // This will be 2e0h1wt8
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-02-01", // Adjust the API version as needed
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
