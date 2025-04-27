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
      <div className="md:hidden" data-oid="o7v5.xz">
        <Drawer open={isOpen} onOpenChange={setIsOpen} data-oid="669ypz6">
          <DrawerTrigger asChild data-oid="ewyi1tz">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              data-oid="y00nitp"
            >
              <Filter className="h-4 w-4" data-oid="ih2e9g3" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent data-oid="gqhwv.t">
            <div className="p-4 space-y-6" data-oid="8ssvac2">
              <div data-oid="b-l75rp">
                <h3 className="font-semibold mb-3" data-oid="fe66myi">
                  Categories
                </h3>
                <div className="space-y-2" data-oid="3mrt.q-">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted",
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                      data-oid="v1333v_"
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" data-oid="efwu8p4" />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div data-oid="yjoutco">
                <h3 className="font-semibold mb-3" data-oid="z8a-ili">
                  Origin
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="xdf5pwm"
                >
                  <label
                    htmlFor="canadian-mobile"
                    className="text-sm flex items-center gap-2"
                    data-oid="1wvyl8g"
                  >
                    <div
                      className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"
                      data-oid="rugmcwk"
                    ></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                    data-oid=".:y-yvd"
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6" data-oid="9yhd-k5">
        <div data-oid="_vqc1p-">
          <h3 className="font-semibold mb-3" data-oid="pr5_zk.">
            Categories
          </h3>
          <div className="space-y-1" data-oid="h1ardof">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium",
                )}
                onClick={() => onCategoryChange(category.id)}
                data-oid="n8fwiw4"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div data-oid="vwhi7:2">
          <h3 className="font-semibold mb-3" data-oid="xy4w92t">
            Origin
          </h3>
          <div className="flex items-center gap-2" data-oid="s:.ei2l">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
              data-oid="tol:19o"
            />

            <label
              htmlFor="canadian"
              className="text-sm flex items-center gap-2 cursor-pointer"
              data-oid="qm.:f_u"
            >
              <div
                className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"
                data-oid="gjvb99-"
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
