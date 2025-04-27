import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted" data-oid="70cbs1s">
      <div className="container mx-auto px-4 py-16 md:py-24" data-oid="zvskg_h">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-oid="s3vr457"
        >
          <div className="space-y-6 animate-fade-in" data-oid="arzgcry">
            <div className="inline-block" data-oid="v24a6a6">
              <div className="canadian-badge" data-oid="kt_cr3j">
                <div
                  className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                  data-oid="7jics:j"
                ></div>
                <span data-oid="9:l1w24">Proudly Canadian</span>
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              data-oid="3rtl1ju"
            >
              Fresh & Local, <br data-oid="4zx46z9" />
              <span className="text-forest" data-oid="47ve_w5">
                Delivered to You
              </span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-md"
              data-oid="lnmv._-"
            >
              Discover the best Canadian-made grocery products, sourced from
              local farmers and producers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-oid="8y:uis7">
              <Button asChild size="lg" className="gap-2" data-oid="j3bifam">
                <Link to="/all-products" data-oid="r_4n6wv">
                  Shop Now
                  <ArrowRight className="h-4 w-4" data-oid="6snvh:n" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-oid="-0xrc4b">
                <Link to="/canadian-products" data-oid="0eoi:nc">
                  Explore Canadian Products
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="relative h-64 md:h-auto rounded-xl overflow-hidden animate-scale-in"
            data-oid="h.qj:wh"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Canadian landscape with farm"
              className="object-cover w-full h-full rounded-xl"
              data-oid="irx7967"
            />

            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              data-oid="08hxbgk"
            >
              <p className="text-white text-sm" data-oid="ote51:6">
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
