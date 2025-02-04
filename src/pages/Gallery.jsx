import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity.js";

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const query = `*[_type == "gallery"] | order(date desc) {
          _id,
          title,
          description,
          date,
          "imageUrl": image.asset->url
        }`;

        const result = await client.fetch(query);
        setGalleryItems(result);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <div className="loading">Loading gallery...</div>;

  return (
    <div className="content-container">
      <h2 className="page-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item._id} className="gallery-item">
            <img
              src={urlFor(item.imageUrl).width(600).height(400).url()}
              alt={item.title || "Gallery image"}
              className="gallery-image"
            />
            <div className="image-info">
              {item.title && <h3>{item.title}</h3>}
              {item.description && <p>{item.description}</p>}
              {item.date && (
                <p className="date">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
