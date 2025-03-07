import BlogPage from "./Blogpage";

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    console.error("Failed to fetch author:", res.statusText);
    return null;
  }
  return await res.json();
};

export default async function page() {
  const post = await fetchData();
  return (
    <>
      <BlogPage data={post} />
    </>
  );
}
