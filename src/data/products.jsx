import lemon from "../Util/lemon.jpg";
import apple from "../Util/apple.jpg";
import orange from "../Util/orange.jpg";
import SGPRO from "../Util/SGPRO.jpg";
import product5 from "../Util/Product5.png";
import product6 from "../Util/Product6.png";

export const products = [
  { 
    id: 1, 
    name: "SG Lyte", 
    img: lemon,
    descriptio1:"SG-Lyte Electrolyte range helps with nausea and vomiting",
    description: "Enriched with vitamin C and essential minerals.",
    bulletPoints: [
      "Sodium:-Maintains fluid & Acid Base Balance & Co Transport in glucose absorption.",
      "Potassium:- Ensures proper functioning of Muscle & Nerves. Helps intra cellular fluid balance.",
      "Chloride:- Miantain body Fluids balance. Facilitate flow of Oxygen & Carbondioxide within body cells.",
      "Enriched with Vitamin-C"
     
    ]
  },
  { 
    id: 2, 
    name: "SG Lyte",
    img: apple,
    description: "Heat exhaustion leads to loss of electrolytes, energy & fluid. Replenish with SG Lyte ",
    bulletPoints: [
      "Specially designed for faster hydration.",
      "Provides an instant boost of energy.",
      "Great apple flavor for better taste.",
      "Helps prevent muscle cramps and dizziness.",
      "Best suited for sports, outdoor activities, and recovery from heat exhaustion."
    ]
  },
  { 
    id: 3, 
    name: "SG Lyte Plus",
    img: orange,
    description: "SG Lyte Electrolyte range that helps in fever conditions like Typhoid and Dengue.",
    
    bulletPoints: [
     "Sodium:-Maintains fluid & Acid Base Balance & Co Transport in glucose absorption.",
      "Potassium:- Ensures proper functioning of Muscle & Nerves. Helps intra cellular fluid balance.",
      "Chloride:- Maintains body Fluids balance. Facilitate flow of Oxygen & Carbondioxide within body cells.",
      "Enriched with Vitamin-C"
    ]
  },
  { 
    id: 4, 
    name: "Pro-SG ", 
    img: SGPRO,
    
    description2:"Protein Powder",
    
    description: "High-quality whey protein to fuel muscle growth and post-workout recovery.",
    bulletPoints: [
      "Contains Whey Protein, DHA, and Multivitamins.",
      "Enhances muscle growth and speeds up recovery.",
      "Supports immunity with essential nutrients.",
      "Rich in BCAAs (Branched-Chain Amino Acids).",
      "Low in fat and easy to digest."
    ]
  },
  { 
    id: 5, 
    name: "Cocoz", 
    img: product5,
    description1:"Coconut Water Powder",
    description: "Drink anywhere, anytime, just add water! A daily hydration premix packed with essential minerals.",
    bulletPoints: [
      "Instantly replenishes hydration levels.",
      "Rich in potassium for better muscle function.",
      "Natural alternative to sugary sports drinks.",
      "Supports digestion and improves gut health.",
      "Convenient sachets for travel and outdoor use."
    ]
  },
  { 
    id: 6, 
    name: "Vita-SG Tablets.",
    img: product6,
    description: "Methylcobalamin, Pyridoxal 5-Phosphate, L-Methylfolate & Vitamin D3 Tablets.",
    bulletPoints: [
      "Supports nerve health and brain function.",
      "Enhances red blood cell formation.",
      "Promotes strong bones with Vitamin D3.",
      "Improves metabolism and energy levels.",
      "Essential for people with vitamin deficiencies."
    ]
  }
];
