interface ExtensionDetailsHeroProps {
  extensionDetails: {
    id: string;
    name: string;
    url: string;
  } | null;
}

export function ExtensionDetailsHero({ extensionDetails }: ExtensionDetailsHeroProps) {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 gap-4">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex-shrink-0">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title and Details */}
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {extensionDetails?.name || "Extension Details"}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Monitor your extension&apos;s performance and metrics
            </p>
          </div>
        </div>

        {/* Extension ID Badge */}
        <div className="flex items-center flex-shrink-0">
          <div className="px-3 py-1 bg-gray-100 rounded-full">
            <span className="text-xs font-mono text-gray-600">
              ID: {extensionDetails?.id || "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
