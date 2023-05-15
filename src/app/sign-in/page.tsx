import { SignIn } from "@clerk/nextjs";

export default function Page(){
    return(
        <div className="container min-h-screen grid place-content-center">
            <SignIn afterSignInUrl={"/dashboard"} signUpUrl="sign-up" />
        </div>
    )
}

export const runtime = "experimental-edge";
export const revalidate = 0;