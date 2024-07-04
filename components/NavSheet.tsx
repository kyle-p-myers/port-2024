import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import InboxButtonGroup from "./InboxButtonGroup";
import { Label } from "@radix-ui/react-label";
import CalendarButtonGroup from "./CalendarButtonGroup";
import NavCard from "./NavCard";

export default function NavSheet() {
  return (
    <div className="h-full">
      <Sheet>
        <SheetTrigger><HamburgerMenuIcon className="h-7 w-7"/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mb-5"> 
                <Button className="bg-indigo-700 mt-5"> <PlusIcon className="mr-3"></PlusIcon>Contact</Button>
            </SheetTitle>
            <SheetDescription>
                <div className="">
                <InboxButtonGroup/>
                <CalendarButtonGroup/>
                </div>
            </SheetDescription>
          </SheetHeader>
          <NavCard/>
        </SheetContent>
      </Sheet>
    </div>
  );
}
