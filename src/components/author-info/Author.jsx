import { getUserById } from "@/app/actions/userActions";
import Image from "next/image";

export default async function Author({ userId }) {
  const author = await getUserById(userId);

  const date = author.posts[0].createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] relative">
        <Image
          className="rounded-full object-cover"
          src={author.avatar}
          alt="Avatar"
          fill
        />
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">Author</span>
        <span>{author.name}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">Published</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
