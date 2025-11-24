import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-secondary text-secondary-foreground",
  outline: "border border-border text-muted-foreground"
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
