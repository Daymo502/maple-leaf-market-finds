
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="canadian-badge">
                <div className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"></div>
                <span>Proudly Canadian</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Fresh & Local, <br />
              <span className="text-forest">Delivered to You</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover the best Canadian-made grocery products, sourced from local farmers and producers across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/all-products">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/canadian-products">
                  Explore Canadian Products
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Canadian landscape with farm" 
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm">Supporting local farmers and producers across Canada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
