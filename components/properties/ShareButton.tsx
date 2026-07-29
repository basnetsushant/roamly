"use client";

import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  XShareButton,
} from "react-share";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";

function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="p-2 cursor-pointer"
        >
          <LuShare2 />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="left"
        // align="center"
        sideOffset={10}
        className="flex items-center justify-center w-full"
      >
        <XShareButton
          url={shareLink}
          title={name}
        >
          <XIcon
            round
            size={32}
          />
        </XShareButton>

        <LinkedinShareButton
          url={shareLink}
          title={name}
        >
          <LinkedinIcon
            round
            size={32}
          />
        </LinkedinShareButton>

        <EmailShareButton
          url={shareLink}
          title={name}
        >
          <EmailIcon
            round
            size={32}
          />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
