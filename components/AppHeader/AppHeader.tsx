import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const AppHeader = () => (
  <div className="w-full">
    <nav className="flex justify-between p-2">
      <div className="flex items-center">
        <SidebarTrigger />
        <p>Analytics for: Extension Name</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            User
            <Avatar>
              <AvatarFallback>FL</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-2 w-56">
          <DropdownMenuLabel>Full Name</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
    <Separator />
  </div>
);
