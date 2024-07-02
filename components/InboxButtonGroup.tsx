import React from "react";
import { Button } from "./ui/button";
import {
    BorderSolidIcon,
  EnvelopeOpenIcon,
  FileIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";


export default function InboxButtonGroup() {
  return (
    <div>
      <div>
      <Label htmlFor="projects">My Work</Label>
        <Button className="bg-transparent text-stone-950 border-none shadow-none p-0">
          <EnvelopeOpenIcon className="mr-3 "></EnvelopeOpenIcon>Inbox
        </Button>
      </div>
      <div>
        <Button className=" bg-transparent border-none shadow-none p-0 text-stone-950">
          <FileIcon className="mr-3"></FileIcon>Drafts
        </Button>
      </div>
      <div>
        <Button className="bg-transparent border-none shadow-none p-0 text-stone-950">
   
          <StarFilledIcon className="mr-3"></StarFilledIcon>Starred
        </Button>
        <Separator className="mt-6"/>
      </div>
    </div>
  );
}
