import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return( 
  <div className="mt-64 min-h-svh">
  <SignIn path="/sign-in" />
  </div>
  )
}