import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DetailProduct = () => {
  const { productId } = useParams();
  const id = parseInt(productId, 10);

  const isEnergyDrink = [1, 2, 3].includes(id);

  // Flavor descriptions
  const flavors = [
    { name: "SG-Lyte Lemon", image: "lemon.jpg", description: "A tangy burst of lemon freshness to fuel your energy." },
    { name: "SG-Lyte Apple", image: "red.jpg", description: "A bold and intense red berry flavor with an electrifying taste." },
    { name: "SG-Lyte Orange", image: "orange.jpg", description: "A citrus explosion packed with natural orange zest and energy." }
  ];

  const [selectedFlavor, setSelectedFlavor] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6 flex flex-col items-center gap-10">
      {isEnergyDrink ? (
        flavors.map((flavor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-2xl rounded-2xl p-6 flex items-center max-w-3xl w-full overflow-hidden"
          >
            <motion.img
              src={`/assets/${flavor.image}`}
              alt={flavor.name}
              className="w-52 h-52 object-cover rounded-lg shadow-md transform hover:scale-105 transition"
            />
            <div className="flex-1 px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900">{flavor.name}</h2>
              <p className="text-lg text-gray-600 mt-2">{flavor.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                onClick={() => setSelectedFlavor(flavor)}
              >
                View More
              </button>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-2xl rounded-2xl p-6 flex items-center max-w-3xl w-full overflow-hidden"
        >
          <motion.img
            src={`/assets/Product${id}.jpg`}
            alt={`Product ${id}`}
            className="w-52 h-52 object-cover rounded-lg shadow-md transform hover:scale-105 transition"
          />
          <div className="flex-1 px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Product {id}</h2>
            <p className="text-lg text-gray-600 mt-2">Detailed description of Product {id}...</p>
          </div>
        </motion.div>
      )}

      {/* FLAVOR MODAL */}
      <AnimatePresence>
        {selectedFlavor && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFlavor(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-sm text-center relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-gray-900">{selectedFlavor.name}</h3>
              <p className="text-gray-600 mt-2">{selectedFlavor.description}</p>
              <img
                src={`/assets/${selectedFlavor.image}`}
                alt={selectedFlavor.name}
                className="w-32 h-32 rounded-lg mx-auto mt-4 shadow-md"
              />
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                onClick={() => setSelectedFlavor(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DetailProduct;