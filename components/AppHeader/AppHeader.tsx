import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { signOut } from "@/auth";
import { User } from "next-auth";
import { Avatar, AvatarImage } from "../ui/avatar";
import { UserCircleIcon, LogOut, Sparkles } from "lucide-react";

type AppHeaderProps = {
  user?: User;
};

export const AppHeader = ({ user }: AppHeaderProps) => {
  const signoutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <nav className="flex justify-between p-4 relative z-10 h-16">
        <div className="flex items-center">
          <SidebarTrigger className="cursor-pointer hover:scale-110 transition-transform duration-200 hover:shadow-lg rounded-lg p-1" />
        </div>

        {/* User section with enhanced styling */}
        <div className="flex items-center gap-3">
          {/* Welcome text with sparkle effect */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="font-medium">Welcome back,</span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {user?.name || 'User'}
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="cursor-pointer group relative overflow-hidden rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              >
                {/* Animated ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <Avatar className="ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all duration-300">
                  {user && user.image ? (
                    <AvatarImage 
                      src={user.image} 
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <UserCircleIcon className="w-6 h-6 text-white" />
                    </div>
                  )}
                </Avatar>
                
                {/* Hover indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent 
              className="mr-2 w-64 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl" 
              align="center"
            >
              {/* User info section */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                <DropdownMenuLabel className="px-0 text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {user?.name || 'User'}
                </DropdownMenuLabel>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
              
              <DropdownMenuItem className="group cursor-pointer hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 transition-all duration-200">
                <form action={signoutAction} className="w-full">
                  <button 
                    type="submit" 
                    className="w-full flex items-center gap-3 py-2 cursor-pointer text-left"
                  >
                    <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-600 transition-colors duration-200" />
                    <span className="font-medium">Sign out</span>
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      
      {/* Enhanced separator with gradient */}
      <div className="relative">
        <Separator className="bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 h-px" />
      </div>
    </div>
  );
};
