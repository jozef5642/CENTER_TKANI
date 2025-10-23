import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Запрос к API
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при загрузке:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Товары</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain p-4"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-blue-600">
                  ${product.price}
                </span>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}