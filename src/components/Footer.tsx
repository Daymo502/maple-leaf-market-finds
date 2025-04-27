
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-forest rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-maple rounded-sm rotate-45 transform"></div>
                </div>
              </div>
              <span className="font-display font-bold text-lg">Maple Leaf Market</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your source for fresh, local Canadian products delivered right to your door.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/all-products" className="hover:text-forest">All Products</Link></li>
              <li><Link to="/canadian-products" className="hover:text-forest">Canadian Products</Link></li>
              <li><Link to="/category/produce" className="hover:text-forest">Fresh Produce</Link></li>
              <li><Link to="/category/dairy" className="hover:text-forest">Dairy</Link></li>
              <li><Link to="/category/bakery" className="hover:text-forest">Bakery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-forest">Our Story</Link></li>
              <li><Link to="/local-producers" className="hover:text-forest">Meet Our Producers</Link></li>
              <li><Link to="/sustainability" className="hover:text-forest">Sustainability Commitment</Link></li>
              <li><Link to="/careers" className="hover:text-forest">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-forest">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-forest">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-forest">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-forest">Returns & Refunds</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Maple Leaf Market. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-forest">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-forest">
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
