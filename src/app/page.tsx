import { Product } from "./types";
import ProductList from "./components/ProductList";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              Welcome to Products Gallery
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Discover our curated collection of premium products
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <ProductList initialProducts={products} />
      </div>
    </div>
  );
}
