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
      <div className="md:hidden" data-oid="ku19vs7">
        <Drawer open={isOpen} onOpenChange={setIsOpen} data-oid="bf.npqx">
          <DrawerTrigger asChild data-oid="6javikm">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              data-oid="w7pezav"
            >
              <Filter className="h-4 w-4" data-oid="p6w.v__" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent data-oid="d0xqqsy">
            <div className="p-4 space-y-6" data-oid="5-vbf4u">
              <div data-oid="m6y4t6j">
                <h3 className="font-semibold mb-3" data-oid="z8o1uga">
                  Categories
                </h3>
                <div className="space-y-2" data-oid="k5orp43">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted",
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                      data-oid="9sdr268"
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" data-oid="wwb1e06" />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="lz1e4ka">
                <h3 className="font-semibold mb-3" data-oid=".14buo6">
                  Origin
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="nr_eyig"
                >
                  <label
                    htmlFor="canadian-mobile"
                    className="text-sm flex items-center gap-2"
                    data-oid=".jikili"
                  >
                    <div
                      className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"
                      data-oid="2wdvxl-"
                    ></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                    data-oid="xcbvlsb"
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6" data-oid="5cofrnz">
        <div data-oid=":60-8c.">
          <h3 className="font-semibold mb-3" data-oid="dp7h6t9">
            Categories
          </h3>
          <div className="space-y-1" data-oid="eg6nnq3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium",
                )}
                onClick={() => onCategoryChange(category.id)}
                data-oid="pisqf0x"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div data-oid="7i72lh0">
          <h3 className="font-semibold mb-3" data-oid="2709eim">
            Origin
          </h3>
          <div className="flex items-center gap-2" data-oid="ts.iyws">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
              data-oid="n01h3hk"
            />

            <label
              htmlFor="canadian"
              className="text-sm flex items-center gap-2 cursor-pointer"
              data-oid="grx.rzm"
            >
              <div
                className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="l10w.37"
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
