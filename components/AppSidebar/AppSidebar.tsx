import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { menuItems } from "./constants";
import { Separator } from "../ui/separator";
import { ChromeLyticsLogo } from "../ChromeLyticsLogo";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="font-bold leading-9 p-4 flex items-center gap-2 relative h-16">
        {/* Gradient background for header only */}
        <div className="absolute inset-0 bg-gradient-to-r  from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-80" />
        
        {/* Animated background pattern for header */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse" />
        </div>
        
        {/* Header content */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <ChromeLyticsLogo className="h-9 w-auto" />
        </div>
      </SidebarHeader>
      
      {/* Enhanced separator with gradient - matching header */}
      <div className="relative px-4">
        <Separator className="bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 h-px" />
      </div>
      
      <SidebarContent className="flex-1 p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title} className="px-2 py-1">
              <SidebarMenuButton 
                asChild 
                className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 rounded-lg"
              >
                <Link href={item.href} className="flex items-center gap-3 py-2 px-3">
                  <div className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                    <item.icon />
                  </div>
                  <span className="font-medium group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
