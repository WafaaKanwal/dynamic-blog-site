'use client';
import { useState } from 'react';

interface Comment {
  name: string;
  text: string;
}

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAddComment = () => {
    if (name && text) {
      const newComment = { name, text };
      setComments((prevComments) => [...prevComments, newComment]);
      setName('');
      setText('');
    }
  };

  // Example usage of postId (optional for future functionality)
  console.log('Post ID:', postId);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-teal-400">Comments</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 bg-gray-700 text-gray-200 rounded"
        />
        <textarea
          placeholder="Your Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full mb-2 p-2 bg-gray-700 text-gray-200 rounded"
        />
        <button
          onClick={handleAddComment}
          className="bg-teal-600 px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Add Comment
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-800 rounded">
            <p className="font-bold text-indigo-400">{comment.name}</p>
            <p className="text-gray-300">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}