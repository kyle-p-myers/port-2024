import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
  StackIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

export default function NavCard() {
  return (
    <>
    <div className="flex shadow-lg h-60 w-full gap-5 border select-none flex-col rounded-3xl bg-gradient-to-b from-white to-slate-50 no-underline outline-none focus:shadow-lg">
      <StackIcon className="h-10 w-10 mt-10 ml-5" />
      <div className=" text-md ml-3 text-slate-950">
        Kyle Myers <br></br>
        Full Stack Developer
        <div className="text-xs mt-6 pb-2">
        Rubber Ducky Debugging Theory Advocate <br>
        </br>
        React | Java | JavaScript | SQL | Python
        </div>
      </div>
    </div>
    <div className="flex w-full gap-16 flex-row mt-16 items-center justify-center">
    <LinkedInLogoIcon className="h-6 w-8"/> <GitHubLogoIcon className="h-6 w-8" /> <DiscordLogoIcon className="h-6 w-8"/>
    <TwitterLogoIcon className="h-6 w-8" />
  </div>
  </>
  );
}
