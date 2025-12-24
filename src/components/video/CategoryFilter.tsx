import { categories } from "@/data/mockData";
import { useVideoStore } from "@/store/videoStore";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const CategoryFilter = () => {
  const { selectedCategory, setCategory } = useVideoStore();

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-3 pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCategory(category.id)}
            className={cn(
              "category-chip",
              selectedCategory === category.id && "category-chip-active"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
};
