import { posts } from '@/app/data/posts';
import CommentSection from '@/app/components/CommentSection';
import Image from 'next/image';

export default function PostDetails({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) return <div className="text-center text-red-500">Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-800  to-gray-700 text-gray-200 flex items-center justify-center px-6 py-8">
      <div className="max-w-4xl w-full bg-gray-900 shadow-2xl rounded-3xl p-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
          {post.title}
        </h1>

        {/* Image Section */}
        <div className="relative mb-8">
          <Image
            src={post.image}
            alt={post.title}
            layout="responsive"
            width={1000} // Specify the image width
            height={600} // Specify the image height
            className="rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-3xl"></div>
        </div>

        {/* Content Section */}
        <p className="text-lg leading-relaxed text-gray-300 mb-8">{post.content}</p>

        {/* Comments Section */}
        <div className="border-t-2 border-gray-600 pt-8">
          {/* Ensure post.id is passed as a number */}
          <CommentSection postId={Number(post.id)} />
        </div>
      </div>
    </div>
  );
}
