import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";


const BlogsPage = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
        cache: "no-store"
    });
    const blogs = await res.json();
    return (
        <div className="w-[90%] mx-auto my-5">
            <h1 className="text-4xl text-center my-5">All Blogs From <span className="text-accent">Blogiz</span></h1>
            <p className="text-xl text-center text-gray-400 w-2/4 mx-auto"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i> </p>
            <div className="grid grid-cols-3 gap-4 my-10 my-5">
                {
                    blogs.map((blog: Blog) => <BlogCard key={blog?.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default BlogsPage;

