import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SquareArrowOutUpRight, 
  Users, 
  Star, 
  Code, 
  Globe,
  TrendingUp,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

type BasicInfoProps = {
  latestMetrics: any;
  extensionDetails: any;
};

// Users Section Component
function UsersSection({ activeUsers }: { activeUsers: number }) {
  const getUsersBadgeVariant = (users: number) => {
    if (users >= 1000000) return "default";
    if (users >= 100000) return "secondary";
    if (users >= 10000) return "outline";
    return "destructive";
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <span className="font-medium text-slate-700 dark:text-slate-300">Users</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {activeUsers?.toLocaleString() || "0"}
        </span>
        <Badge variant={getUsersBadgeVariant(activeUsers || 0)} className="text-xs">
          <TrendingUp className="h-3 w-3 mr-1" />
          Active
        </Badge>
      </div>
    </div>
  );
}

// Rating Section Component
function RatingSection({ rating }: { rating: number }) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-500";
    if (rating >= 4.0) return "text-yellow-500";
    if (rating >= 3.5) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
          <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400 fill-current" />
        </div>
        <span className="font-medium text-slate-700 dark:text-slate-300">Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={cn("text-lg font-bold", getRatingColor(rating || 0))}>
          {rating || "0"}
        </span>
        <span className="text-slate-500 dark:text-slate-400">/ 5</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn(
                "h-3 w-3",
                star <= (rating || 0)
                  ? "text-yellow-500 fill-current"
                  : "text-slate-300 dark:text-slate-600"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Version Section Component
function VersionSection({ version }: { version?: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        </div>
        <span className="font-medium text-slate-700 dark:text-slate-300">Version</span>
      </div>
      <Badge variant="outline" className="font-mono text-xs">
        {version}
      </Badge>
    </div>
  );
}

// URL Section Component
function URLSection({ url }: { url?: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium text-slate-700 dark:text-slate-300">URL</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
      >
        <span className="text-xs max-w-24 truncate font-mono">
          {url?.replace(/^https?:\/\//, '') || 'N/A'}
        </span>
        <SquareArrowOutUpRight 
          size={12} 
          className="group-hover/link:scale-110 group-hover/link:translate-x-0.5 transition-transform duration-200" 
        />
      </a>
    </div>
  );
}

export function BasicInfo({
  latestMetrics,
  extensionDetails,
}: BasicInfoProps) {
  return (
    <Card className="md:w-auto min-w-2xs bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 pb-2">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Current Stats
          </CardTitle>
        </div>

        <UsersSection activeUsers={latestMetrics?.activeUsers} />
        <RatingSection rating={latestMetrics?.ratingsValue} />
        {/* TODO: Get the version from the extension details */}
        <VersionSection version="1.30.2" />
        <URLSection url={extensionDetails?.url} />
      </CardContent>
    </Card>
  );
}
