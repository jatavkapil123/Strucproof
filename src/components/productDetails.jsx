import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productDetails.css";

const productData = {
  "bond-crete": {
    name: "BOND CRETE",
    description: `
BOND CRETE is an acrylic emulsion-based AC & cement modifier; a single-component liquid Acrylic Polymer blended with plasticisers and selected fillers for waterproof coating. When used with ordinary Portland cement, it improves tensile and flexural strength and enhances adhesion properties of mortar. It prevents thin-section fragility of cement when used as coating.
`,
    features: [
      "Easily mixes with cement and cures to a weather-resistant surface.",
      "Allows vapour to escape, preventing peeling and blister formation.",
      "Bonds strongly to most building materials.",
      "Prevents salt penetration and UV damage.",
      "No VOC — safe for green building construction."
    ],
    usage: [
      "Waterproofing of terraces, toilets, basements, swimming pools, etc.",
      "Repairing concrete, masonry walls, roofs, and terraces.",
      "Additive with cement paints to improve waterproofing.",
      "Protection of concrete against corrosion and efflorescence."
    ],
    packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg & 1 Kg"
  },

  // Add more products here later
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found.</h2>
        <button onClick={() => navigate("/")} className="back-btn">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <button onClick={() => navigate("/")} className="back-btn">← Back</button>
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <div className="details-section">
        <h3>Features</h3>
        <ul>{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul>

        <h3>Usage</h3>
        <ul>{product.usage.map((u, i) => <li key={i}>{u}</li>)}</ul>

        <h3>Available Packages</h3>
        <p>{product.packages}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
