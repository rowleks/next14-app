import Image from "next/image";
import { notFound } from "next/navigation";

export default function SinglePost({params}) {
    if (isNaN(Number(params?.slug))) { notFound() }
return (
    <div className="grid md:grid-cols-[450px_1fr] gap-12">
        <section className="min-h-[30rem] md:min-h-[35rem] w-full relative flex-1">
            <Image src="/blog2.jpg" alt="blog image" fill/>
        </section>

        <section className="flex flex-col gap-8 flex-3">
            <h1 className="text-5xl font-bold">Title</h1>

            <div className="flex gap-4 items-center">

                <div className="w-[40px] h-[40px] relative">
                    <Image className="rounded-full object-cover" src="/blog3.jpg" alt="Avatar" fill/>

                </div>

                    <div className="flex flex-col">
                        <span className="text-gray-400">Author</span>
                        <span>Terry Jefferson</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-gray-400">Published</span>
                        <span>01.01.2025</span>
                    </div>
                
            </div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi esse distinctio molestias odio fugit laboriosam voluptatibus officiis natus illo ab magnam amet quibusdam architecto, doloremque obcaecati optio libero quas laudantium.</p>


        </section>
    </div>
);
}