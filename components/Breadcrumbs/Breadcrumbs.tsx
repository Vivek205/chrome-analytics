import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight size={16} />}
          {item.href ? (
            <Link href={item.href}>
              <span className="cursor-pointer hover:text-foreground transition-colors">
                {item.label}
              </span>
            </Link>
          ) : (
            <span className={item.isCurrent ? "font-bold text-foreground" : ""}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
