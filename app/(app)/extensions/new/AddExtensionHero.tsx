export function AddExtensionHero() {
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Add New Extension
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Paste the Chrome Web Store URL of the extension you&apos;d like to monitor
              for updates and details.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Auto-fetch data</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Real-time updates</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Smart analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 