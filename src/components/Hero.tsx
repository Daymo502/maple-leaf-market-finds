import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted" data-oid=".6q3l43">
      <div className="container mx-auto px-4 py-16 md:py-24" data-oid="zxphz14">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-oid="2uw9ybc"
        >
          <div className="space-y-6 animate-fade-in" data-oid="t2znlgr">
            <div className="inline-block" data-oid="e-63dsg">
              <div className="canadian-badge" data-oid="k775wn4">
                <div
                  className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                  data-oid="j9qwtnu"
                ></div>
                <span data-oid="1ekf_ll">Proudly Canadian</span>
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              data-oid="6-uj24r"
            >
              Fresh & Local, <br data-oid="sjgh.uc" />
              <span className="text-forest" data-oid="z_s9q9j">
                Delivered to You
              </span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-md"
              data-oid="2wu9pvi"
            >
              Discover the best Canadian-made grocery products, sourced from
              local farmers and producers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-oid="l5jv1ex">
              <Button asChild size="lg" className="gap-2" data-oid="mfcmxv8">
                <Link to="/all-products" data-oid="wur35e4">
                  Shop Now
                  <ArrowRight className="h-4 w-4" data-oid="77vzvxf" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-oid="6pm6qne">
                <Link to="/canadian-products" data-oid="sbmuush">
                  Explore Canadian Products
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="relative h-64 md:h-auto rounded-xl overflow-hidden animate-scale-in"
            data-oid="8c3pbve"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Canadian landscape with farm"
              className="object-cover w-full h-full rounded-xl"
              data-oid="4lr:6hc"
            />

            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              data-oid="siqqoaq"
            >
              <p className="text-white text-sm" data-oid="zet90mz">
                Supporting local farmers and producers across Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
