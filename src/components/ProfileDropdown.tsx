import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import useUserStore from "@/store/useStore";

const getInitials = (name: any) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  return (
    nameParts
      //   @ts-ignore
      .map((part) => part[0])
      .join("")
      .toUpperCase()
  );
};

export default function ProfileDropdown() {
  // @ts-ignore
  const currentUser = useUserStore((state) => state.currentUser);

  console.log(currentUser);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          {currentUser ? getInitials(currentUser[0]?.Name) : ""}
        </Button>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Switch to Customer Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}
