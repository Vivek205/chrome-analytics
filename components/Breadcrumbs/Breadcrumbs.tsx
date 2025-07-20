import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbsProps } from "./types";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-1 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight 
              size={12} 
              className="mx-1.5 text-gray-400 dark:text-gray-500" 
            />
          )}
          
          <div className="group relative">
            {item.href ? (
              <Link href={item.href}>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  {index === 0 && <Home size={12} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />}
                  {item.label}
                  
                  {/* Subtle hover underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </span>
              </Link>
            ) : (
              <span className={`inline-flex items-center gap-1.5 transition-colors duration-200 ${
                item.isCurrent 
                  ? "text-gray-900 dark:text-gray-100 font-semibold" 
                  : "text-gray-500 dark:text-gray-400"
              }`}>
                {index === 0 && <Home size={12} className="text-gray-400" />}
                {item.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
};
