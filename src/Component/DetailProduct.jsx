import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";

const DetailProduct = () => {
  const { productId } = useParams();
  const id = parseInt(productId, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-6 overflow-hidden"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center">
          {/* Product Image */}
          <motion.img
            src={product.img}
            alt={product.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/2 max-h-80 object-contain rounded-lg"
          />
          
          {/* Product Info */}
          <div className="p-6 text-center md:text-left flex-1">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-custom-purple"
            >
              {product.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-custom-purple mt-2"
            >
              {product.description || "No description available."}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailProduct;
