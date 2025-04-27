import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted" data-oid="9tycftl">
      <div className="container mx-auto px-4 py-16 md:py-24" data-oid="vw3ewt.">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-oid="q17afmr"
        >
          <div className="space-y-6 animate-fade-in" data-oid="w:uc0j3">
            <div className="inline-block" data-oid="16i111a">
              <div className="canadian-badge" data-oid="z_nlsuk">
                <div
                  className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                  data-oid="2thwhnu"
                ></div>
                <span data-oid="v.ig_zg">Proudly Canadian</span>
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              data-oid="7cxto9k"
            >
              Fresh & Local, <br data-oid="bi.6k5f" />
              <span className="text-forest" data-oid="un_30a.">
                Delivered to You
              </span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-md"
              data-oid=":oik0.g"
            >
              Discover the best Canadian-made grocery products, sourced from
              local farmers and producers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-oid="gi5ccre">
              <Button asChild size="lg" className="gap-2" data-oid="ltm:_wx">
                <Link to="/all-products" data-oid="mopsfxl">
                  Shop Now
                  <ArrowRight className="h-4 w-4" data-oid="dua3e5k" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-oid="jv.bi5y">
                <Link to="/canadian-products" data-oid="_d4.gk3">
                  Explore Canadian Products
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="relative h-64 md:h-auto rounded-xl overflow-hidden animate-scale-in"
            data-oid="f.f75n2"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Canadian landscape with farm"
              className="object-cover w-full h-full rounded-xl"
              data-oid=":mo1f26"
            />

            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              data-oid="bw019i5"
            >
              <p className="text-white text-sm" data-oid="-erc8hl">
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
