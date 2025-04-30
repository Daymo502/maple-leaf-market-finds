
import { useWishlist } from "@/contexts/WishlistContext";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">My Wishlist</h1>
        
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
            <h3 className="text-lg font-medium mt-4 mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">
              Save your favorite products to your wishlist for later.
            </p>
            <Link to="/all-products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
