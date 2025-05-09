import { notFound } from "next/navigation";

// Type definitions
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


export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const res = await fetch(
    `https://67f3d71ccbef97f40d2c4f34.mockapi.io/blogpost?slug=${slug}`,{method: 'GET'}
  );
  if (!res.ok) { 
    notFound();
  }
  const post = await res.json();
  // console.log(post[0].title);
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <p className="mt-2 text-blue-100">Thoughts, ideas, and stories</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl text-gray-800 font-bold mb-2">
          {post[0].title}
        </h1>
        <p className="text-black mb-4">
          Published by {post[0].author} | Publised on {post[0].date}
        </p>
        <p className="text-gray-800">{post[0].content}</p>
      </main>
    </div>
  );
};


