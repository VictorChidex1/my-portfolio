import React from "react";
import { ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing React Performance",
    excerpt:
      "Deep dive into useMemo, useCallback, and React.memo for high-performance apps.",
    date: "Oct 24, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of CSS in JS",
    excerpt:
      "Exploring the shift towards zero-runtime CSS solutions and Tailwind adoption.",
    date: "Nov 02, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    excerpt:
      "Best practices for structuring RESTful services in Node.js environments.",
    date: "Nov 15, 2024",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <section className="py-24 pt-32 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-400">
            Thoughts on development, design, and tech.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-brand-orange/50 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{post.excerpt}</p>
                </div>
                <div className="hidden md:flex items-center self-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <ChevronRight className="text-white" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
