import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  default: "bg-muted text-foreground",
  subtle: "bg-secondary text-secondary-foreground",
  solid: "bg-foreground text-background"
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-2 text-sm",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
