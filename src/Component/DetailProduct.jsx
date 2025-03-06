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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-white shadow-2xl rounded-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src={product.img}
            alt={product.name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-1/3 object-cover h-64 md:h-full"
          />
          <div className="p-6 text-center md:text-left flex-1">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900"
            >
              {product.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mt-2"
            >
              {product.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailProduct;
