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
      <div className="md:hidden" data-oid="hw0xz_s">
        <Drawer open={isOpen} onOpenChange={setIsOpen} data-oid="izgs90g">
          <DrawerTrigger asChild data-oid="8uhlu7n">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              data-oid="m4e4w8w"
            >
              <Filter className="h-4 w-4" data-oid="g5.ji8c" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent data-oid="m1odaxc">
            <div className="p-4 space-y-6" data-oid="3brh0sf">
              <div data-oid="9-s2eeh">
                <h3 className="font-semibold mb-3" data-oid="-uf_fcm">
                  Categories
                </h3>
                <div className="space-y-2" data-oid="8:66w84">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted",
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                      data-oid="k8q4dlf"
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" data-oid="3w9tfno" />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid=".8rk5yh">
                <h3 className="font-semibold mb-3" data-oid="ct:-.-q">
                  Origin
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="t7y5.l."
                >
                  <label
                    htmlFor="canadian-mobile"
                    className="text-sm flex items-center gap-2"
                    data-oid="r6zzb65"
                  >
                    <div
                      className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"
                      data-oid="j.37r:-"
                    ></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                    data-oid="3aox7x-"
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6" data-oid="7fx0ogh">
        <div data-oid=":x_ozx_">
          <h3 className="font-semibold mb-3" data-oid="sw:u-as">
            Categories
          </h3>
          <div className="space-y-1" data-oid="qdci5hs">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium",
                )}
                onClick={() => onCategoryChange(category.id)}
                data-oid="_wfckn."
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div data-oid="833.u2c">
          <h3 className="font-semibold mb-3" data-oid="spm5zfy">
            Origin
          </h3>
          <div className="flex items-center gap-2" data-oid="3zf9f8p">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
              data-oid="58o7on8"
            />

            <label
              htmlFor="canadian"
              className="text-sm flex items-center gap-2 cursor-pointer"
              data-oid="wl6j1zr"
            >
              <div
                className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="d69is3i"
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
