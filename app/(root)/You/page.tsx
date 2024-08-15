import CurrentUser from "@/components/shared/CurrentUser";
import { Button } from "@/components/ui/button";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();

  return (
    <div className="bg-zinc-900 w-full h-screen flex flex-col justify-between">
      <div>
        <div className="w-full flex justify-between text-white p-4 md:p-8">
          <div className="text-lg font-mono">
            The Future of Retail
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <CurrentUser id={user!.id} />
      </div>
      <div className="text-white px-8 py-4">
        <Button variant="secondary">
          <SignOutButton redirectUrl="/sign-in" />
        </Button>
      </div>
    </div>
  );
};

export default page;
