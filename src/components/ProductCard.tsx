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
      data-oid="b7mx4u9"
    >
      <Link to={`/product/${id}`} className="block h-full" data-oid="h6ncnmk">
        <div className="product-card h-full flex flex-col" data-oid="kyvyu2l">
          <div className="relative" data-oid="slsy7-v">
            <img
              src={image}
              alt={name}
              className="product-image"
              data-oid="w5d4.ih"
            />

            {isCanadian && (
              <div className="absolute top-2 right-2" data-oid="p1i3jel">
                <CanadianBadge size="sm" data-oid="wa1c::9" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow" data-oid="23z1vz3">
            <div className="mb-2" data-oid="7r:sigg">
              <p className="text-xs text-muted-foreground" data-oid="2_8k6lo">
                {category}
              </p>
              <h3
                className="font-medium text-sm sm:text-base line-clamp-2"
                data-oid="_m2ecrg"
              >
                {name}
              </h3>
              {weight && (
                <p
                  className="text-xs text-muted-foreground mt-1"
                  data-oid="fc:mtnt"
                >
                  {weight}
                </p>
              )}
            </div>
            <div
              className="flex items-center justify-between mt-auto pt-2"
              data-oid="2auhjj:"
            >
              <p className="font-semibold" data-oid="6d58784">
                ${price.toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
                data-oid="whfi.au"
              >
                <ShoppingCart className="h-4 w-4" data-oid="iir_rgw" />
                <span className="sr-only" data-oid="p5s6vhf">
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
