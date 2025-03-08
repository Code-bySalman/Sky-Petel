import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import lemon from "../Util/lemon.jpg";
import apple from "../Util/apple.jpg";
import orange from "../Util/orange.jpg";
import whey from "../Util/product4.jpg";
import product5 from "../Util/Product5.jpg";
import product6 from "../Util/Product6.jpg";

const products = [
  { id: 1, name: "Lemon", img: lemon },
  { id: 2, name: "Apple", img: apple },
  { id: 3, name: "Orange", img: orange },
  { id: 4, name: "Pro-SG Whey Protein", img: whey },
  { id: 5, name: "Cocoz - Coconut Water Powder", img: product5 },
  { id: 6, name: "Vita-SG Tablets", img: product6 },
];

const OurProducts = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Scroll to middle of the section when image changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div ref={sectionRef} className="bg-white py-16 px-5 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-custom-purple text-center tracking-tight">
        Our Products
      </h2>
      <p className="text-lg md:text-xl text-custom-purple mt-4 text-center max-w-2xl">
        Discover a range of high-quality, health-driven products tailored to your needs.
      </p>

      {/* Product Slider */}
      <div className="relative w-full max-w-lg h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-12 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-2xl text-custom-purple" />
        </button>

        <motion.div
          key={products[currentIndex].id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="relative group w-full h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={products[currentIndex].img}
              alt={products[currentIndex].name}
              className="w-full h-full object-fill rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ aspectRatio: "4/3" }} // Ensures correct aspect ratio
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <button
                onClick={() => navigate(`/detail-product/${products[currentIndex].id}`)}
                className="bg-white text-custom-purple px-5 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                Know More
              </button>
            </div>
          </div>
        </motion.div>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaArrowRight className="text-2xl text-custom-purple" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-10 text-custom-purple text-lg md:text-xl font-medium"
      >
        <p>New Products Coming Soon!</p>
      </motion.div>
    </div>
  );
};

export default OurProducts;
