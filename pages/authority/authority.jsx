// pages/authority-home.js
"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/AuthoritySidebar';
import Navbar from '../../components/AuthorityNav';
import { RxAvatar } from 'react-icons/rx';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const AuthorityHome = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            // Example proposals hardcoded for demonstration
            const examplePosts = [
                {
                    _id: '1',
                    userId: 'authority123',
                    time: new Date(Date.now() - 300000000), // One hour ago
                    content: 'Proposal 1: Improve Street Lighting in Sector A',
                    votes: 10,
                    comments: ['Great idea!', 'We need this.'],
                },
                {
                    _id: '2',
                    userId: 'authority123',
                    time: new Date(Date.now() - 722200000), // Two hours ago
                    content: 'Proposal 2: Community Clean-up Event',
                    votes: 15,
                    comments: ['Count me in!', 'Let’s make our community beautiful.'],
                },
                {
                    _id: '3',
                    userId: 'authority123',
                    time: new Date(Date.now() - 1700000), // Three hours ago
                    content: 'Proposal 3: Enhance Public Transportation System',
                    votes: 8,
                    comments: ['This will greatly benefit commuters.', 'I support this proposal.'],
                },
                {
                    _id: '4',
                    userId: 'authority123',
                    time: new Date(Date.now() - 14400000), // Four hours ago
                    content: 'Proposal 4: Establish Recreational Parks',
                    votes: 12,
                    comments: ['We need more green spaces!', 'Great for families and children.'],
                },
            ];

            setPosts(examplePosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    fetchPosts();
  }, []);

  const handleVote = async (postId, type) => {
    try {
      // Code to handle voting on a proposal
      // ...

      // After voting, update the UI with the updated proposal
      // setPosts(updatedPosts);
    } catch (error) {
      console.error('Error voting on post:', error);
    }
  };

  const handleCommentSubmit = async (postId, comment) => {
    try {
      // Code to handle submitting a comment on a proposal
      // ...

      // After submitting, update the UI with the updated proposal
      // setPosts(updatedPosts);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const formatDate = (dateTime) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateTime) => {
    return new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div>
        <Navbar />
    <div className="flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 to-teal-100 text-gray-800">
      <Sidebar />
      
      <div className="container mx-auto mt-8 flex-grow sm:ml-8">
        

        <div>
          <h2 className="text-2xl font-bold mb-4">Current Proposals</h2>
          {posts.map((post) => (
            <div key={post._id} className="mb-10 p-6 border rounded bg-slate-300 shadow-md w-2/3">
              <div className="flex items-center mb-2">
                <RxAvatar />
                <div className="ml-2">
                  <p className="font-bold text-gray-800">{post.userId}</p>
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold">on</span>{' '}
                    {formatDate(post.time)} at {formatTime(post.time)}
                  </p>
                </div>
              </div>
              <p className="text-gray-800">{post.content}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleVote(post._id, 'upvote')}
                  className="mr-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  <MdKeyboardArrowUp />
                </button>
                <span className="font-bold text-gray-800">{post.votes}</span>
                <button
                  onClick={() => handleVote(post._id, 'downvote')}
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
                      handleCommentSubmit(post._id, comment);
                      e.target.reset();
                    }
                  }}
                  className="flex items-center"
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    className="w-8/12 p-2 sm:mr-7 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
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
                    <div key={index} className="bg-gray-200 p-2 rounded mt-1">
                      <p className="text-gray-800">{comment}</p>
                      <p className="text-gray-500 text-sm">
                        <span className="font-bold">on</span>{' '}
                        {formatDate(post.time)} at {formatTime(post.time)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthorityHome;
