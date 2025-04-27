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
      data-oid="cevd2a3"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="pswv55y"
      >
        <div className="flex items-center gap-2 md:gap-4" data-oid="cc86iu_">
          <Sheet data-oid="f87pvqv">
            <SheetTrigger asChild data-oid="t1c1_lw">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-oid="i28ik0m"
              >
                <Menu className="h-5 w-5" data-oid="eu6jw6z" />
                <span className="sr-only" data-oid="jj1_vo8">
                  Menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]" data-oid="x75sgb0">
              <div className="grid gap-6 py-6" data-oid="rw3r5eo">
                <div className="grid gap-3" data-oid="o-27_9-">
                  <Link
                    to="/"
                    className="text-lg font-semibold"
                    data-oid="api34eo"
                  >
                    Home
                  </Link>
                  <Link
                    to="/all-products"
                    className="text-lg font-semibold"
                    data-oid="lwf80-p"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/canadian-products"
                    className="text-lg font-semibold text-accent"
                    data-oid="n9rg2.z"
                  >
                    Canadian Products
                  </Link>
                  <div className="grid gap-1" data-oid="sz..ad:">
                    <h3 className="font-semibold" data-oid="f7jizc4">
                      Categories
                    </h3>
                    <Link
                      to="/category/produce"
                      className="text-sm"
                      data-oid="-.qlkgs"
                    >
                      Produce
                    </Link>
                    <Link
                      to="/category/dairy"
                      className="text-sm"
                      data-oid="y049dts"
                    >
                      Dairy
                    </Link>
                    <Link
                      to="/category/bakery"
                      className="text-sm"
                      data-oid="-v6ijqw"
                    >
                      Bakery
                    </Link>
                    <Link
                      to="/category/meat"
                      className="text-sm"
                      data-oid="rnv9pi9"
                    >
                      Meat & Poultry
                    </Link>
                    <Link
                      to="/category/pantry"
                      className="text-sm"
                      data-oid="_fyzsye"
                    >
                      Pantry
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2" data-oid="xils8xr">
            <div className="relative w-8 h-8" data-oid="m-gbvi6">
              <div
                className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                data-oid="68o9t0u"
              >
                <div
                  className="w-4 h-4 bg-maple rounded-sm rotate-45 transform"
                  data-oid="wh6r2st"
                ></div>
              </div>
            </div>
            <span className="font-display font-bold text-xl" data-oid="uld1qgs">
              Maple Leaf Market
            </span>
          </Link>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="exiwk_m"
        >
          <Link
            to="/"
            className="font-medium hover:text-forest"
            data-oid="x33-op2"
          >
            Home
          </Link>
          <Link
            to="/all-products"
            className="font-medium hover:text-forest"
            data-oid="sibii9m"
          >
            All Products
          </Link>
          <Link
            to="/canadian-products"
            className="font-medium text-accent hover:text-accent/80"
            data-oid="ykqq5pv"
          >
            Canadian Products
          </Link>
        </div>

        <div className="flex items-center gap-4" data-oid="jn:kza0">
          <form
            className="hidden md:flex relative w-full max-w-sm items-center"
            data-oid="vavpmnw"
          >
            <Search
              className="absolute left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="5bfrimc"
            />

            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 rounded-full bg-muted"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              data-oid="4mwr8gz"
            />
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="7asbjly"
          >
            <Search className="h-5 w-5" data-oid="69dhbqr" />
            <span className="sr-only" data-oid="6gmn0gh">
              Search
            </span>
          </Button>

          <Link to="/cart" data-oid="fzdqnmi">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              data-oid="5qjx:2-"
            >
              <ShoppingCart className="h-5 w-5" data-oid=":n3.vhq" />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center bg-accent text-white rounded-full"
                  data-oid="q-5x2n4"
                >
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only" data-oid="u5.pz-s">
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
