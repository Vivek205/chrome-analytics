export function AddExtensionFormSkeleton() {
  return (
    <div className="space-y-6">
      {/* Form skeleton */}
      <div className="space-y-4">
        <div className="space-y-2">
          {/* Label skeleton */}
          <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
          
          {/* Input field skeleton */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="h-5 w-5 bg-gray-400 rounded animate-pulse"></div>
            </div>
            <div className="h-12 bg-gray-200 rounded-md animate-pulse pl-10"></div>
          </div>
          
          {/* Help text skeleton */}
          <div className="space-y-1">
            <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>

        {/* Button skeleton */}
        <div className="h-12 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Status Messages skeleton */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="h-5 w-5 bg-gray-300 rounded-full mt-0.5 flex-shrink-0 animate-pulse"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-gray-300 rounded w-40 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        </div>
      </div>

      {/* Help Text skeleton */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-48 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-52 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-44 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 