import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex h-screen w-full">
  <div className="m-auto">
    <SignUp forceRedirectUrl="/onboarding"/>
  </div>
</div>;
}