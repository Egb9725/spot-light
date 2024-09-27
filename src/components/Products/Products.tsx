import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  images: string[];
  title: string;
  regularPrice: string;
  isSoldOut?: boolean;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtrer les produits avec un id impair
  const oddProducts = products.filter((product) => product.id % 2 !== 0);

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {oddProducts.map((product) => (
            <div key={product.id} className="relative group">
              {product.isSoldOut && (
                <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs">
                  Sold Out
                </span>
              )}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-cover h-[200px] w-full rounded-md"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.regularPrice}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
