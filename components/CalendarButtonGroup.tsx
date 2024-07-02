import React from 'react'
import { Button } from './ui/button'
import { CalendarIcon, EnvelopeOpenIcon, FileIcon, KeyboardIcon, Pencil1Icon, Pencil2Icon, StarFilledIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'

export default function CalendarButtonGroup() {
  return (
    <div>
        <div>
      <Label htmlFor="projects">Timeline</Label>
        <Button className="bg-transparent text-stone-950 border-none shadow-none p-0">
          <CalendarIcon className="mr-3 "></CalendarIcon>History
        </Button>
      </div>
      <div>
        <Button className=" bg-transparent border-none shadow-none p-0 text-stone-950">
          <KeyboardIcon className="mr-3"></KeyboardIcon>Skills
        </Button>
      </div>
      <div>
        <Button className="bg-transparent border-none shadow-none p-0 text-stone-950">
   
          <Pencil1Icon className="mr-3"></Pencil1Icon>
          Work
        </Button>
        <Separator className="mt-5"/>
      </div>
    </div>
  )
}
