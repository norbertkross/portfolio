import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogService } from "../../expose_db";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    BlogService.getBlogs()
      .then((data) => {
        if (cancelled) return;
        setBlogs(data);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error("Failed to fetch blogs:", e);
        setError("We couldn't load blogs right now. Please try again.");
      })
      .finally(() => {
        if (cancelled) return;
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto w-11/12 py-12 md:w-10/12 lg:w-7/12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Latest Blogs</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={prevPage}
            disabled={isLoading || currentPage === 1}
            className="rounded-full border border-slate-100 p-3 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextPage}
            disabled={isLoading || totalPages === 0 || currentPage === totalPages}
            className="rounded-full border border-slate-100 p-3 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
          <p className="mt-6 text-lg text-gray-600">Loading blogs…</p>
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center">
          <h2 className="text-xl font-bold">Something went wrong</h2>
          <p className="mt-3 text-gray-600">{error}</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center">
          <h2 className="text-xl font-bold">No blogs yet</h2>
          <p className="mt-3 text-gray-600">Check back soon for new posts.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {currentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
