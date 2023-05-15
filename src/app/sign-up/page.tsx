import { SignUp } from "@clerk/nextjs";

export default function Page(){
    return (
        <div className="container min-h-screen grid place-content-center">
            <SignUp afterSignUpUrl={"/dashboard"} signInUrl="sign-up" />
        </div>
    )
}

export const runtime = "experimental-edge";
export const revalidate = 0;