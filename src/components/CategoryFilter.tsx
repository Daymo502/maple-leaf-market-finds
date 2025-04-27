
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
      <div className="md:hidden">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        selectedCategory === category.id && "bg-muted"
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {selectedCategory === category.id && (
                        <Check className="mr-2 h-4 w-4" />
                      )}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Origin</h3>
                <div className="flex items-center justify-between">
                  <label htmlFor="canadian-mobile" className="text-sm flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded-sm rotate-45 transform"></div>
                    Show Canadian products only
                  </label>
                  <Switch
                    id="canadian-mobile"
                    checked={canadianOnly}
                    onCheckedChange={onCanadianOnlyChange}
                  />
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block space-y-6">
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className={cn(
                  "justify-start w-full px-2 h-8",
                  selectedCategory === category.id && "bg-muted font-medium"
                )}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Origin</h3>
          <div className="flex items-center gap-2">
            <Switch
              id="canadian"
              checked={canadianOnly}
              onCheckedChange={onCanadianOnlyChange}
            />
            <label htmlFor="canadian" className="text-sm flex items-center gap-2 cursor-pointer">
              <div className="w-3 h-3 bg-accent rounded-sm rotate-45 transform"></div>
              Show Canadian products only
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
