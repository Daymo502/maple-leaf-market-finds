import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const cartItemCount = 0; // This would be connected to your cart state

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      data-oid="62ywf5z"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="2j54m4l"
      >
        <div className="flex items-center gap-2 md:gap-4" data-oid="pb2v44-">
          <Sheet data-oid="baw-sd-">
            <SheetTrigger asChild data-oid="k57xu72">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-oid="l-60qj3"
              >
                <Menu className="h-5 w-5" data-oid="wzm3bd8" />
                <span className="sr-only" data-oid="_a1-zjq">
                  Menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]" data-oid="m61g:f:">
              <div className="grid gap-6 py-6" data-oid="6.yyi1y">
                <div className="grid gap-3" data-oid="0chcxp8">
                  <Link
                    to="/"
                    className="text-lg font-semibold"
                    data-oid="45nmy-7"
                  >
                    Home
                  </Link>
                  <Link
                    to="/all-products"
                    className="text-lg font-semibold"
                    data-oid="s_1zpox"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/canadian-products"
                    className="text-lg font-semibold text-accent"
                    data-oid="xe_ygtn"
                  >
                    Canadian Products
                  </Link>
                  <div className="grid gap-1" data-oid="fxjghqa">
                    <h3 className="font-semibold" data-oid="d3_v:6m">
                      Categories
                    </h3>
                    <Link
                      to="/category/produce"
                      className="text-sm"
                      data-oid="rsjyrn1"
                    >
                      Produce
                    </Link>
                    <Link
                      to="/category/dairy"
                      className="text-sm"
                      data-oid="o88wutk"
                    >
                      Dairy
                    </Link>
                    <Link
                      to="/category/bakery"
                      className="text-sm"
                      data-oid="1z3n9d6"
                    >
                      Bakery
                    </Link>
                    <Link
                      to="/category/meat"
                      className="text-sm"
                      data-oid="_s-2522"
                    >
                      Meat & Poultry
                    </Link>
                    <Link
                      to="/category/pantry"
                      className="text-sm"
                      data-oid="9udml7_"
                    >
                      Pantry
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2" data-oid="nrlfd5g">
            <div className="relative w-8 h-8" data-oid="ve4sgv7">
              <div
                className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                data-oid="5sv76zo"
              >
                <div
                  className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"
                  data-oid="0rfuwa8"
                ></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl" data-oid="8:v6mey">
              Maple Leaf Market
            </span>
          </Link>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="l33l6f-"
        >
          <Link
            to="/"
            className="font-medium hover:text-forest"
            data-oid="7g766wv"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="font-medium hover:text-forest"
            data-oid="2hd8o7_"
          >
            All Products
          </Link>
          <Link
            to="/canadian-products"
            className="font-medium text-accent hover:text-accent/80"
            data-oid="dz93un9"
          >
            Canadian Products
          </Link>
        </div>

        <div className="flex items-center gap-4" data-oid="2-48w54">
          <form
            className="hidden md:flex relative w-full max-w-sm items-center"
            data-oid="e1vf5m4"
          >
            <Search
              className="absolute left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="enwk105"
            />

            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              data-oid="-hqxlig"
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="2ag7eld"
          >
            <Search className="h-5 w-5" data-oid="ecvkm94" />
            <span className="sr-only" data-oid="q54qj7.">
              Search
            </span>
          </Button>

          <Link to="/cart" data-oid="24otlhy">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-oid="hzia-9h"
            >
              <ShoppingCart className="h-5 w-5" data-oid="qs5s48." />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full"
                  data-oid="7-sc7tt"
                >
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only" data-oid="jj7ui1g">
                Cart
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
