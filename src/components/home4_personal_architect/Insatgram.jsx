import React, { useEffect, useState } from "react";
import axios from "axios";

const Instagram = () => {
  const [instagramImages, setInstagramImages] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      try {
        // Replace ACCESS_TOKEN with your Instagram Graph API access token
        const accessToken = "";
        const instagramAccountId = "8712745164"; // Replace with the actual Instagram account ID

        // Fetch latest media from Instagram Graph API
        const response = await axios.get(
          `https://graph.instagram.com/${instagramAccountId}/media?fields=id,media_type,media_url,permalink&access_token=${accessToken}`
        );

        // Filter to only display images (ignore videos, carousels, etc.)
        const images = response.data.data.filter(
          (item) => item.media_type === "IMAGE"
        );

        setInstagramImages(images);
      } catch (error) {
        console.error("Error fetching Instagram photos:", error);
      }
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <section className="tc-instagram-style4">
      <div className="container">
        <div className="title mb-120">
          <h2 className="sec-title mb-30 js-splittext-lines">Instagram</h2>
          <p className="fsz-18 color-666 js-splittext-lines">
            A place where I share my look on life, inspiration, and latest
            projects.
          </p>
        </div>
        <div className="imgs">
          <div className="row gx-2">
            {instagramImages.map((image, index) => (
              <div key={image.id} className="col-lg-3">
                <a
                  href={image.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="img d-block th-300 mt-3 mt-lg-0 wow zoomIn slow"
                  data-wow-delay={`${0.2 * (index + 1)}s`}
                >
                  <img
                    src={image.media_url}
                    alt={`Instagram image ${index + 1}`}
                    className="img-cover"
                  />
                  <span className="icon">
                    <i className="lab la-instagram"></i>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
