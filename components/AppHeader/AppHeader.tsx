import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { signOut } from "@/auth";
import { User } from "next-auth";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  CircleUserIcon,
  PersonStandingIcon,
  UserCircle2Icon,
  UserCircleIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

type AppHeaderProps = {
  user?: User;
};
export const AppHeader = ({ user }: AppHeaderProps) => {
  const signoutAction = async () => {
    "use server";
    await signOut({ redirectTo: "/login" });
  };
  return (
    <div className="w-full">
      <nav className="flex justify-between p-2">
        <div className="flex items-center">
          <SidebarTrigger />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Avatar>
                {user && user.image ? (
                  <AvatarImage src={user.image} />
                ) : (
                  <UserCircleIcon />
                )}
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-2 w-56" align="center">
            <DropdownMenuLabel className="px-2">{user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/settings" className="w-full">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <form action={signoutAction}>
                <button type="submit" className="cursor-pointer">
                  Sign out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <Separator />
    </div>
  );
};
