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
      data-oid="xr-_fs:"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="a:7gpv-"
      >
        <div className="flex items-center gap-2 md:gap-4" data-oid="y0w03b4">
          <Sheet data-oid="03c3ijq">
            <SheetTrigger asChild data-oid="rv5p4sf">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-oid="scb1gcc"
              >
                <Menu className="h-5 w-5" data-oid="hwkr:_8" />
                <span className="sr-only" data-oid="etup0gn">
                  Menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]" data-oid=".7zfo-z">
              <div className="grid gap-6 py-6" data-oid="7r:3wix">
                <div className="grid gap-3" data-oid="lbp_1b7">
                  <Link
                    to="/"
                    className="text-lg font-semibold"
                    data-oid="p_4p.bt"
                  >
                    Home
                  </Link>
                  <Link
                    to="/all-products"
                    className="text-lg font-semibold"
                    data-oid="r_hatnv"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/canadian-products"
                    className="text-lg font-semibold text-accent"
                    data-oid="tcnyf:b"
                  >
                    Canadian Products
                  </Link>
                  <div className="grid gap-1" data-oid="a6xtxod">
                    <h3 className="font-semibold" data-oid="978_ljk">
                      Categories
                    </h3>
                    <Link
                      to="/category/produce"
                      className="text-sm"
                      data-oid=".-j-u6a"
                    >
                      Produce
                    </Link>
                    <Link
                      to="/category/dairy"
                      className="text-sm"
                      data-oid="gpxidfn"
                    >
                      Dairy
                    </Link>
                    <Link
                      to="/category/bakery"
                      className="text-sm"
                      data-oid="qlt2wbn"
                    >
                      Bakery
                    </Link>
                    <Link
                      to="/category/meat"
                      className="text-sm"
                      data-oid="x1p2c:o"
                    >
                      Meat & Poultry
                    </Link>
                    <Link
                      to="/category/pantry"
                      className="text-sm"
                      data-oid="q.sug16"
                    >
                      Pantry
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2" data-oid="bssvvhk">
            <div className="relative w-8 h-8" data-oid="tzh2tr_">
              <div
                className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                data-oid="v3wp671"
              >
                <div
                  className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"
                  data-oid="vqe:div"
                ></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl" data-oid="ly-qw.7">
              Maple Leaf Market
            </span>
          </Link>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="34664c5"
        >
          <Link
            to="/"
            className="font-medium hover:text-forest"
            data-oid="_worpux"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="font-medium hover:text-forest"
            data-oid="kptxdj9"
          >
            All Products
          </Link>
          <Link
            to="/canadian-products"
            className="font-medium text-accent hover:text-accent/80"
            data-oid="aubc9ne"
          >
            Canadian Products
          </Link>
        </div>

        <div className="flex items-center gap-4" data-oid="r61-mq0">
          <form
            className="hidden md:flex relative w-full max-w-sm items-center"
            data-oid="4lwkn5e"
          >
            <Search
              className="absolute left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="spstn57"
            />

            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              data-oid="usq4tx5"
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="vp:_4ff"
          >
            <Search className="h-5 w-5" data-oid="xeu6tbg" />
            <span className="sr-only" data-oid="-_6d4ml">
              Search
            </span>
          </Button>

          <Link to="/cart" data-oid="252s1h6">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-oid="6kxi41b"
            >
              <ShoppingCart className="h-5 w-5" data-oid="ie8fyw0" />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full"
                  data-oid="cnjt-0j"
                >
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only" data-oid="3:-dvbx">
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
