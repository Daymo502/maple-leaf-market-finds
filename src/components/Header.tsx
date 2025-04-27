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
      data-oid="8j01rwm"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="ptamaya"
      >
        <div className="flex items-center gap-2 md:gap-4" data-oid="n2:o6_c">
          <Sheet data-oid="72z9bhn">
            <SheetTrigger asChild data-oid="loqk6z:">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-oid="7xujijb"
              >
                <Menu className="h-5 w-5" data-oid=":8s-i.g" />
                <span className="sr-only" data-oid="44ixjjt">
                  Menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]" data-oid="9uie2rc">
              <div className="grid gap-6 py-6" data-oid="zasrpsr">
                <div className="grid gap-3" data-oid="82rx16s">
                  <Link
                    to="/"
                    className="text-lg font-semibold"
                    data-oid="z1e4oan"
                  >
                    Home
                  </Link>
                  <Link
                    to="/all-products"
                    className="text-lg font-semibold"
                    data-oid="-t.rcpl"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/canadian-products"
                    className="text-lg font-semibold text-accent"
                    data-oid="a.e0r45"
                  >
                    Canadian Products
                  </Link>
                  <div className="grid gap-1" data-oid="b_4h:cf">
                    <h3 className="font-semibold" data-oid="dg2ftay">
                      Categories
                    </h3>
                    <Link
                      to="/category/produce"
                      className="text-sm"
                      data-oid="wx5:z1u"
                    >
                      Produce
                    </Link>
                    <Link
                      to="/category/dairy"
                      className="text-sm"
                      data-oid="zb1j06i"
                    >
                      Dairy
                    </Link>
                    <Link
                      to="/category/bakery"
                      className="text-sm"
                      data-oid="l64tngk"
                    >
                      Bakery
                    </Link>
                    <Link
                      to="/category/meat"
                      className="text-sm"
                      data-oid="d7jxc4r"
                    >
                      Meat & Poultry
                    </Link>
                    <Link
                      to="/category/pantry"
                      className="text-sm"
                      data-oid="xwozbje"
                    >
                      Pantry
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2" data-oid="usg5xdo">
            <div className="relative w-8 h-8" data-oid="0sj6:vx">
              <div
                className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                data-oid="obq4sbs"
              >
                <div
                  className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"
                  data-oid="avqpjp8"
                ></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl" data-oid=":ipao3x">
              Maple Leaf Market
            </span>
          </Link>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="8tymt8b"
        >
          <Link
            to="/"
            className="font-medium hover:text-forest"
            data-oid="wm014rz"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="font-medium hover:text-forest"
            data-oid="b5ui71a"
          >
            All Products
          </Link>
          <Link
            to="/canadian-products"
            className="font-medium text-accent hover:text-accent/80"
            data-oid="bz1v7lt"
          >
            Canadian Products
          </Link>
        </div>

        <div className="flex items-center gap-4" data-oid="al.mh8c">
          <form
            className="hidden md:flex relative w-full max-w-sm items-center"
            data-oid="0ldt5ir"
          >
            <Search
              className="absolute left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="uh3.kqu"
            />

            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              data-oid=":yt2mbu"
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="xo:4iwl"
          >
            <Search className="h-5 w-5" data-oid="4buhotm" />
            <span className="sr-only" data-oid="u0yv594">
              Search
            </span>
          </Button>

          <Link to="/cart" data-oid="ugoc-6h">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-oid="yjk3_8v"
            >
              <ShoppingCart className="h-5 w-5" data-oid="rh8r20q" />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full"
                  data-oid="6y_b_t9"
                >
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only" data-oid="ax7vcc8">
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
