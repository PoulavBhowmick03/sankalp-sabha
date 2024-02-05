import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Post = ({ post, handleVote, handleCommentSubmit }) => {
  return (
    <div className="mb-10 p-2 border rounded bg-gray-800 shadow-md w-2/3">
      <div className="flex items-center mb-2">
        <RxAvatar />
        <div className="ml-2">
          <p className="font-bold text-white">{post.userId}</p>
          <p className="text-gray-500 text-sm">
            <span className="font-bold">on</span>{' '}
            {new Date(post.time).toLocaleDateString()}{' '}
            {new Date(post.time).toLocaleTimeString()}
          </p>
        </div>
      </div>
      <p className="text-white">{post.content}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => handleVote(post.id, 'upvote')}
          className="mr-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <MdKeyboardArrowUp />
        </button>
        <span className="font-bold text-white">{post.votes}</span>
        <button
          onClick={() => handleVote(post.id, 'downvote')}
          className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div className="mt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const comment = e.target.comment.value;
            if (comment.trim() !== '') {
              handleCommentSubmit(post.id, comment);
              e.target.reset();
            }
          }}
          className="flex items-center"
        >
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="w-8/12 p-2 sm:mr-7 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Comment
          </button>
        </form>
        <div className="mt-2">
          {post.comments.map((comment, index) => (
            <div key={index} className="bg-gray-600 p-2 rounded mt-1">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
