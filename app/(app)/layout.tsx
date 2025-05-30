import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "ChromeExt Dashboard",
  description: "Analyze your Chrome Extension's performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <main className="p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
