import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
return (

        <div className="flex flex-col gap-2">
            <section className="flex relative gap-2 items-center">
                <div className="relative flex-1 h-96">
                    <Image src="/blog1.jpg" alt="blog image" fill className="object-cover" />

                </div>
                <span className="rotate-270 w-10 text-gray-400">01.01.25</span>
            </section>

            <section className="flex flex-col gap-2 w-[calc(100%-2.5rem)]">
                <h2 className="font-bold text-xl">Blog Post Title</h2>
                <p className="text-txt-soft line-clamp-3 text-[.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto atque accusamus voluptas perferendis repellat cum numquam blanditiis nemo reiciendis similique quis doloremque saepe dolores ipsam delectus eum? Distinctio, fugit.</p>
                <Link className="underline text-[1rem]" href="#">READ MORE</Link>
            </section>
        </div>
);
}