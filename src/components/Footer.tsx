import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12" data-oid="ja_nx3q">
      <div className="container mx-auto px-4" data-oid="sa5k2ds">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="..3.0b."
        >
          <div data-oid="nn7zqiq">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
              data-oid="_tt00m7"
            >
              <div className="relative w-6 h-6" data-oid="m1v-m.h">
                <div
                  className="absolute inset-0 bg-forest rounded-full flex items-center justify-center"
                  data-oid=":qv1_xu"
                >
                  <div
                    className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"
                    data-oid="_ahusd0"
                  ></div>
                </div>
              </div>
              <span
                className="font-display font-bold text-lg"
                data-oid="-2bj855"
              >
                Maple Leaf Market
              </span>
            </Link>
            <p className="text-sm text-muted-foreground" data-oid="u5q5_ln">
              Your source for fresh, local Canadian products delivered right to
              your door.
            </p>
          </div>

          <div data-oid="oljfbar">
            <h3 className="font-semibold mb-4" data-oid="i1cdxjm">
              Shop
            </h3>
            <ul className="space-y-2 text-sm" data-oid="rra7i05">
              <li data-oid="-a.nc6a">
                <Link
                  to="/all-products"
                  className="hover:text-forest"
                  data-oid="ul8ttpu"
                >
                  All Products
                </Link>
              </li>
              <li data-oid="xktugax">
                <Link
                  to="/canadian-products"
                  className="hover:text-forest"
                  data-oid="v1bw9.8"
                >
                  Canadian Products
                </Link>
              </li>
              <li data-oid="16t0pzl">
                <Link
                  to="/category/produce"
                  className="hover:text-forest"
                  data-oid="e7ljp1_"
                >
                  Fresh Produce
                </Link>
              </li>
              <li data-oid="xt_w_4e">
                <Link
                  to="/category/dairy"
                  className="hover:text-forest"
                  data-oid="uqo1dkp"
                >
                  Dairy
                </Link>
              </li>
              <li data-oid="dmpg_xe">
                <Link
                  to="/category/bakery"
                  className="hover:text-forest"
                  data-oid="x62ixcc"
                >
                  Bakery
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="m8m3gv_">
            <h3 className="font-semibold mb-4" data-oid="jju5vnt">
              About
            </h3>
            <ul className="space-y-2 text-sm" data-oid="z.lg89f">
              <li data-oid="wvcffy4">
                <Link
                  to="/about"
                  className="hover:text-forest"
                  data-oid="60mha4r"
                >
                  Our Story
                </Link>
              </li>
              <li data-oid="36q7sqp">
                <Link
                  to="/local-producers"
                  className="hover:text-forest"
                  data-oid="keb2t.-"
                >
                  Meet Our Producers
                </Link>
              </li>
              <li data-oid="fckx6zn">
                <Link
                  to="/sustainability"
                  className="hover:text-forest"
                  data-oid="ze-zo90"
                >
                  Sustainability Commitment
                </Link>
              </li>
              <li data-oid="-2t-uaw">
                <Link
                  to="/careers"
                  className="hover:text-forest"
                  data-oid="x1.8k2o"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div data-oid="dk-kakm">
            <h3 className="font-semibold mb-4" data-oid="mlzbw3g">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm" data-oid="pcupuzw">
              <li data-oid="h7c489h">
                <Link
                  to="/contact"
                  className="hover:text-forest"
                  data-oid="nhx3.:a"
                >
                  Contact Us
                </Link>
              </li>
              <li data-oid="-32w4_1">
                <Link
                  to="/faq"
                  className="hover:text-forest"
                  data-oid="1nj6:-o"
                >
                  FAQs
                </Link>
              </li>
              <li data-oid="s0d2wuz">
                <Link
                  to="/shipping"
                  className="hover:text-forest"
                  data-oid="uis18.5"
                >
                  Shipping Policy
                </Link>
              </li>
              <li data-oid="yh44yzl">
                <Link
                  to="/returns"
                  className="hover:text-forest"
                  data-oid="bickuf0"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border" data-oid=".qi6lha">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            data-oid="-qa0o2b"
          >
            <p className="text-sm text-muted-foreground" data-oid="nqxweeo">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6" data-oid="kuckyn9">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="dharayt"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-forest"
                data-oid="z_u:4pa"
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
