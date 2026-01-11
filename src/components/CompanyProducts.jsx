import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./product.css";

/* 🖼️ Import all images from assets folder */
import bondCrete from "../assets/BOND CRETE.jpg";
import superBondCrete from "../assets/SUPER BOND CRETE.png";
import latex from "../assets/LATEX & SUPER LATEX.png";
import superLatex from "../assets/SUPER LATEX.png";
import rubberCoat from "../assets/RUBBER COAT.jpg";
import roofCoat from "../assets/ROOF COAT.jpg";
import wallGuard from "../assets/WALL GUARD.png";
import dampProof from "../assets/DAMP PROOF.png";
import plastProof from "../assets/PLAST PROOF.png";
import crackSeal from "../assets/CRACK SEAL.png";
import puCrackSeal from "../assets/PU CRACK SEAL.png";
import puGrout from "../assets/PU GROUT.png";

/* 🧱 Product list */
const companies = [
  { id: "bond-crete", name: "BOND CRETE", logo: bondCrete },
  { id: "super-bond-crete", name: "SUPER BOND CRETE", logo: superBondCrete },
  { id: "latex", name: "LATEX", logo: latex },
  { id: "super-latex", name: "SUPER LATEX", logo: superLatex },
  { id: "rubber-coat", name: "RUBBER COAT", logo: rubberCoat },
  { id: "roof-coat", name: "ROOF COAT", logo: roofCoat },
  { id: "wall-guard", name: "WALL GUARD", logo: wallGuard },
  { id: "damp-proof", name: "DAMP PROOF", logo: dampProof },
  { id: "plast-proof", name: "PLAST PROOF", logo: plastProof },
  { id: "crack-seal", name: "CRACK SEAL", logo: crackSeal },
  { id: "pu-crack-seal", name: "PU CRACK SEAL", logo: puCrackSeal },
  { id: "pu-grout", name: "PU GROUT", logo: puGrout },
];

