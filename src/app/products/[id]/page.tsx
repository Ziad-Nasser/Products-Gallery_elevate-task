"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Tag } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        {product && (
          <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product?.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{product?.description}</p>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Tag className="mr-2" size={16} />
            <span>Category: {product?.category}</span>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
