"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import SearchBar from "./SearchBar";
import { ShoppingBag } from "lucide-react";

export default function ProductList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleSearch = (query: string) => {
    const filtered = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    );
    setProducts(filtered);
  };

  return (
    <>
      <div className="mb-8 animate-fade-in-up animation-delay-400">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 relative">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ShoppingBag className="text-white" size={32} />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {product.title}
              </h2>
              <p className="text-blue-600 font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
