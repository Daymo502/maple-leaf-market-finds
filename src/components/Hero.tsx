import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted" data-oid="u.dnsww">
      <div className="container mx-auto px-4 py-16 md:py-24" data-oid="6w_zip8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-oid="78626-q"
        >
          <div className="space-y-6 animate-fade-in" data-oid="-cwz3ji">
            <div className="inline-block" data-oid="5gxg3ij">
              <div className="canadian-badge" data-oid="7k3j561">
                <div
                  className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                  data-oid=":7gnd0:"
                ></div>
                <span data-oid="1zd.b0g">Proudly Canadian</span>
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              data-oid="o8g9-l0"
            >
              Fresh & Local, <br data-oid="a9yc87h" />
              <span className="text-forest" data-oid="q6jy_mi">
                Delivered to You
              </span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-md"
              data-oid="_9plz:6"
            >
              Discover the best Canadian-made grocery products, sourced from
              local farmers and producers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-oid=":290p_y">
              <Button asChild size="lg" className="gap-2" data-oid="u6kkl0m">
                <Link to="/all-products" data-oid="z5lfjwl">
                  Shop Now
                  <ArrowRight className="h-4 w-4" data-oid="12ed99w" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-oid="dbsv93x">
                <Link to="/canadian-products" data-oid="43.5sn1">
                  Explore Canadian Products
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="relative h-64 md:h-auto rounded-xl overflow-hidden animate-scale-in"
            data-oid="0soxe45"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Canadian landscape with farm"
              className="object-cover w-full h-full rounded-xl"
              data-oid=":e1kwrq"
            />

            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
              data-oid="75vx:e6"
            >
              <p className="text-white text-sm" data-oid="5lyis6d">
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
