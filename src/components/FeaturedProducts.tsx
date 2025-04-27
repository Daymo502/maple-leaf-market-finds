import { useState } from "react";
import ProductCard from "./ProductCard";

// Mock product data - in a real app, this would come from an API
const mockProducts = [
  {
    id: "1",
    name: "Organic Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    isCanadian: true,
    category: "Produce",
    weight: "1kg bag",
  },
  {
    id: "2",
    name: "Local Farm Fresh Eggs",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    isCanadian: true,
    category: "Dairy",
    weight: "Dozen",
  },
  {
    id: "3",
    name: "Artisan Sourdough Bread",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    isCanadian: true,
    category: "Bakery",
    weight: "500g loaf",
  },
  {
    id: "4",
    name: "Grass-Fed Ground Beef",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    isCanadian: false,
    category: "Meat & Poultry",
    weight: "500g pack",
  },
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState(mockProducts);

  return (
    <section className="py-12" data-oid="yidijcp">
      <div className="container mx-auto px-4" data-oid="1nhex8q">
        <div
          className="flex justify-between items-center mb-8"
          data-oid=".4a6ngr"
        >
          <h2 className="text-2xl md:text-3xl font-bold" data-oid="8w7q6kc">
            Featured Products
          </h2>
          <div className="text-sm" data-oid="dy2sk7n">
            <span className="text-muted-foreground mr-2" data-oid="3n-lkv-">
              Look for the{" "}
            </span>
            <div
              className="inline-flex items-center justify-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
              data-oid="4mal8sx"
            >
              <div
                className="inline-block w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="ivq0gyt"
              ></div>
              <span data-oid="0n-k1_z">Made in Canada</span>
            </div>
            <span className="text-muted-foreground ml-2" data-oid="eqft4.e">
              badge
            </span>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-oid="14sn2ob"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} data-oid="eorxicg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
