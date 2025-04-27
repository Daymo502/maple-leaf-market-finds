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
      data-oid="u3t.ckf"
    >
      <Link to={`/product/${id}`} className="block h-full" data-oid="4rz17o9">
        <div className="product-card h-full flex flex-col" data-oid="b14d6-0">
          <div className="relative" data-oid="6qeed7g">
            <img
              src={image}
              alt={name}
              className="product-image"
              data-oid="898g3ir"
            />

            {isCanadian && (
              <div className="absolute top-2 right-2" data-oid="jln2.o1">
                <CanadianBadge size="sm" data-oid="-u.w.i1" />
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow" data-oid="elry4eh">
            <div className="mb-2" data-oid="xppskl_">
              <p className="text-xs text-muted-foreground" data-oid="gj:if3a">
                {category}
              </p>
              <h3
                className="font-medium text-sm sm:text-base line-clamp-2"
                data-oid="wf_6b30"
              >
                {name}
              </h3>
              {weight && (
                <p
                  className="text-xs text-muted-foreground mt-1"
                  data-oid="3prahw4"
                >
                  {weight}
                </p>
              )}
            </div>
            <div
              className="flex items-center justify-between mt-auto pt-2"
              data-oid="0blng26"
            >
              <p className="font-semibold" data-oid="2hmvgo-">
                ${price.toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full h-8 w-8 p-0"
                onClick={handleAddToCart}
                data-oid="c-6myry"
              >
                <ShoppingCart className="h-4 w-4" data-oid="gpw:d.9" />
                <span className="sr-only" data-oid="xy1izjt">
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
