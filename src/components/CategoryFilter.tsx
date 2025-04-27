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
      <div className="md:hidden" data-oid="k-twt:.">
        <Drawer open={isOpen} onOpenChange={setIsOpen} data-oid="vh3_uqe">
          <DrawerTrigger asChild data-oid="18dz23t">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              data-oid="_6zafg0"
            >
              <Filter className="h-4 w-4" data-oid="67.27dg" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent data-oid="vbr.53_">
            <div className="p-4 space-y-6" data-oid="82r-evj">
              <div data-oid="_-_akd_">
                <h3 className="font-semibold mb-3" data-oid="epid0mw">
                  Categories
                </h3>
                <div className="space-y-2" data-oid="1f6ttr.">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted",
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                      data-oid="wr4-keq"
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" data-oid="medv6n." />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="8wgl1no">
                <h3 className="font-semibold mb-3" data-oid="hhthses">
                  Origin
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="crcb8d4"
                >
                  <label
                    htmlFor="canadian-mobile"
                    className="text-sm flex items-center gap-2"
                    data-oid="wdc7adn"
                  >
                    <div
                      className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"
                      data-oid="nwm4_e4"
                    ></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                    data-oid="924tz_w"
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6" data-oid="t9uflo.">
        <div data-oid=":q80g8x">
          <h3 className="font-semibold mb-3" data-oid="4itui3v">
            Categories
          </h3>
          <div className="space-y-1" data-oid="8688pni">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium",
                )}
                onClick={() => onCategoryChange(category.id)}
                data-oid="7dc_dka"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div data-oid="kz_q5x5">
          <h3 className="font-semibold mb-3" data-oid="4glzw2e">
            Origin
          </h3>
          <div className="flex items-center gap-2" data-oid="z:bgr:1">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
              data-oid="zy4e-4d"
            />

            <label
              htmlFor="canadian"
              className="text-sm flex items-center gap-2 cursor-pointer"
              data-oid="25l74c-"
            >
              <div
                className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="7r_s5t6"
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
