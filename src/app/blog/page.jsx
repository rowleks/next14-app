"use client"

import { useEffect, useState } from "react";
import PostCard from "@/components/post-card/PostCard";
import { getPosts } from "../lib/data";

export default function Blog() {

    const [posts, setPosts] = useState([]);
    const postsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(totalPages);


    //Fetch posts using useEffect because the component is a client side component.

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts);
        }
        fetchPosts();
    }
    , []);
    

    if(!totalPages) {
        return <div className="grid items-center justify-center h-full">No posts found</div>
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentPosts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
                <button 
                    onClick={firstPage} 
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'}`}
                >
                    First
                </button>
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'}`}
                >
                    Previous
                </button>
                <span className="font-bold">{currentPage} / {totalPages}</span>
                <button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'}`}
                >
                    Next
                </button>
                <button 
                    onClick={lastPage} 
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700 cursor-pointer'}`}
                >
                    Last
                </button>
            </div>
        </div>
    );
}
