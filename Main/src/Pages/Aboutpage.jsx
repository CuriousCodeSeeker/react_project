import React from "react";

const Aboutpage = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "24px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#222" }}>About Us</h1>
      <p style={{ fontSize: "1.2rem", color: "#444", lineHeight: 1.7 }}>
        Welcome to <b>Blogify</b>! We are passionate about sharing stories, ideas, and knowledge with the world. Our platform empowers writers and readers to connect, inspire, and grow together.
      </p>
      <h2 style={{ marginTop: "32px", color: "#333" }}>Our Mission</h2>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        To create a vibrant community where everyone can express themselves, learn from others, and discover new perspectives. We believe in the power of words to make a difference.
      </p>
      <h2 style={{ marginTop: "32px", color: "#333" }}>Meet the Team</h2>
      <ul style={{ fontSize: "1.1rem", color: "#555", paddingLeft: "20px" }}>
        <li>Warjot kaur – Founder & Developer</li>
        <li>Guest Authors – Our amazing contributors</li>
      </ul>
      <h2 style={{ marginTop: "32px", color: "#333" }}>Contact Us</h2>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Have questions or want to contribute? Email us at <a href="mailto:info@blogify.com">info@blogify.com</a> or use our contact page.
      </p>
    </div>
  );
};

export default Aboutpage;
