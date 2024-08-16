import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full m-auto bg-zinc-900">
      <div className="text-white font-mono text-2xl mx-auto mt-auto ">
          Welcome back to the Future of Retail!
        </div>
      <div className="flex m-auto">
        <SignIn signUpForceRedirectUrl="/onboarding" />
      </div>
    </div>
  );
}
