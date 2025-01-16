import React from 'react';

const products = [
  {
    name: 'Product 1',
    description: 'Short description of product 1.',
    img: 'https://via.placeholder.com/300x200', 
  },
  {
    name: 'Product 2',
    description: 'Short description of product 2.',
    img: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Product 3',
    description: 'Short description of product 3.',
    img: 'https://via.placeholder.com/300x200',
  },
  // Add more products as needed
];

const OurProducts = () => {
  return (
    <div className="bg-blue-100 py-16 px-5  ">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        <h2 className="text-5xl font-bold text-blue-900">
          Our Products
        </h2>

        <p className="text-lg leading-relaxed text-blue-500 mx-auto max-w-4xl">
          We are committed to providing high-quality healthcare products that improve lives. 
          Our range of innovative solutions is designed to meet diverse needs and promote well-being. 
          Stay tuned for our upcoming product launches!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-5">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden 
                         animate-pulse" 
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50  opacity-0 hover:opacity-100   transform transition-transform duration-300 hover:scale-105 hover:shadow-lg 
                       flex flex-col items-center justify-center animate-bounce ">
                <p className="text-white text-lg font-semibold">Coming Soon</p>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900">
                {product.name}
              </h3>
              <p className="text-md text-blue-500 mt-2">
                {product.description}
              </p>
            </div>
          ))}

          {/* New Product Card */}
          <div 
            className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg 
                       flex flex-col items-center justify-center animate-bounce" 
          >
            <h3 className="text-2xl font-semibold text-blue-900">
              New Products Coming Soon!
            </h3>
            <p className="text-md text-blue-500 mt-2">
              Stay tuned for exciting updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;

