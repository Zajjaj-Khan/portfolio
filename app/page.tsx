import Image from "next/image";
import HomePage from "../app/(unprotected)/home/page";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <HomePage/>
    </div>
  );
}
