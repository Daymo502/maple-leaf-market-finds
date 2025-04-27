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
      data-oid="j1on.gf"
    >
      <Link to={`/product/${id}`} className="block h-full" data-oid="j-308si">
        <div className="product-card h-full flex flex-col" data-oid="2rj:4po">
          <div className="relative" data-oid="vmyruka">
            <img
              src={image}
              alt={name}
              className="product-image"
              data-oid="m.g8l6z"
            />

            {isCanadian && (
              <div className="absolute top-2 right-2" data-oid="1yoyj6:">
                <CanadianBadge size="sm" data-oid="oyabuhk" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow" data-oid="09tzsxh">
            <div className="mb-2" data-oid="8_0yfcw">
              <p className="text-xs text-muted-foreground" data-oid="h8j0uil">
                {category}
              </p>
              <h3
                className="font-medium text-sm sm:text-base line-clamp-2"
                data-oid="yl2f2yc"
              >
                {name}
              </h3>
              {weight && (
                <p
                  className="text-xs text-muted-foreground mt-1"
                  data-oid="1:15-hh"
                >
                  {weight}
                </p>
              )}
            </div>
            <div
              className="flex items-center justify-between mt-auto pt-2"
              data-oid="lu7mlww"
            >
              <p className="font-semibold" data-oid="v9unwjb">
                ${price.toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
                data-oid="9mp2omf"
              >
                <ShoppingCart className="h-4 w-4" data-oid="ubl3avu" />
                <span className="sr-only" data-oid="40d2xnb">
                  Add to cart
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
