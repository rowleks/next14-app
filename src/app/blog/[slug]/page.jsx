import { getSinglePost } from "@/app/lib/data";
import Author from "@/components/author-info/Author";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function SinglePost({params}) {

    const post = await getSinglePost(Number(params?.slug));


    if (isNaN(Number(params?.slug)) || !post) { notFound() }

return (
    <div className="grid md:grid-cols-[450px_1fr] gap-12">
        <section className="min-h-[30rem] md:min-h-[35rem] w-full relative flex-1">
            <Image src="/blog2.jpg" alt="blog image" fill/>
        </section>

        <section className="flex flex-col gap-8 flex-3">
            <h1 className="text-5xl font-bold">{post.title}</h1>

            <Author userId={post.id} />

            <p>{post.body}</p>


        </section>
    </div>
);
}