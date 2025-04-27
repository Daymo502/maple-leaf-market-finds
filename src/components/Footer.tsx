import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12" data-oid="7f11:zt">
      <div className="container mx-auto px-4" data-oid="55-w::6">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="qb35eji"
        >
          <div data-oid="makyxcv">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              data-oid="5nc3lsx"
            >
              <div className="relative w-6 h-6" data-oid="plvklhi">
                <div
                  className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                  data-oid="j-xgucd"
                >
                  <div
                    className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"
                    data-oid="v0t84ph"
                  ></div>
                </div>
              </div>
              <span
                className="font-display font-bold text-lg"
                data-oid="405h.3m"
              >
                Maple Leaf Market
              </span>
            </Link>
            <p className="text-sm text-muted-foreground" data-oid="eg.nzlg">
              Your source for fresh, local Canadian products delivered right to
              your door.
            </p>
          </div>

          <div data-oid="ywnmt.y">
            <h3 className="font-semibold mb-4" data-oid=".16_c8n">
              Shop
            </h3>
            <ul className="space-y-2 text-sm" data-oid="gl8v1cz">
              <li data-oid="j0mwhsd">
                <Link
                  to="/all-products"
                  className="hover:text-forest"
                  data-oid="di7-kvx"
                >
                  All Products
                </Link>
              </li>
              <li data-oid="u1ci29u">
                <Link
                  to="/canadian-products"
                  className="hover:text-forest"
                  data-oid="d:82wou"
                >
                  Canadian Products
                </Link>
              </li>
              <li data-oid="ow3-9rz">
                <Link
                  to="/category/produce"
                  className="hover:text-forest"
                  data-oid="ss540ww"
                >
                  Fresh Produce
                </Link>
              </li>
              <li data-oid="k5ez9m9">
                <Link
                  to="/category/dairy"
                  className="hover:text-forest"
                  data-oid="0lej-z-"
                >
                  Dairy
                </Link>
              </li>
              <li data-oid="7te752g">
                <Link
                  to="/category/bakery"
                  className="hover:text-forest"
                  data-oid="gz4yy-2"
                >
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="phm.ll8">
            <h3 className="font-semibold mb-4" data-oid="r:mv8zj">
              About
            </h3>
            <ul className="space-y-2 text-sm" data-oid="gxtfjg6">
              <li data-oid="jcj:940">
                <Link
                  to="/about"
                  className="hover:text-forest"
                  data-oid="uapzm70"
                >
                  Our Story
                </Link>
              </li>
              <li data-oid="suitq2s">
                <Link
                  to="/local-producers"
                  className="hover:text-forest"
                  data-oid="pj70:d."
                >
                  Meet Our Producers
                </Link>
              </li>
              <li data-oid="1l0ra2y">
                <Link
                  to="/sustainability"
                  className="hover:text-forest"
                  data-oid="pj9sqe:"
                >
                  Sustainability Commitment
                </Link>
              </li>
              <li data-oid="nrg0z51">
                <Link
                  to="/careers"
                  className="hover:text-forest"
                  data-oid="50hy-nb"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="px7pk_o">
            <h3 className="font-semibold mb-4" data-oid="u6c5nqn">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm" data-oid="6ty_5r7">
              <li data-oid="8gxwku6">
                <Link
                  to="/contact"
                  className="hover:text-forest"
                  data-oid="h_f7vdq"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="txp:lz.">
                <Link
                  to="/faq"
                  className="hover:text-forest"
                  data-oid="ag.zg93"
                >
                  FAQs
                </Link>
              </li>
              <li data-oid="i_x46fb">
                <Link
                  to="/shipping"
                  className="hover:text-forest"
                  data-oid="4dhfdli"
                >
                  Shipping Policy
                </Link>
              </li>
              <li data-oid="2q70106">
                <Link
                  to="/returns"
                  className="hover:text-forest"
                  data-oid="n-.i:9e"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-oid="qdlxxem">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            data-oid="0sgwn5."
          >
            <p className="text-sm text-muted-foreground" data-oid="3n:1sqp">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6" data-oid="qm6oe0w">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="u8s316c"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="2c2llw2"
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
