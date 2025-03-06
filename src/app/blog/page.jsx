import BlogPage from "./Blogpage";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/blog");
  let post;
  if (!res.ok) {
    post = false;
  }
  post = await res.json();
  return (
    <>
      <BlogPage data={post} />
    </>
  );
}
