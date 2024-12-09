import { Menu, School, SeparatorHorizontal } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "./DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const user = true;
  const role = "instructor";
  return (
    <div className="h-16 max-w-7xl dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-400 fixed top-0 left-0 right-0 duration-300 z-10 flex justify-center items-center">
      {/* Desktop */}
      <div className="container mx-auto md:flex items-center justify-between hidden">
        <div className="flex items-center gap-5 h-full sm:px-4">
          <School size={"30"} />
          <h1 className="font-extrabold text-2xl">Skillora</h1>
        </div>
        <div className="flex items-center gap-5">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <span>My Learning</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Edit Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {role === "instructor" && (
                  <DropdownMenuItem>
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>SignUp</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile */}
      <div className="container mx-5 flex md:hidden items-center justify-between h-full">
        <div className="flex items-center gap-5 h-full">
          <School size={"30"} />
          <h1 className="font-extrabold text-2xl">Skillora</h1>
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-400"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-5">
          <SheetTitle>Skillora</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <DropdownMenuSeparator />
        <nav className="flex flex-col space-y-4">
          <span>My Learning</span>
          <span>Edit Profile</span>
          <span>Log Out</span>
        </nav>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavbar };

export default Navbar;
