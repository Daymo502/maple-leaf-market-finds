import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12" data-oid="h22ehbv">
      <div className="container mx-auto px-4" data-oid="vf3jnw-">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="08cmtx8"
        >
          <div data-oid="1vgnlur">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              data-oid="khioqz6"
            >
              <div className="relative w-6 h-6" data-oid="a9cx0mf">
                <div
                  className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                  data-oid="w24jn74"
                >
                  <div
                    className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"
                    data-oid="_o0-fh4"
                  ></div>
                </div>
              </div>
              <span
                className="font-display font-bold text-lg"
                data-oid="nkj.-x:"
              >
                Maple Leaf Market
              </span>
            </Link>
            <p className="text-sm text-muted-foreground" data-oid="rwez-gu">
              Your source for fresh, local Canadian products delivered right to
              your door.
            </p>
          </div>

          <div data-oid="7lfpo-1">
            <h3 className="font-semibold mb-4" data-oid="hoa7fw3">
              Shop
            </h3>
            <ul className="space-y-2 text-sm" data-oid="0ykloju">
              <li data-oid="2yw7hp3">
                <Link
                  to="/all-products"
                  className="hover:text-forest"
                  data-oid="xnqfrdz"
                >
                  All Products
                </Link>
              </li>
              <li data-oid="5q6pj8t">
                <Link
                  to="/canadian-products"
                  className="hover:text-forest"
                  data-oid="dk1ysbs"
                >
                  Canadian Products
                </Link>
              </li>
              <li data-oid="p:7owkp">
                <Link
                  to="/category/produce"
                  className="hover:text-forest"
                  data-oid="k.19eiz"
                >
                  Fresh Produce
                </Link>
              </li>
              <li data-oid="scq-9nn">
                <Link
                  to="/category/dairy"
                  className="hover:text-forest"
                  data-oid="t6nq_g."
                >
                  Dairy
                </Link>
              </li>
              <li data-oid="9lh5p_p">
                <Link
                  to="/category/bakery"
                  className="hover:text-forest"
                  data-oid="p1a6z7a"
                >
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="y2sz150">
            <h3 className="font-semibold mb-4" data-oid=".ooojfr">
              About
            </h3>
            <ul className="space-y-2 text-sm" data-oid="tid5vtk">
              <li data-oid="bcyr5o2">
                <Link
                  to="/about"
                  className="hover:text-forest"
                  data-oid="fbv:-7u"
                >
                  Our Story
                </Link>
              </li>
              <li data-oid="3:zf.si">
                <Link
                  to="/local-producers"
                  className="hover:text-forest"
                  data-oid="g_5w9ar"
                >
                  Meet Our Producers
                </Link>
              </li>
              <li data-oid="umog.qn">
                <Link
                  to="/sustainability"
                  className="hover:text-forest"
                  data-oid="uim4:hg"
                >
                  Sustainability Commitment
                </Link>
              </li>
              <li data-oid="p-1dv.s">
                <Link
                  to="/careers"
                  className="hover:text-forest"
                  data-oid="xb4lioy"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="u95yy78">
            <h3 className="font-semibold mb-4" data-oid="5rm_we-">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm" data-oid="-udm8m_">
              <li data-oid="vx7ijb6">
                <Link
                  to="/contact"
                  className="hover:text-forest"
                  data-oid=":eksh6t"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="mbw:0u2">
                <Link
                  to="/faq"
                  className="hover:text-forest"
                  data-oid=".nmmf9t"
                >
                  FAQs
                </Link>
              </li>
              <li data-oid="ct074f_">
                <Link
                  to="/shipping"
                  className="hover:text-forest"
                  data-oid="4.w794p"
                >
                  Shipping Policy
                </Link>
              </li>
              <li data-oid=".dd81he">
                <Link
                  to="/returns"
                  className="hover:text-forest"
                  data-oid="a_he_ce"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-oid="y_nlepn">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            data-oid="f:j8jnp"
          >
            <p className="text-sm text-muted-foreground" data-oid="1-e0i6m">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6" data-oid="oi5484g">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="gaps68o"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="h3n.d0-"
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
