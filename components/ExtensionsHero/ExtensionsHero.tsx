import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExtensionsHeroProps {
  title?: string;
  showAddButton?: boolean;
}

export function ExtensionsHero({
  title = "Your Extensions",
  showAddButton = true,
}: ExtensionsHeroProps) {
  return (
    <div className="relative mb-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl opacity-60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track your Chrome extensions
            </p>
          </div>
        </div>

        {/* Add Button */}
        {showAddButton && (
          <Link href="/extensions/new">
            <Button>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Extension
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
} 