export function LoginBackground() {
  return (
    <div>
      <div className="absolute inset-0">
        {/* Flowing Data Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Curved flowing lines representing data trends */}
          <path
            d="M-100,200 Q200,100 400,150 T800,120 L800,300 Q600,250 400,280 T-100,320 Z"
            fill="url(#gradient1)"
          />
          <path
            d="M-50,400 Q300,300 600,350 T1200,300 L1200,500 Q900,450 600,480 T-50,520 Z"
            fill="url(#gradient2)"
          />
          <path
            d="M200,600 Q500,500 800,550 T1400,500 L1400,700 Q1100,650 800,680 T200,720 Z"
            fill="url(#gradient3)"
          />

          {/* Dynamic line charts */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeOpacity="0.4"
            points="50,150 150,120 250,140 350,100 450,110 550,80 650,90"
          />
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeOpacity="0.4"
            points="100,350 200,320 300,340 400,300 500,310 600,280 700,290"
          />
          <polyline
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeOpacity="0.4"
            points="150,550 250,520 350,540 450,500 550,510 650,480 750,490"
          />
        </svg>

        {/* Scattered Data Points */}
        <div className="absolute inset-0">
          {/* Large data points */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 left-40 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-16 left-60 w-5 h-5 bg-purple-400 rounded-full opacity-40 animate-pulse delay-2000"></div>
          <div className="absolute top-40 left-80 w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-pulse delay-500"></div>

          <div className="absolute top-60 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
          <div className="absolute top-80 right-40 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-pulse delay-3000"></div>
          <div className="absolute top-96 right-60 w-2 h-2 bg-indigo-400 rounded-full opacity-70 animate-pulse delay-700"></div>

          <div className="absolute bottom-40 left-32 w-5 h-5 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-2500"></div>
          <div className="absolute bottom-60 left-52 w-3 h-3 bg-rose-400 rounded-full opacity-60 animate-pulse delay-1200"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-violet-400 rounded-full opacity-50 animate-pulse delay-1800"></div>
        </div>

        {/* Abstract Chart Shapes */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <div className="relative">
            {/* Pie chart representation */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-green-300 to-cyan-300 rounded-full transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-300 to-red-300 rounded-full transform -translate-x-8 translate-y-8"></div>
            </div>
          </div>
        </div>

        {/* Floating geometric shapes representing data */}
        <div className="absolute top-1/3 right-16 opacity-30">
          <div className="space-y-2">
            <div className="flex space-x-2">
              <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              <div className="w-12 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              <div className="w-10 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-14 h-2 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"></div>
              <div className="w-4 h-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Dynamic bar chart */}
        <div className="absolute bottom-1/4 left-16 opacity-25">
          <div className="flex items-end space-x-3">
            <div className="w-6 h-16 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transform rotate-3 animate-pulse"></div>
            <div className="w-6 h-24 bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg transform -rotate-2 animate-pulse delay-500"></div>
            <div className="w-6 h-12 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg transform rotate-1 animate-pulse delay-1000"></div>
            <div className="w-6 h-20 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-lg transform -rotate-3 animate-pulse delay-1500"></div>
            <div className="w-6 h-28 bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg transform rotate-2 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Circular progress indicators */}
        <div className="absolute bottom-1/3 right-20 opacity-20">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-500"
                strokeWidth="3"
                strokeDasharray="75, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Network nodes */}
        <div className="absolute top-2/3 left-1/3 opacity-15">
          <svg width="120" height="80" viewBox="0 0 120 80">
            <line
              x1="10"
              y1="10"
              x2="50"
              y2="30"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="30"
              x2="90"
              y2="20"
              stroke="#10b981"
              strokeWidth="2"
            />
            <line
              x1="90"
              y1="20"
              x2="110"
              y2="50"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="30"
              x2="70"
              y2="60"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="10"
              x2="30"
              y2="70"
              stroke="#ef4444"
              strokeWidth="2"
            />

            <circle cx="10" cy="10" r="4" fill="#3b82f6" />
            <circle cx="50" cy="30" r="5" fill="#10b981" />
            <circle cx="90" cy="20" r="4" fill="#f59e0b" />
            <circle cx="110" cy="50" r="3" fill="#8b5cf6" />
            <circle cx="70" cy="60" r="4" fill="#ef4444" />
            <circle cx="30" cy="70" r="3" fill="#06b6d4" />
          </svg>
        </div>

        {/* Hexagonal pattern */}
        <div className="absolute top-1/2 right-1/4 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon
              points="50,5 85,25 85,65 50,85 15,65 15,25"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <polygon
              points="50,15 75,30 75,60 50,75 25,60 25,30"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            />
            <polygon
              points="50,25 65,35 65,55 50,65 35,55 35,35"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <circle cx="50" cy="50" r="3" fill="#8b5cf6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
