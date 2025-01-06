import Link from 'next/link';
import { posts } from './data/posts';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400">
        Welcome to TechInsights
      </h1>
      <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
         <Image
  src={post.image}
  alt={post.title}
  layout="responsive"
  width={1000} // Specify the image width
  height={224} // Adjust the height according to your design
  className="rounded-t-xl object-cover"
/>
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-3 text-gray-200">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-indigo-100 hover:text-pink-300 transition duration-300"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-6">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block bg-teal-600 text-pink-100 px-5 py-3 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
