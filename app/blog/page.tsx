// import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Search, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
}

// Sample blog post data - replace with your actual data or API call
const bblogPosts = [
  {
    id: 1,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive layouts using Tailwind's utility-first approach and best practices for responsive design.",
    coverImage: "/api/placeholder/600/400",
    date: "April 2, 2025",
    readTime: "6 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    slug: "building-responsive-layouts-tailwind",
  },
  {
    id: 2,
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Discover practical techniques and strategies to improve the performance of your React applications and deliver a better user experience.",
    coverImage: "/api/placeholder/600/400",
    date: "March 25, 2025",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Performance", "Web Development"],
    slug: "optimizing-react-applications-performance",
  },
  {
    id: 3,
    title: "Getting Started with TypeScript in 2025",
    excerpt:
      "A comprehensive guide to setting up and using TypeScript in your projects, with tips for maximizing type safety and developer productivity.",
    coverImage: "/api/placeholder/600/400",
    date: "March 18, 2025",
    readTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "getting-started-typescript-2025",
  },
  {
    id: 4,
    title: "Building a RESTful API with Node.js and Express",
    excerpt:
      "Step-by-step tutorial on creating a robust RESTful API using Node.js and Express, including authentication, validation, and error handling.",
    coverImage: "/api/placeholder/600/400",
    date: "March 10, 2025",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API Development"],
    slug: "building-restful-api-nodejs-express",
  },
  {
    id: 5,
    title: "Introduction to Next.js 14: Features and Benefits",
    excerpt:
      "Explore the latest features in Next.js 14 and learn how they can enhance your web development workflow and application performance.",
    coverImage: "/api/placeholder/600/400",
    date: "March 3, 2025",
    readTime: "7 min read",
    category: "Next.js",
    tags: ["Next.js", "React", "SSR"],
    slug: "introduction-nextjs-14-features-benefits",
  },
  {
    id: 6,
    title: "Mastering CSS Grid for Modern Layouts",
    excerpt:
      "A deep dive into CSS Grid and how to use it effectively to create complex, responsive layouts with less code and more flexibility.",
    coverImage: "/api/placeholder/600/400",
    date: "February 25, 2025",
    readTime: "9 min read",
    category: "CSS",
    tags: ["CSS Grid", "Web Design", "Frontend"],
    slug: "mastering-css-grid-modern-layouts",
  },
  {
    id: 7,
    title: "Working with MongoDB in Node.js Applications",
    excerpt:
      "Learn how to integrate MongoDB with your Node.js applications for efficient data storage, retrieval, and management.",
    coverImage: "/api/placeholder/600/400",
    date: "February 18, 2025",
    readTime: "11 min read",
    category: "Database",
    tags: ["MongoDB", "Node.js", "Database"],
    slug: "working-mongodb-nodejs-applications",
  },
  {
    id: 8,
    title: "Understanding React Hooks: Beyond the Basics",
    excerpt:
      "Take your React skills to the next level by mastering advanced hooks techniques and patterns for more efficient component development.",
    coverImage: "/api/placeholder/600/400",
    date: "February 10, 2025",
    readTime: "8 min read",
    category: "React",
    tags: ["React Hooks", "JavaScript", "Frontend"],
    slug: "understanding-react-hooks-beyond-basics",
  },
];

// Available categories for filter
const categories = [
  "All",
  "Frontend",
  "Backend",
  "React",
  "TypeScript",
  "CSS",
  "Next.js",
  "Database",
];

