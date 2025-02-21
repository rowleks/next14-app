import Link from "next/link";
import Links from "./Links";

export default async function Navbar() {
return (
    <div className="flex justify-between items-center">
        <Link className={`font-bold text-3xl`} href="/">Logo</Link>
        <Links />
    </div>
);
}