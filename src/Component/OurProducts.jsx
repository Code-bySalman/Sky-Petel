import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, img: "/assets/lemon.jpg" },
  { id: 2, img: "/assets/red.jpg" },
  { id: 3, img: "/assets/orange.jpg" },
  { id: 4, img: "/assets/ABC.jpg" },
  { id: 5, img: "/assets/Product5.jpg" },
];

const OurProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 px-5 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Our Products</h2>
      <p className="text-lg text-gray-600 mt-4 text-center max-w-3xl">
        Explore our premium healthcare products with a sleek, minimal design.
      </p>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-10 mt-12 w-full  max-w-4xl flex justify-center shadow-lg gap-5"
      >
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
              alt={`Product ${index + 1}`}
              className="w-[120px] md:w-[150px] lg:w-[180px] h-full rounded-lg transition-transform duration-300 hover:scale-105 
                         shadow-md mix-blend-multiply filter brightness-125"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <button
                onClick={() => navigate(`/detail-product/${product.id}`)}
                className="bg-white text-black px-4 py-2 font-semibold rounded-md shadow-md hover:bg-gray-200 transition"
              >
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: products.length * 0.2 }}
        className="text-center mt-12 text-gray-900 text-xl font-semibold"
      >
        <p>New Products Coming Soon!</p>
      </motion.div>
    </div>
  );
};

export default OurProducts;
