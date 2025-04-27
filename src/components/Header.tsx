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
      data-oid="83o72z_"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="ic_ayrw"
      >
        <div className="flex items-center gap-2 md:gap-4" data-oid="w_s7lof">
          <Sheet data-oid="b8s4sa0">
            <SheetTrigger asChild data-oid=".4p:jlv">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-oid="qvrzcvv"
              >
                <Menu className="h-5 w-5" data-oid="6:soaqn" />
                <span className="sr-only" data-oid="8s1.mmd">
                  Menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]" data-oid="9:nr7ac">
              <div className="grid gap-6 py-6" data-oid="w_xzfpq">
                <div className="grid gap-3" data-oid="ho4twpf">
                  <Link
                    to="/"
                    className="text-lg font-semibold"
                    data-oid="9_p3:tt"
                  >
                    Home
                  </Link>
                  <Link
                    to="/all-products"
                    className="text-lg font-semibold"
                    data-oid="la.driq"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/canadian-products"
                    className="text-lg font-semibold text-accent"
                    data-oid="x7rd13."
                  >
                    Canadian Products
                  </Link>
                  <div className="grid gap-1" data-oid="5gyp7d4">
                    <h3 className="font-semibold" data-oid="nmg4bi5">
                      Categories
                    </h3>
                    <Link
                      to="/category/produce"
                      className="text-sm"
                      data-oid=".izj2y4"
                    >
                      Produce
                    </Link>
                    <Link
                      to="/category/dairy"
                      className="text-sm"
                      data-oid=".63uljc"
                    >
                      Dairy
                    </Link>
                    <Link
                      to="/category/bakery"
                      className="text-sm"
                      data-oid="cf_elxt"
                    >
                      Bakery
                    </Link>
                    <Link
                      to="/category/meat"
                      className="text-sm"
                      data-oid="exs3q_i"
                    >
                      Meat & Poultry
                    </Link>
                    <Link
                      to="/category/pantry"
                      className="text-sm"
                      data-oid="3wy4:br"
                    >
                      Pantry
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2" data-oid="ps7yz4v">
            <div className="relative w-8 h-8" data-oid="fo3:vu3">
              <div
                className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                data-oid="kop05t9"
              >
                <div
                  className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"
                  data-oid="5zthz5:"
                ></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl" data-oid="u3kltu3">
              Maple Leaf Market
            </span>
          </Link>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="_48mgud"
        >
          <Link
            to="/"
            className="font-medium hover:text-forest"
            data-oid="_q11b7z"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="font-medium hover:text-forest"
            data-oid="lcc22bb"
          >
            All Products
          </Link>
          <Link
            to="/canadian-products"
            className="font-medium text-accent hover:text-accent/80"
            data-oid="j:zil4c"
          >
            Canadian Products
          </Link>
        </div>

        <div className="flex items-center gap-4" data-oid="4jxy_gm">
          <form
            className="hidden md:flex relative w-full max-w-sm items-center"
            data-oid=".a.gq_l"
          >
            <Search
              className="absolute left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="if_u5e9"
            />

            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              data-oid="giau6j."
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="jzn4jkh"
          >
            <Search className="h-5 w-5" data-oid="p:d:a1-" />
            <span className="sr-only" data-oid="fy9s5e6">
              Search
            </span>
          </Button>

          <Link to="/cart" data-oid="p8.:u5i">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-oid="jtbww1x"
            >
              <ShoppingCart className="h-5 w-5" data-oid="inkguuu" />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full"
                  data-oid=".521825"
                >
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only" data-oid="3sdgjrd">
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
