import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock product data - in a real app, this would come from an API
const allProducts = [
  {
    id: "1",
    name: "Organic Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    isCanadian: true,
    category: "produce",
    weight: "1kg bag",
  },
  {
    id: "2",
    name: "Local Farm Fresh Eggs",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    isCanadian: true,
    category: "dairy",
    weight: "Dozen",
  },
  {
    id: "3",
    name: "Artisan Sourdough Bread",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    isCanadian: true,
    category: "bakery",
    weight: "500g loaf",
  },
  {
    id: "4",
    name: "Grass-Fed Ground Beef",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    isCanadian: false,
    category: "meat",
    weight: "500g pack",
  },
  {
    id: "5",
    name: "Organic Maple Syrup",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    isCanadian: true,
    category: "pantry",
    weight: "250ml bottle",
  },
  {
    id: "6",
    name: "Whole Milk",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    isCanadian: true,
    category: "dairy",
    weight: "2L",
  },
  {
    id: "7",
    name: "Fresh Carrots",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    isCanadian: true,
    category: "produce",
    weight: "1kg bag",
  },
  {
    id: "8",
    name: "Imported Bananas",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    isCanadian: false,
    category: "produce",
    weight: "500g",
  },
];

const ProductListing = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const canadianOnly = searchParams.get("canadian") === "true";

  const [selectedCategory, setSelectedCategory] = useState(categoryId || "all");
  const [showCanadianOnly, setShowCanadianOnly] = useState(canadianOnly);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Update the filtered products when filters change
  useEffect(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Filter by Canadian only
    if (showCanadianOnly) {
      filtered = filtered.filter((product) => product.isCanadian);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, showCanadianOnly, searchQuery]);

  // Update page title based on category
  useEffect(() => {
    let pageTitle = "All Products";

    if (selectedCategory !== "all") {
      pageTitle =
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    }

    if (showCanadianOnly) {
      pageTitle += " - Canadian Made";
    }

    document.title = `${pageTitle} | Maple Leaf Market`;
  }, [selectedCategory, showCanadianOnly]);

  // Get the heading text
  const getHeadingText = () => {
    if (selectedCategory === "all") {
      return showCanadianOnly ? "Canadian Products" : "All Products";
    } else {
      const category =
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
      return showCanadianOnly ? `Canadian ${category}` : category;
    }
  };

  return (
    <Layout data-oid="1f0pbj-">
      <div className="container mx-auto px-4 py-8" data-oid="8o0:kr2">
        <div className="flex flex-col md:flex-row gap-8" data-oid="226lt_s">
          {/* Sidebar Filters */}
          <div className="md:w-1/4 lg:w-1/5" data-oid="06xyri3">
            <CategoryFilter
              onCategoryChange={setSelectedCategory}
              onCanadianOnlyChange={setShowCanadianOnly}
              selectedCategory={selectedCategory}
              canadianOnly={showCanadianOnly}
              data-oid="ptpyg6q"
            />
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4 lg:w-4/5" data-oid="-socpz:">
            <div className="mb-6" data-oid=":abzrtf">
              <h1
                className="text-2xl md:text-3xl font-bold mb-4"
                data-oid="fageh.j"
              >
                {getHeadingText()}
              </h1>
              <div className="relative" data-oid="e.dv:.g">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  data-oid="opyhfb3"
                />

                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 bg-muted"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-oid="3bmv3y."
                />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                data-oid="gsmbriy"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    data-oid="0rl:r6m"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12" data-oid="dt02dd_">
                <h3 className="text-lg font-medium mb-2" data-oid="1w61gle">
                  No products found
                </h3>
                <p className="text-muted-foreground" data-oid="elag0:b">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
