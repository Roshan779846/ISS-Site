import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Explicit fallback for development
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || "uiggghbd";
const dataset = process.env.REACT_APP_SANITY_DATASET || "production";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-05-03",
  token: process.env.REACT_APP_SANITY_TOKEN, // Only for development!
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
