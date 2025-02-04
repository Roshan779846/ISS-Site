// // src/pages/Home.js
// import React from "react";

// export default function Home() {
//   return (
//     <div className="content-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay">
//           <h1 className="hero__title">Welcome to ISS Club</h1>
//           <p className="hero__subtitle">
//             Connecting International Students Through Shared Experiences
//           </p>
//           <div className="pagination-dots">
//             <span className="dot active"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="about-section">
//         <div className="about-logo-container">
//           <img src="/logo.png" alt="ISS Logo" className="about-logo" />
//           <h2 className="about-tagline">
//             Bridging Cultures, Building Community
//           </h2>
//         </div>
//         <div className="about-content">
//           <p className="about-text">
//             The International Students Society (ISS) is dedicated to creating a
//             welcoming environment for students from all over the world. Through
//             cultural exchange and collaborative activities, we foster global
//             understanding and lifelong friendships.
//           </p>
//           <div className="about-images">
//             <img
//               src="/frontend/public/images/culture.png"
//               alt="Cultural Event"
//             />
//             <img
//               src="/frontend/public/images/group.png"
//               alt="Group Discussion"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className="events-section">
//         <h2 className="section-title">Upcoming Events</h2>
//         <div className="event-cards">
//           <div className="event-card">
//             <h3>Cultural Fair 2024</h3>
//             <p className="event-date">March 15 | 4:00 PM | Student Union</p>
//             <p>Experience world cultures through food, music, and art</p>
//             <button className="rsvp-btn">RSVP Now</button>
//           </div>
//           {/* Repeat similar event cards */}
//         </div>
//         <a href="/events" className="see-all">
//           See All Events →
//         </a>
//       </section>

//       {/* Gallery Section */}
//       <section className="gallery-section">
//         <h2 className="section-title">Our Moments</h2>
//         <div className="gallery-grid">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="gallery-item">
//               <img src={`/gallery${i + 1}.jpg`} alt={`Event ${i + 1}`} />
//             </div>
//           ))}
//         </div>
//         <button className="view-all">View All Photos</button>
//       </section>

//       {/* Newsletter Section */}
//       <section className="newsletter-section">
//         <div className="newsletter-content">
//           <h2>Stay Updated</h2>
//           <p>Subscribe to our newsletter for event updates and news</p>
//           <form className="newsletter-form">
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
// src/pages/Home.js
import React from "react";
import "./Home.css"; // Make sure to create this CSS file

export default function Home() {
  return (
    <div className="content-container">
      {/* Hero Section with Poster Image */}
      <section className="hero">
        <div className="hero-poster">
          <div className="hero-overlay">
            <h1 className="hero__title">Welcome to ISS Club</h1>
            <p className="hero__subtitle">
              Connecting International Students Through Shared Experiences
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-logo-container">
          <img
            src="/logo.png" // Update path
            alt="ISS Logo"
            className="about-logo"
          />
          <h2 className="about-tagline">
            Bridging Cultures, Building Community
          </h2>
        </div>
        <div className="about-content">
          <p className="about-text">
            The International Students Society (ISS) is dedicated to creating a
            welcoming environment for students from all over the world. Through
            cultural exchange and collaborative activities, we foster global
            understanding and lifelong friendships.
          </p>
          <div className="about-images">
            <img
              src="/culture.png" // Corrected path
              alt="Cultural Event"
              className="about-image"
            />
            <img
              src="/group.png" // Corrected path
              alt="Group Discussion"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <h3>Cultural Fair 2024</h3>
            <p className="event-date">March 15 | 4:00 PM | Student Union</p>
            <p>Experience world cultures through food, music, and art</p>
            <button className="rsvp-btn">RSVP Now</button>
          </div>
          {/* Add more event cards here */}
        </div>
        <a href="/events" className="see-all">
          See All Events →
        </a>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">Our Moments</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="gallery-item">
              <img
                src={`/images/gallery${num}.jpg`} // Corrected path
                alt={`Event ${num}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
        <button className="view-all">View All Photos</button>
      </section>
    </div>
  );
}
