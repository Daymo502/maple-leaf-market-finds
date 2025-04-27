import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: "produce",
    name: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description:
      "Farm-fresh fruits and vegetables harvested from Canadian soil.",
  },
  {
    id: "dairy",
    name: "Dairy",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    description: "Quality milk products from Canadian dairy farms.",
  },
  {
    id: "bakery",
    name: "Bakery",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "Freshly baked goods made with Canadian ingredients.",
  },
  {
    id: "meat",
    name: "Meat & Poultry",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Ethically raised meat from Canadian farms.",
  },
  {
    id: "pantry",
    name: "Pantry",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Essentials and specialty items from Canadian producers.",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12" data-oid="yfayr64">
      <div className="container mx-auto px-4" data-oid="ipd9qo8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" data-oid="vo1f5._">
          Shop by Category
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          data-oid="rbb7rxs"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              data-oid="mimopo."
            >
              <Link
                to={`/category/${category.id}`}
                className="block h-full"
                data-oid="0p428lg"
              >
                <div
                  className="product-card h-full flex flex-col overflow-hidden"
                  data-oid="_3fn27b"
                >
                  <div
                    className="aspect-square overflow-hidden"
                    data-oid="73mi5or"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-oid="29u0640"
                    />
                  </div>
                  <div className="p-4 text-center" data-oid="vvwh_xp">
                    <h3 className="font-semibold" data-oid="qg7efgk">
                      {category.name}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground mt-1 hidden md:block"
                      data-oid="nda1fc_"
                    >
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
