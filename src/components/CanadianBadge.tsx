
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CanadianBadgeProps {
  className?: string;
  showTooltip?: boolean;
  size?: "sm" | "md" | "lg";
}

const CanadianBadge = ({ className, showTooltip = true, size = "md" }: CanadianBadgeProps) => {
  const badge = (
    <div 
      className={cn(
        "inline-flex items-center justify-center gap-1 bg-accent/10 text-accent font-medium rounded-full",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "",
        size === "md" ? "px-2 py-1 text-xs" : "",
        size === "lg" ? "px-3 py-1.5 text-sm" : "",
        className
      )}
    >
      <div className="inline-block w-3 h-3 bg-accent rounded-sm rotate-45 transform"></div>
      <span>Made in Canada</span>
    </div>
  );

  if (!showTooltip) return badge;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">This product is made in Canada with at least 51% Canadian ingredients.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CanadianBadge;
