
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CanadianBadge from "./CanadianBadge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  isCanadian?: boolean;
  category: string;
  weight?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  isCanadian = false,
  category,
  weight,
}: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement actual cart functionality here
    toast.success(`${name} added to your cart`, {
      description: "Go to cart to complete your purchase",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${id}`} className="block h-full">
        <div className="product-card h-full flex flex-col">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="product-image"
            />
            {isCanadian && (
              <div className="absolute top-2 right-2">
                <CanadianBadge size="sm" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="mb-2">
              <p className="text-xs text-muted-foreground">{category}</p>
              <h3 className="font-medium text-sm sm:text-base line-clamp-2">{name}</h3>
              {weight && <p className="text-xs text-muted-foreground mt-1">{weight}</p>}
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <p className="font-semibold">${price.toFixed(2)}</p>
              <Button 
                size="sm" 
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
