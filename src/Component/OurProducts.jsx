import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import lemon from "../util/lemon.jpg";
import apple from "../util/apple.jpg";
import orange from "../util/orange.jpg";
import product4 from "../util/Product4.jpg";
import product5 from "../util/Product5.jpg";
import product6 from "../util/Product6.jpg";

const products = [
  { id: 1, img: lemon },
  { id: 2, img: apple },
  { id: 3, img: orange },
  { id: 4, name: "Pro-SG Whey Protein", img: product4 },
  { id: 5, name: "Cocoz - Coconut Water Powder", img: product5 },
  { id: 6, name: "Vita-SG Tablets", img: product6 },
];

const OurProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 px-5 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-custom-purple text-center">Our Products</h2>
      <p className="text-md md:text-lg  text-custom-purple mt-4 text-center max-w-3xl">
        Explore our premium healthcare products with a sleek, minimal design.
      </p>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-5 md:p-10 mt-12 w-full max-w-6xl shadow-lg"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name || `Product ${index + 1}`}
                className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-full rounded-lg transition-transform duration-300 hover:scale-105 shadow-md mix-blend-multiply filter brightness-125"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <button
                  onClick={() => navigate(`/detail-product/${product.id}`)}
                  className="bg-white text-custom-purple px-3 py-1 sm:px-4 sm:py-2 font-semibold rounded-md shadow-md hover:bg-gray-200 transition"
                >
                  Know More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: products.length * 0.2 }}
        className="text-center mt-8 text-custom-purple text-lg md:text-xl font-semibold"
      >
        <p>New Products Coming Soon!</p>
      </motion.div>
    </div>
  );
};

export default OurProducts;