import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12" data-oid="i2uwgm-">
      <div className="container mx-auto px-4" data-oid="xj47la0">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="p_xvt61"
        >
          <div data-oid="85vr:2.">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              data-oid="2saw-qu"
            >
              <div className="relative w-6 h-6" data-oid="6e3nr_0">
                <div
                  className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                  data-oid="1vw15rg"
                >
                  <div
                    className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"
                    data-oid="piedoib"
                  ></div>
                </div>
              </div>
              <span
                className="font-display font-bold text-lg"
                data-oid="aa4ls1r"
              >
                Maple Leaf Market
              </span>
            </Link>
            <p className="text-sm text-muted-foreground" data-oid="1h1wih:">
              Your source for fresh, local Canadian products delivered right to
              your door.
            </p>
          </div>

          <div data-oid="yg.dxt-">
            <h3 className="font-semibold mb-4" data-oid="xz742fb">
              Shop
            </h3>
            <ul className="space-y-2 text-sm" data-oid="eba7i:t">
              <li data-oid="nbn10d1">
                <Link
                  to="/all-products"
                  className="hover:text-forest"
                  data-oid=":zpg5rx"
                >
                  All Products
                </Link>
              </li>
              <li data-oid="4n-ld_y">
                <Link
                  to="/canadian-products"
                  className="hover:text-forest"
                  data-oid="e1a-5tq"
                >
                  Canadian Products
                </Link>
              </li>
              <li data-oid="ft8-.qv">
                <Link
                  to="/category/produce"
                  className="hover:text-forest"
                  data-oid="6418v4c"
                >
                  Fresh Produce
                </Link>
              </li>
              <li data-oid="79xfqos">
                <Link
                  to="/category/dairy"
                  className="hover:text-forest"
                  data-oid="6v5-ypp"
                >
                  Dairy
                </Link>
              </li>
              <li data-oid="yn26qgc">
                <Link
                  to="/category/bakery"
                  className="hover:text-forest"
                  data-oid="v9c39j."
                >
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="wkhwjmt">
            <h3 className="font-semibold mb-4" data-oid="7pso_li">
              About
            </h3>
            <ul className="space-y-2 text-sm" data-oid="msfr7qy">
              <li data-oid="0rp8mdg">
                <Link
                  to="/about"
                  className="hover:text-forest"
                  data-oid="-zeo4vx"
                >
                  Our Story
                </Link>
              </li>
              <li data-oid="y861g02">
                <Link
                  to="/local-producers"
                  className="hover:text-forest"
                  data-oid=":njynis"
                >
                  Meet Our Producers
                </Link>
              </li>
              <li data-oid="d0:0py3">
                <Link
                  to="/sustainability"
                  className="hover:text-forest"
                  data-oid="3y9e_hw"
                >
                  Sustainability Commitment
                </Link>
              </li>
              <li data-oid="-1b_i-q">
                <Link
                  to="/careers"
                  className="hover:text-forest"
                  data-oid="28g05u."
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid=":0_y0rv">
            <h3 className="font-semibold mb-4" data-oid="9acdvn5">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm" data-oid="d:1._mj">
              <li data-oid="auxh-et">
                <Link
                  to="/contact"
                  className="hover:text-forest"
                  data-oid="v37x:z1"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="pq:x723">
                <Link
                  to="/faq"
                  className="hover:text-forest"
                  data-oid="xx5zmcw"
                >
                  FAQs
                </Link>
              </li>
              <li data-oid="d2x-8te">
                <Link
                  to="/shipping"
                  className="hover:text-forest"
                  data-oid="3g7_pnv"
                >
                  Shipping Policy
                </Link>
              </li>
              <li data-oid="q.__xin">
                <Link
                  to="/returns"
                  className="hover:text-forest"
                  data-oid="ofk17fl"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-oid="p-udd-v">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            data-oid="vxq.xf2"
          >
            <p className="text-sm text-muted-foreground" data-oid="2x_vqzq">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6" data-oid="ke.2e1_">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="mu1coaq"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="ca6aqel"
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