/* 📦 Product details */
const productData = {
  "bond-crete": {
    name: "BOND CRETE",
    description:
      "BOND CRETE is an acrylic emulsion-based cement modifier designed for waterproof coatings and structural repairs. It enhances adhesion, flexibility, and durability when mixed with ordinary Portland cement.",
    features: [
      "Improves tensile and flexural strength.",
      "Bonds strongly to most building materials.",
      "UV and weather resistant surface finish.",
      "Prevents salt penetration and efflorescence.",
      "Non-toxic and VOC-free.",
    ],
    usage: [
      "Terrace and bathroom waterproofing.",
      "Repairing concrete, masonry, and plaster surfaces.",
      "As a bonding agent for old and new concrete.",
      "Protective coating for concrete and steel structures.",
    ],
    packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg & 1 Kg",
  },

  "super-bond-crete": {
  name: "SUPER BOND CRETE",
  description:
    "SUPER BOND CRETE is an aqueous dispersion of a single-component acrylic-based polymer with liquid additives specifically designed for modified Portland cement compositions. It has superior adhesion to old and new concrete, masonry brickwork, and other surfaces. It can be used as a waterproof membrane for roofs, balconies, and terraces. It bonds excellently to most building materials, becoming a part of the concrete repair system and accommodating limited crack movement.",
  features: [
    "Improves bend strength and provides durable polymer-based waterproofing.",
    "Reduces cracking and increases mortar flexural strength.",
    "Creates a strong bond between old and new concrete surfaces.",
    "Non-toxic, environment-friendly, and safe for users.",
    "Easily brushable, cost-effective, and economical.",
  ],
  usage: [
    "Ideal for roofs, basements (inside & outside), swimming pools, and old & new concrete bonding.",
    "Perfect for bathrooms, kitchens, paint, putty, and exterior walls.",
    "Used for repairs to precast structural members.",
    "Excellent for toppings, patch repair, and levelling courses.",
    "Due to low permeability, it can be used for waterproof sealing and tank linings.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"latex": {
  name: "LATEX",
  description:
    "LATEX is a Styrene Butadiene Rubber (SBR) emulsion specially designed as a bonding and waterproofing agent. It is formulated as an integral admixture for obtaining waterproof concrete, plaster, and mortar. It is also ideal for the preparation of repair mortars for damaged or spoiled concrete and for repairing large cracks. Once dry, the modified mortar or concrete exhibits excellent resistance to water.",
  features: [
    "High bonding strength between old and new concrete.",
    "Increases mortar flexural and tensile strength.",
    "Prevents leakage and dampness by reducing mortar permeability.",
    "Improves mechanical strength and surface hardening.",
  ],
  benefits: [
    "Can be used in waterproofing, sealing, and lining of tanks.",
    "Durable and prevents concrete decay.",
    "Increases overall structural durability.",
    "Excellent adhesion to most building substrates.",
    "Reduces cracking, limits wear, and ideal for rubber-wheeled traffic.",
  ],
  usage: [
    "Used for general reconstruction work and LATEX-modified overlays.",
    "Creates strong and non-permeable joints between old and new concrete when mixed with mortar.",
    "Ideal for fixing tiles, floor screeds, and mosaic tiling.",
    "Can be used as a coating to prevent corrosion in rebars.",
    "Perfect for repairing cracks, sealing porous surfaces, and improving physical properties of Portland cement systems.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"super-latex": {
  name: "SUPER LATEX",
  description:
    "SUPER LATEX is a Styrene Butadiene Rubber (SBR) emulsion specially designed as a bonding and waterproofing agent. It is formulated as an integral admixture for obtaining waterproof concrete, plaster, and mortar. It is also ideal for the preparation of repair mortars for damaged or spoiled concrete and for repairing large cracks. Once dry, the modified mortar or concrete exhibits excellent resistance to water.",
  features: [
    "High bonding strength between old and new concrete.",
    "Increases mortar flexural and tensile strength.",
    "Prevents leakage and dampness by reducing mortar permeability.",
    "Improves mechanical strength and surface hardening.",
  ],
  benefits: [
    "Can be used in waterproofing, sealing, and lining of tanks.",
    "Durable and prevents concrete decay.",
    "Increases overall structural durability.",
    "Excellent adhesion to most building substrates.",
    "Reduces cracking, limits wear, and ideal for rubber-wheeled traffic.",
  ],
  usage: [
    "Used for general reconstruction work and SUPER LATEX-modified overlays.",
    "Creates strong and non-permeable joints between old and new concrete when mixed with mortar.",
    "Ideal for fixing tiles, floor screeds, and mosaic tiling.",
    "Can be used as a coating to prevent corrosion in rebars.",
    "Perfect for repairing cracks, sealing porous surfaces, and improving physical properties of Portland cement systems.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"rubber-coat": {
  name: "RUBBER COAT",
  description:
    "RUBBER COAT is a polymer-modified bituminous elastomeric cold-applied liquid waterproofing membrane. It is formulated from a blend of special rubber and resin along with minerals, stabilizers, gelling agents, and water-repelling fillers to create a tough, durable rubberized membrane.",
  features: [
    "Single-component, cold-applied, and non-flammable formulation.",
    "Ready to use directly from the package with adequate working time.",
    "Forms a highly elastic, rubber-like membrane.",
    "Easily brushable and provides superior wetting and adhesion.",
    "Contains unique additives that enhance durability.",
    "Flexible and accommodates minor crack movements.",
  ],
  benefits: [
    "No mixing or heating required — saves labor and time.",
    "Ensures durable bonding and resists peeling or chipping for long life.",
    "No curing required after application.",
    "Tools can be cleaned easily with water.",
    "Highly resistant to oxidation, UV rays, and ozone exposure.",
  ],
  usage: [
    "Ideal for waterproofing concrete roofs, polyurethane foam slabs, and polyester built-up roofs.",
    "Perfect for maintenance of existing roofs, masonry walls, and concrete surfaces.",
    "Suitable for bathrooms, basements, podium decks, bridges, and metal surfaces.",
    "Popularly used as a sandwich membrane in new construction and as a surface treatment on old roofs.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"roof-coat": {
  name: "ROOF COAT",
  description:
    "ROOF COAT is a single-component, synthetic resin-based waterproof coating. Being thermoplastic and flexible, it is ideal for both vertical and horizontal surfaces. Its white color reflects visible, infrared, and ultraviolet rays of the sun — offering excellent UV resistance and solar reflectivity. The coating provides a cooling effect due to its reflective properties, making it an economical and pollution-free waterproofing solution.",
  features: [
    "Reduces roof load and increases the structural life of the building.",
    "Provides a seamless and joint-free waterproof coating.",
    "Ready-to-use formulation — ideal for terraces and wall applications.",
    "Bonds strongly to both old and new building materials.",
    "Non-toxic and environment-friendly composition.",
    "Flexible, crack-bridging, and UV-resistant coating.",
  ],
  usage: [
    "Waterproofing of plaza decks, car parks, roof slabs, terraces, balconies, sunshades, and parapet walls.",
    "Decorative waterproofing of external plastered walls.",
    "Suitable for roof edges, gullies, and steeply pitched surfaces.",
    "Ideal for complex geometries like domes, arches, shells, folded plates, paraboloids, and corrugated sheets.",
    "Can be used for garden areas, swimming pools, and basements when applied as a sandwich membrane.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"wall-guard": {
  name: "WALL GUARD",
  description:
    "WALL GUARD is an exterior and interior wall elastomeric coating made from a blend of special acrylic polymer, weather-durable pigments, and advanced additives. It provides exceptional flexibility, waterproofing, and UV resistance. Its white color enhances solar insulation, making walls cooler and protected for years.",
  features: [
    "Eco-friendly and easy to apply formulation.",
    "Excellent weather and UV resistance.",
    "Strong adhesion with outstanding waterproofing properties.",
    "Reflects sunlight and keeps concrete surfaces cool.",
    "Elastic and effectively covers hairline cracks.",
    "Non-yellowing and color-stable coating film.",
    "Highly flexible and crack-bridging.",
    "Resistant to algae and fungal growth.",
  ],
  benefits: [
    "Completely impermeable to wind-driven rain, ensuring waterproofing.",
    "Suitable for both interior and exterior decorative applications.",
    "Low dirt pick-up keeps walls looking fresh.",
    "Can be applied on asbestos sheets and various substrates.",
    "Provides excellent adhesion and long-lasting durability.",
    "Acts as both waterproofing and decorative coating for external plastered walls.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"damp-proof": {
  name: "DAMP PROOF",
  description:
    "DAMP PROOF is a special synthetic resin and fiber-reinforced waterproof coating. With excellent flexibility and thixotropic properties, it is ideal for both vertical and horizontal surfaces. This single-pack, economical, and eco-friendly coating provides superior UV resistance and solar reflectivity, offering a cooling effect and long-lasting waterproof protection.",
  features: [
    "Formulated with unique additives to enhance durability.",
    "Superior wetting and adhesion to a wide range of substrates.",
    "Adapts easily to irregular deck contours and surface textures.",
    "Single-component, cold-applied, and highly elastic rubber-like membrane.",
    "Easy application with long-lasting performance.",
  ],
  benefits: [
    "Provides a durable bond that resists peeling and chipping.",
    "Highly resistant to oxidation, UV exposure, and ozone.",
    "No mixing or heating required — saves time and labor costs.",
    "Creates an impervious and continuous waterproof blanket.",
    "Withstands structural movements, expansion, and contraction without cracking.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},

"plast-proof": {
  name: "PLAST PROOF",
  description:
    "PLAST PROOF is an integral waterproofing admixture for cement mortar, plaster, and concrete. It chemically converts water-soluble compounds present in the mix into stable, water-insoluble compounds. With excellent plasticizing properties, it enhances cohesiveness, prevents segregation, and is ideal for all concrete or mortar requiring high impermeability.",
  features: [
    "Makes concrete impermeable, resisting dampness and preventing efflorescence.",
    "Improves workability of concrete and mortar for easy processing and uniform mixing.",
    "Easily soluble in water for a homogenous blend.",
    "Performs as both a water reducer and a waterproofer.",
    "Improves workability without increasing water content.",
    "Reduces shrinkage and provides a smoother, superior finish.",
    "Disrupts leakage-causing capillary structures within concrete.",
    "Chloride-free formulation — does not contribute to steel corrosion.",
  ],
  packages: "200 Kg, 50 Kg, 20 Kg, 10 Kg, 5 Kg, & 1 Kg",
},
"crack-seal": {
  name: "CRACK SEAL",
  description:
    "CRACK SEAL is a single-component, high-quality acrylic emulsion polymer-based crack filler. It is a ready-to-use, flexible putty specially designed for filling cracks in plastered surfaces. The product offers excellent bonding strength, water resistance, durability, and a smooth aesthetic finish, making it ideal for both interior and exterior repairs.",
  usage: [
    "Used as a filler for cracks in plastered surfaces, both internal and external.",
    "Ideal for concrete, brick masonry, and plaster walls with cracks up to 5 mm width.",
    "Recommended for repairing fine surface cracks before painting or waterproofing.",
  ],
  features: [
    "Ready-to-use, easy-to-apply formulation — no mixing required.",
    "High bonding strength ensures long-lasting crack repairs.",
    "Excellent flexibility accommodates minor structural movements.",
    "Water-resistant and prevents further crack propagation.",
    "Smooth finish provides superior paint adhesion and aesthetics.",
    "UV-resistant and weather durable for external applications.",
  ],
  packages: "6.5 Kg, 4 Kg, & 1 Kg",
},
"pu-crack-seal": {
  name: "PU CRACK SEAL",
  description:
    "PU CRACK SEAL is a single-component, pigmented, high-performance, medium-modulus polyurethane sealant. It is UV and light stable, characterized by high elasticity, and cures upon exposure to atmospheric humidity. The product exhibits excellent adhesion to a wide range of construction materials, including cement-based surfaces, brick, glass, wood, galvanized and painted metal sheets, and various plastics.",
  features: [
    "Possesses permanent elasticity with long-term flexibility.",
    "Paintable surface finish after full curing.",
    "Non-sagging and thixotropic — can be easily applied with a hand gun.",
    "No surface stickiness after complete cure and resists dirt pickup.",
    "Ideal for expansion joints in buildings and structural applications.",
    "No shrinkage during or after curing.",
    "Complies with LEED EQc4.1 low-emitting product standards (SCAQMD Rule 1168).",
  ],
  usage: [
    "Used for bonding and sealing various construction materials.",
    "Sealing joints around windows, doors, and skirting boards.",
    "Suitable for walls, ceilings, and expansion joints.",
    "Ideal for external and internal crack filling.",
    "Used in saw-cut joints in concrete roads and factory floors.",
  ],
  packages: "600 ml",
},
"pu-grout": {
  name: "PU GROUT",
  description:
    "PU GROUT is a single-component, very low-viscosity, solvent-free, hydrophobic polyurethane-based grout. When in contact with water, it reacts to form an elastic, flexible, and watertight foam within pores and cracks. The reaction produces a dense or foamed material depending on injection pressure, ensuring long-term waterproofing without shrinkage or swelling. It can be injected using a one-component pump for easy application.",
  features: [
    "No reaction occurs unless in direct contact with water, ensuring targeted sealing.",
    "Expands freely up to 27 times its original volume upon water contact.",
    "Forms an elastic, flexible, and watertight foam with superior adhesion.",
    "Reaction speed (foam formation) is approximately 15–20 seconds, depending on temperature and conditions.",
    "Maintains dimensional stability — does not shrink or swell after curing.",
    "Can be injected efficiently using standard one-component pumps.",
  ],
  usage: [
    "Ideal for permanent watertight sealing of cracks and joints in concrete, brickwork, and natural stone.",
    "Suitable for use in dry, damp, or water-bearing cracks and joints.",
    "Used for structural waterproofing in basements, tunnels, retaining walls, and water tanks.",
    "Effective for sealing leaks and preventing water ingress in concrete structures.",
  ],
  packages: "5 Kg, 10 Kg",
},

};

/* 💠 Main Component */
const CompanyProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="company-products-container">
      <h1 id="Products">Our Company Products</h1>
      <p className="products-subtitle">
        Discover our range of high-performance construction chemicals designed
        for lasting protection and strength.
      </p>

      {/* 🧱 Product Grid */}
      <div className="company-grid">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            className={`company-card ${selectedProduct === company.id ? "active" : ""}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProduct(company.id)}
          >
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3 className="company-name">{company.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* 💬 Product Popup Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProduct(null)}
            />

            {/* Popup Content */}
            <motion.div
              key={selectedProduct}
              className="product-modal"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.4 }}
            >
              <button className="close-btn" onClick={() => setSelectedProduct(null)}>✕</button>

              <img
                src={companies.find((c) => c.id === selectedProduct)?.logo}
                alt={productData[selectedProduct]?.name}
                className="modal-logo"
              />

              <h2>{productData[selectedProduct]?.name}</h2>
              <p className="product-description">
                {productData[selectedProduct]?.description}
              </p>

              <div className="product-section">
                <h4>Features:</h4>
                <ul>
                  {productData[selectedProduct]?.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h4>Usage:</h4>
                <ul>
                  {productData[selectedProduct]?.usage?.map((u, i) => (
                    <li key={i}>{u}</li>
                  ))}
                </ul>

                <h4>Available Packages:</h4>
                <p>{productData[selectedProduct]?.packages}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyProducts;
