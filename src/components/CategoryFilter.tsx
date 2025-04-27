import { Button } from "@/components/ui/button";
import { Check, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
  onCanadianOnlyChange: (canadianOnly: boolean) => void;
  selectedCategory: string;
  canadianOnly: boolean;
}

const categories = [
  { id: "all", name: "All Products" },
  { id: "produce", name: "Produce" },
  { id: "dairy", name: "Dairy" },
  { id: "bakery", name: "Bakery" },
  { id: "meat", name: "Meat & Poultry" },
  { id: "pantry", name: "Pantry" },
];

const CategoryFilter = ({
  onCategoryChange,
  onCanadianOnlyChange,
  selectedCategory,
  canadianOnly,
}: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Filter */}
      <div className="md:hidden" data-oid="bdhp6ws">
        <Drawer open={isOpen} onOpenChange={setIsOpen} data-oid="vj05wo0">
          <DrawerTrigger asChild data-oid="i8-0x4b">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              data-oid="vp_r843"
            >
              <Filter className="h-4 w-4" data-oid="iipjrc3" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent data-oid="k04kfqd">
            <div className="p-4 space-y-6" data-oid="twphpl.">
              <div data-oid="6j1m-t.">
                <h3 className="font-semibold mb-3" data-oid="-6o3hfk">
                  Categories
                </h3>
                <div className="space-y-2" data-oid="sqelz29">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted",
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                      data-oid=":7kbv6n"
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" data-oid="3evrymc" />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="rdpc3.n">
                <h3 className="font-semibold mb-3" data-oid="x8csd72">
                  Origin
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="ix_91on"
                >
                  <label
                    htmlFor="canadian-mobile"
                    className="text-sm flex items-center gap-2"
                    data-oid="tslwjq5"
                  >
                    <div
                      className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"
                      data-oid="41zqfri"
                    ></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                    data-oid="_lr07tu"
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6" data-oid="u6rxq95">
        <div data-oid=".h413gz">
          <h3 className="font-semibold mb-3" data-oid="9s1q:k4">
            Categories
          </h3>
          <div className="space-y-1" data-oid="x1rhbno">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium",
                )}
                onClick={() => onCategoryChange(category.id)}
                data-oid="qypkuc:"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div data-oid="5lsa1j0">
          <h3 className="font-semibold mb-3" data-oid="ogvnk7r">
            Origin
          </h3>
          <div className="flex items-center gap-2" data-oid="oncglpq">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
              data-oid="dyb3-us"
            />

            <label
              htmlFor="canadian"
              className="text-sm flex items-center gap-2 cursor-pointer"
              data-oid="3lmlmvn"
            >
              <div
                className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="pj8zkft"
              ></div>
              Show Canadian products only
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
