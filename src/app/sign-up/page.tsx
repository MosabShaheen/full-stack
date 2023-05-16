import { SignUp } from "@clerk/nextjs/dist/client-boundary/uiComponents";

export default function Page1() {
  return (
    <div className="container min-h-screen grid place-content-center">
      <SignUp afterSignUpUrl={"/dashboard"} signInUrl="/sign-in" />
    </div>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
