export function AddExtensionHeroSkeleton() {
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

          {/* Title and content skeleton */}
          <div className="flex-1">
            {/* Title skeleton */}
            <div className="h-8 bg-gray-300 rounded-lg w-48 mb-2 animate-pulse"></div>
            
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
            
            {/* Features skeleton */}
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-18 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side skeleton (if any content was there) */}
        <div className="hidden md:block">
          <div className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 