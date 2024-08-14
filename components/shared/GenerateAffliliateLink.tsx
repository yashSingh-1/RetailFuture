"use client"

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { GenerateLink } from "@/lib/generateLink";

interface Props {
    ParentProductId: string;
    userID: string;
}

const GenerateAffliliateLink = ({
    ParentProductId,
    userID
}: Props) => {
    // const GeneratedLinkSchema = `/reviews/affiliate/${userID}${ParentProductId}`
    const YourLink = GenerateLink({userID: userID, ParentProductId: ParentProductId});
  return (
    <div>
      <a href={`${YourLink}`} target="_blank">
      <Button className="w-full bg-blue-500 hover:bg-slate-800" >
        Take a look 
      </Button>
      </a>
    </div>
  );
};

export default GenerateAffliliateLink;
