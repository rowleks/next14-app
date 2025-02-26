import PostCard from "@/components/post-card/PostCard";

export default function Blog() {
return (
    <div className="grid grid-cols-(--grid-cols-auto) gap-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
);
}