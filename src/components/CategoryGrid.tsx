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
    <section className="py-12" data-oid="s2u3wei">
      <div className="container mx-auto px-4" data-oid="fygbjfb">
        <h2 className="text-2xl md:text-3xl font-bold mb-8" data-oid="fcyjpzx">
          Shop by Category
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          data-oid="-n9aifc"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              data-oid="ddxlpe_"
            >
              <Link
                to={`/category/${category.id}`}
                className="block h-full"
                data-oid="dz20qp:"
              >
                <div
                  className="product-card h-full flex flex-col overflow-hidden"
                  data-oid="xwk819z"
                >
                  <div
                    className="aspect-square overflow-hidden"
                    data-oid="sfrfbdq"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-oid="zzu:xfq"
                    />
                  </div>
                  <div className="p-4 text-center" data-oid="vrrcuod">
                    <h3 className="font-semibold" data-oid="ajaphqo">
                      {category.name}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground mt-1 hidden md:block"
                      data-oid="a775qfe"
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
