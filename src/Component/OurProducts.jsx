import React from 'react';

const products = [
  {
    name: 'Product 1',
    description: 'High-quality product 1 for healthcare needs.',
    img: '../assets/Product1.jpg',
  },
  {
    name: 'Product 2',
    description: 'Innovative product 2 designed for well-being.',
    img: '/assets/Product2.jpg',
  },
  {
    name: 'Product 3',
    description: 'Reliable product 3 to enhance your lifestyle.',
    img: '/assets/Product3.jpg',
  },
  {
    name: 'Product 4',
    description: 'State-of-the-art product 4 for optimal health.',
    img: '/assets/Product4.jpg',
  },
];

const OurProducts = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-900">Our Products</h2>
        <p className="text-lg text-blue-600 mt-4 max-w-3xl mx-auto">
          Explore our premium healthcare products designed to improve your quality of life.
          Stay tuned for more innovative solutions!
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-60 object-fill"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-white text-lg font-semibold">View</p>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-blue-900">{product.name}</h3>
                <p className="text-md text-blue-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Products Section */}
        <div className="mt-12">
          <div 
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-blue-900">New Products Coming Soon!</h3>
            <p className="text-md text-blue-600 mt-2">Stay tuned for exciting updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
