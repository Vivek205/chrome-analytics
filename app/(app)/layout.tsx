import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "ChromeExt Dashboard",
  description: "Analyze your Chrome Extension's performance",
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SidebarProvider>
      <SessionProvider>
        <AppSidebar />
        <div className="w-full">
          <AppHeader user={session?.user} />
          <main className="p-4">{children}</main>
        </div>
      </SessionProvider>
    </SidebarProvider>
  );
}
