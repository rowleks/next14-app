import { getSingleUser } from "@/app/lib/data";
import Image from "next/image";

export default async function Author({userId}) {


    const author = await getSingleUser(userId);
    
return (
    <div className="flex gap-4 items-center">

        <div className="w-[40px] h-[40px] relative">
            <Image className="rounded-full object-cover" src={author.img} alt="Avatar" fill/>
        </div>

        <div className="flex flex-col">
            <span className="text-gray-400">Author</span>
            <span>{author?.name}</span>
        </div>

        <div className="flex flex-col">
            <span className="text-gray-400">Published</span>
            <span>01.01.2025</span>
        </div>
    
    </div>
);
}