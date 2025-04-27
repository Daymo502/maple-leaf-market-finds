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
      data-oid="0vs9b0u"
    >
      <Link to={`/product/${id}`} className="block h-full" data-oid="nd3zeyn">
        <div className="product-card h-full flex flex-col" data-oid=":bn5ng9">
          <div className="relative" data-oid="vsz0.fp">
            <img
              src={image}
              alt={name}
              className="product-image"
              data-oid="nq5qy38"
            />

            {isCanadian && (
              <div className="absolute top-2 right-2" data-oid="-iisftw">
                <CanadianBadge size="sm" data-oid="4fi34xd" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow" data-oid="6:uw_cu">
            <div className="mb-2" data-oid="cspueuv">
              <p className="text-xs text-muted-foreground" data-oid="uk_toq7">
                {category}
              </p>
              <h3
                className="font-medium text-sm sm:text-base line-clamp-2"
                data-oid="s_2ga1x"
              >
                {name}
              </h3>
              {weight && (
                <p
                  className="text-xs text-muted-foreground mt-1"
                  data-oid="j9eg8x7"
                >
                  {weight}
                </p>
              )}
            </div>
            <div
              className="flex items-center justify-between mt-auto pt-2"
              data-oid="c.cd85-"
            >
              <p className="font-semibold" data-oid="hq2t4fg">
                ${price.toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
                data-oid="p_rydas"
              >
                <ShoppingCart className="h-4 w-4" data-oid="aq:ns:m" />
                <span className="sr-only" data-oid="3mwcqwq">
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
