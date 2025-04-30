
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/contexts/WishlistContext";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const cartItemCount = 0; // This would be connected to your cart state
  const { wishlist } = useWishlist();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="grid gap-6 py-6">
                <div className="grid gap-3">
                  <Link to="/" className="text-lg font-semibold">Home</Link>
                  <Link to="/all-products" className="text-lg font-semibold">All Products</Link>
                  <Link to="/canadian-products" className="text-lg font-semibold text-accent">Canadian Products</Link>
                  <Link to="/wishlist" className="text-lg font-semibold">My Wishlist</Link>
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Categories</h3>
                    <Link to="/category/produce" className="text-sm">Produce</Link>
                    <Link to="/category/dairy" className="text-sm">Dairy</Link>
                    <Link to="/category/bakery" className="text-sm">Bakery</Link>
                    <Link to="/category/meat" className="text-sm">Meat & Poultry</Link>
                    <Link to="/category/pantry" className="text-sm">Pantry</Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-forest rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl">Maple Leaf Market</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium hover:text-forest">Home</Link>
          <Link to="/all-products" className="font-medium hover:text-forest">All Products</Link>
          <Link to="/canadian-products" className="font-medium text-accent hover:text-accent/80">Canadian Products</Link>
          <Link to="/wishlist" className="font-medium hover:text-forest">Wishlist</Link>
        </div>

        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full">
                  {wishlist.length}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
