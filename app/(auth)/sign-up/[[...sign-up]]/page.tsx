import { SignUp } from "@clerk/nextjs";
import React from 'react'

export default function Page() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center bg-zinc-900">
      <div className="text-white font-mono text-2xl mt-auto">
          Welcome to the Future of Retail!
        </div>
      <div className="m-auto">
        
      <SignUp forceRedirectUrl="/onboarding" />
      </div>
    </main>
  );
}
