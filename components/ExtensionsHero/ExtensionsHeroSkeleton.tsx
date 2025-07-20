export function ExtensionsHeroSkeleton() {
  return (
    <div className="relative mb-6">
      {/* Background gradient skeleton */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl opacity-60 animate-pulse"></div>

      {/* Content skeleton */}
      <div className="relative flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          {/* Icon skeleton */}
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-lg shadow-lg animate-pulse">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
          </div>

          {/* Title and description skeleton */}
          <div>
            {/* Title skeleton */}
            <div className="h-8 bg-gray-300 rounded-lg w-48 mb-2 animate-pulse"></div>
            
            {/* Description skeleton */}
            <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
          </div>
        </div>

        {/* Add Button skeleton */}
        <div className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
} 