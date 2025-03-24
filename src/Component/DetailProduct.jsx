import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";

const DetailProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const id = parseInt(productId, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center text-2xl text-gray-700 mt-20 font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden transform hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6"
          >
            <motion.img
              src={product.img}
              alt={product.name}
              className="max-h-96 w-full object-contain rounded-lg transition-transform duration-300"
              style={{ aspectRatio: "4/3" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-custom-purple"
              whileHover={{ scale: 1.05 }}
            >
              {product.name}
            </motion.h2>
            {product.description1 && (
              <motion.p
                className="text-lg md:text-2xl font-semibold text-blue-900 mt-3"
                whileHover={{ scale: 1.03 }}
              >
                {product.description1}
              </motion.p>
            )}
            {product.description2 && (
              <motion.p
                className="text-base md:text-xl text-blue-900 mt-3"
                whileHover={{ scale: 1.03 }}
              >
                {product.description2}
              </motion.p>
            )}
            <motion.p
              className="text-base md:text-xl text-blue-900 mt-3"
              whileHover={{ scale: 1.03 }}
            >
              {product.description}
            </motion.p>

            {product.bulletPoints && (
              <ul className="mt-4 space-y-2 text-left">
                {product.bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-blue-900 flex items-start"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-custom-purple text-lg mr-2">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            )}

            <motion.button
              onClick={() => navigate("/our-products")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 text-lg font-semibold text-custom-purple bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-all"
            >
              ← Back to Products
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailProduct;