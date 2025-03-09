import Link from "next/link";
import Links from "./Links";

export default async function Navbar() {
  return (
    <header className="flex justify-between items-center h-fit">
      <Link className={`font-bold text-3xl`} href="/">
        Logo
      </Link>
      <Links />
    </header>
  );
}
