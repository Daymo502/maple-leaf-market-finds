
import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "sonner";

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  isCanadian?: boolean;
  category: string;
  weight?: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (product: WishlistItem) => {
    if (!isInWishlist(product.id)) {
      setWishlist((prev) => [...prev, product]);
      toast.success(`${product.name} added to your wishlist`);
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => {
      const filtered = prev.filter((item) => item.id !== productId);
      const removedItem = prev.find(item => item.id === productId);
      if (removedItem) {
        toast.info(`${removedItem.name} removed from your wishlist`);
      }
      return filtered;
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
