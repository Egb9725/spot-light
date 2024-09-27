import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  images: string[];
  title: string;
  regularPrice: string;
  description?: string;
  isSoldOut?: boolean;
  properties: string[];
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await fetch("../../data.json");
          const data = await response.json();
          const foundProduct = data.products.find((p: Product) => p.id === parseInt(id));
          setProduct(foundProduct || null);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image du produit */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <img
              key={`image-${index}`}
              src={image}
              alt={`${product.title} ${index + 1}`}
              className="rounded-md w-full object-cover"
            />
          ))}
        </div>

        {/* Détails du produit */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-700">{product.regularPrice}</p>
          {/* Description si elle existe */}
          {product.description && <p className="text-gray-600">{product.description}</p>}

          {/* Quantité et bouton d'achat */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 border-gray-300 rounded-md"
              min="1"
            />
            {product.isSoldOut ? (
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md cursor-not-allowed" disabled>
                Sold Out
              </button>
            ) : (
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
                Buy it now
              </button>
            )}
          </div>

          {/* Informations supplémentaires - Propriétés du produit */}
          <div className="text-gray-600 space-y-2">
            <ul className="list-disc pl-5">
              {product.properties.map((feature, index) => (
                <li key={`feature-${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