export default async function BlogPage () {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");

  const response = await fetch(
    `https://67f3d71ccbef97f40d2c4f34.mockapi.io/blogpost`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const blogPosts = await response.json();


  // Filter posts based on search term and category
  // const filteredPosts = blogPosts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory =
  //     selectedCategory === "All" || post.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
            Thoughts, stories, and ideas on web development, design, and
            technology.
          </p>
        </div>
      </div>
      <section className="py-8 border-b border-gray-200">
        <div className="grid grid-cols-3 mx-auto px-6 max-w-5xl gap-4">
          {blogPosts.map((post: any) => (
            <Link key={post.id} href={`/post/${post.slug}`}>
                <div
                className="bg-gray-200 text-black shadow-md border-green-200 p-5"
                
              >
                
                <h2 className="text-black-500 text-2xl">{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
            
          ))}
        </div>
      </section>
    </div>

    // <div className="bg-gray-50 min-h-screen">
    //   {/* Header Section */}
    //   <div className="bg-blue-600 text-white py-16 md:py-24">
    //     <div className="container mx-auto px-6 max-w-5xl">
    //       <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
    //       <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
    //         Thoughts, stories, and ideas on web development, design, and
    //         technology.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Search and Filter Section */}
    //   <section className="py-8 bg-white border-b border-gray-200">
    //     <div className="container mx-auto px-6 max-w-5xl">
    //       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    //         <div className="relative md:w-1/3">
    //           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //             <Search size={20} className="text-black-800" />
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Search articles..."
    //             className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //           />
    //         </div>

    //         <div className="flex overflow-x-auto md:overflow-visible space-x-2 pb-2 md:pb-0">
    //           {categories.map((category) => (
    //             <button
    //               key={category}
    //               className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
    //                 selectedCategory === category
    //                   ? "bg-blue-600 text-white"
    //                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    //               }`}
    //               onClick={() => setSelectedCategory(category)}
    //             >
    //               {category}
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Blog Posts Grid */}
    //   <section className="py-16">
    //     <div className="container mx-auto px-6 max-w-5xl">
    //       {filteredPosts.length > 0 ? (
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //           {filteredPosts.map((post) => (
    //             <div
    //               key={post.id}
    //               className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    //             >
    //               <Link href={`/blog/${post.slug}`} className="block">
    //                 <img
    //                   src={post.coverImage}
    //                   alt={post.title}
    //                   className="w-full h-48 object-cover"
    //                 />
    //               </Link>
    //               <div className="p-6">
    //                 <div className="flex items-center mb-3">
    //                   <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
    //                     {post.category}
    //                   </span>
    //                 </div>

    //                 <Link href={`/blog/${post.slug}`} className="block">
    //                   <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
    //                     {post.title}
    //                   </h2>
    //                 </Link>

    //                 <p className="text-gray-600 mb-4 line-clamp-3">
    //                   {post.excerpt}
    //                 </p>

    //                 <div className="flex items-center text-sm text-gray-500 mt-auto">
    //                   <div className="flex items-center mr-4">
    //                     <Calendar size={16} className="mr-1" />
    //                     <span>{post.date}</span>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Clock size={16} className="mr-1" />
    //                     <span>{post.readTime}</span>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       ) : (
    //         <div className="text-center py-16">
    //           <p className="text-xl text-gray-600">
    //             No articles found matching your search criteria.
    //           </p>
    //           <button
    //             onClick={() => {
    //               setSearchTerm("");
    //               setSelectedCategory("All");
    //             }}
    //             className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    //           >
    //             Clear Filters
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </section>

    //   {/* Newsletter Section */}
    //   <section className="py-16 bg-blue-50">
    //     <div className="container mx-auto px-6 max-w-5xl">
    //       <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
    //         <div className="text-center mb-8">
    //           <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
    //             Subscribe to my Newsletter
    //           </h2>
    //           <p className="text-gray-600 max-w-2xl mx-auto">
    //             Get notified when I publish new articles and receive exclusive
    //             content right in your inbox.
    //           </p>
    //         </div>

    //         <form className="max-w-xl mx-auto">
    //           <div className="flex flex-col sm:flex-row gap-4">
    //             <input
    //               type="email"
    //               placeholder="Enter your email"
    //               className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //               required
    //             />
    //             <button
    //               type="submit"
    //               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
    //             >
    //               Subscribe
    //             </button>
    //           </div>
    //           <p className="text-sm text-gray-500 mt-3 text-center">
    //             I respect your privacy. Unsubscribe at any time.
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Browse by Tag Section */}
    //   <section className="py-16 bg-white">
    //     <div className="container mx-auto px-6 max-w-5xl">
    //       <h2 className="text-2xl font-bold text-blue-600 mb-8">
    //         Browse by Tag
    //       </h2>

    //       <div className="flex flex-wrap gap-2">
    //         {/* Extract unique tags from all posts */}
    //         {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map(
    //           (tag) => (
    //             <Link
    //               href={`/blog/tag/${tag}`}
    //               key={tag}
    //               className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
    //             >
    //               <div className="flex items-center">
    //                 <Tag size={14} className="mr-1" />
    //                 <span>{tag}</span>
    //               </div>
    //             </Link>
    //           )
    //         )}
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};


