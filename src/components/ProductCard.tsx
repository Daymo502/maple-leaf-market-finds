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
      data-oid="9gselys"
    >
      <Link to={`/product/${id}`} className="block h-full" data-oid="oqex8ku">
        <div className="product-card h-full flex flex-col" data-oid="crejobc">
          <div className="relative" data-oid="wxn799k">
            <img
              src={image}
              alt={name}
              className="product-image"
              data-oid="5d48ol8"
            />

            {isCanadian && (
              <div className="absolute top-2 right-2" data-oid="yefdhkj">
                <CanadianBadge size="sm" data-oid="_kmm1g5" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow" data-oid="bjol5.x">
            <div className="mb-2" data-oid="patt9cl">
              <p className="text-xs text-muted-foreground" data-oid="uz9u:a5">
                {category}
              </p>
              <h3
                className="font-medium text-sm sm:text-base line-clamp-2"
                data-oid="m04_as_"
              >
                {name}
              </h3>
              {weight && (
                <p
                  className="text-xs text-muted-foreground mt-1"
                  data-oid="09_f720"
                >
                  {weight}
                </p>
              )}
            </div>
            <div
              className="flex items-center justify-between mt-auto pt-2"
              data-oid="vsu:o-9"
            >
              <p className="font-semibold" data-oid="zb-cq5n">
                ${price.toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
                data-oid="9.7zgi7"
              >
                <ShoppingCart className="h-4 w-4" data-oid="fgm7vnh" />
                <span className="sr-only" data-oid="gmfe6n.">
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
