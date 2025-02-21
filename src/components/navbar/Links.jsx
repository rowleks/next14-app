"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./links.module.css";

export default function Links() {
const pathName = usePathname();
const links = [
    { title: 'homepage', path: '/' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
    { title: 'blog', path: '/blog' }
]
return (
    <div className="flex gap-[3.5rem] items-center">
        {
            links.map(link=> (
                <Link className={`capitalize ${pathName === link.path && styles.active}`} key={link.title} href={link.path}>{link.title}</Link>
            ))
        }
    </div>
);
}