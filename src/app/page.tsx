import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1>This is the home page. The root route!</h1>
      <Link href="/animals">Go to my animals page! </Link>
    </div>
  );
}
