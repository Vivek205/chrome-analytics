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

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="font-bold leading-9">
        ChromeExt Analytics
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title} className="px-2 py-1">
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon /> {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
