import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen w-full m-auto">
      <div className="flex m-auto">
        <SignIn signUpForceRedirectUrl="/onboarding" />
      </div>
    </div>
  );
}
