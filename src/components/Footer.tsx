import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12" data-oid="8lvd._.">
      <div className="container mx-auto px-4" data-oid="cuywbxh">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="w88fvw-"
        >
          <div data-oid="v7lg2xl">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              data-oid="8axwzih"
            >
              <div className="relative w-6 h-6" data-oid="xi0600t">
                <div
                  className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                  data-oid="1ne1hdv"
                >
                  <div
                    className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"
                    data-oid="ubk87m5"
                  ></div>
                </div>
              </div>
              <span
                className="font-display font-bold text-lg"
                data-oid="v4d:pxl"
              >
                Maple Leaf Market
              </span>
            </Link>
            <p className="text-sm text-muted-foreground" data-oid="9y.whmw">
              Your source for fresh, local Canadian products delivered right to
              your door.
            </p>
          </div>

          <div data-oid="z1c161-">
            <h3 className="font-semibold mb-4" data-oid=".ui:.96">
              Shop
            </h3>
            <ul className="space-y-2 text-sm" data-oid="ln138ws">
              <li data-oid="_npj3t4">
                <Link
                  to="/all-products"
                  className="hover:text-forest"
                  data-oid="4v_n:6-"
                >
                  All Products
                </Link>
              </li>
              <li data-oid="-u_n0g4">
                <Link
                  to="/canadian-products"
                  className="hover:text-forest"
                  data-oid="1rr466i"
                >
                  Canadian Products
                </Link>
              </li>
              <li data-oid="m8kmxwb">
                <Link
                  to="/category/produce"
                  className="hover:text-forest"
                  data-oid="nf6:_:x"
                >
                  Fresh Produce
                </Link>
              </li>
              <li data-oid="ni2k..1">
                <Link
                  to="/category/dairy"
                  className="hover:text-forest"
                  data-oid="019wc5a"
                >
                  Dairy
                </Link>
              </li>
              <li data-oid="ewe7:w8">
                <Link
                  to="/category/bakery"
                  className="hover:text-forest"
                  data-oid="bv-qy52"
                >
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="_t0o-35">
            <h3 className="font-semibold mb-4" data-oid="h.0fnt1">
              About
            </h3>
            <ul className="space-y-2 text-sm" data-oid="pz76jx9">
              <li data-oid="k2.ozxm">
                <Link
                  to="/about"
                  className="hover:text-forest"
                  data-oid="656ao.m"
                >
                  Our Story
                </Link>
              </li>
              <li data-oid="pgiw-l:">
                <Link
                  to="/local-producers"
                  className="hover:text-forest"
                  data-oid="p62j1:c"
                >
                  Meet Our Producers
                </Link>
              </li>
              <li data-oid="i0tqv_z">
                <Link
                  to="/sustainability"
                  className="hover:text-forest"
                  data-oid="x3k2h:o"
                >
                  Sustainability Commitment
                </Link>
              </li>
              <li data-oid=":t97_ea">
                <Link
                  to="/careers"
                  className="hover:text-forest"
                  data-oid="od4e7-o"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="soprhjb">
            <h3 className="font-semibold mb-4" data-oid="ot-m:ye">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm" data-oid="j6xs747">
              <li data-oid="2q3jz2m">
                <Link
                  to="/contact"
                  className="hover:text-forest"
                  data-oid="kg10clq"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid=":.3r:ff">
                <Link
                  to="/faq"
                  className="hover:text-forest"
                  data-oid="z.0.ubs"
                >
                  FAQs
                </Link>
              </li>
              <li data-oid="1ri..mo">
                <Link
                  to="/shipping"
                  className="hover:text-forest"
                  data-oid="c4zsvfw"
                >
                  Shipping Policy
                </Link>
              </li>
              <li data-oid="ots:j68">
                <Link
                  to="/returns"
                  className="hover:text-forest"
                  data-oid="c__ojrn"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-oid="br3bt7k">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            data-oid="nj464f2"
          >
            <p className="text-sm text-muted-foreground" data-oid="_ki9c.e">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6" data-oid="ewuhquu">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="ozi-m5s"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="82i81._"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
