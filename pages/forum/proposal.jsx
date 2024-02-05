import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { RxAvatar } from "react-icons/rx";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() !== "") {
      try {
        const { data } = await axios.post("/api/posts", {
          content: newPost,
        });
        console.log("Server Response:", data);
        setPosts([data, ...posts]);
        setNewPost("");
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };
  
  

  const handleVote = async (postId, type, index) => {
    try {
      await axios.put("/api/posts", { postId, type, index });
      posts[index] = post;
      setPosts([...posts]);
    } catch (error) {
      console.error("Error voting on post:", error);
    }
  };

  const handleCommentSubmit = async (postId, comment, postIndex) => {
    try {
      const { data: updatedPost } = await axios.put("/api/posts", {
        postId,
        type: "comment", // Assuming there is a type field in your server for comments
        comment,
      });

      const updatedPosts = [...posts];
      updatedPosts[postIndex] = updatedPost;
      setPosts(updatedPosts);
      setComment(""); // Clear the comment input after successful submission
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className='flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white'>
      <Sidebar />
      <div className='container mx-auto mt-8 flex-grow sm:ml-8'>
        <div className='mb-4 w-2/3'>
          <h2 className='text-2xl font-bold mb-2'>Create New Proposal</h2>
          <form onSubmit={handlePostSubmit} className='flex items-center'>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              className='w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-800 text-white'
            />
            <button
              type='submit'
              className='ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600'
            >
              Post
            </button>
          </form>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-4'>Current Proposals</h2>
          {posts.map((post, index) => (
            <div
              key={post._id}
              className='mb-10 p-2 border rounded bg-gray-800 shadow-md w-2/3'
            >
              <div className='flex items-center mb-2'>
                <RxAvatar />
                <div className='ml-2'>
                  <p className='font-bold text-white'>{post.userId}</p>
                  <p className='text-gray-500 text-sm'>
                    <span className='font-bold'>on</span>{" "}
                    {new Date(post.time).toLocaleDateString()}{" "}
                    {new Date(post.time).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <p className='text-white'>{post.content}</p>
              <div className='flex items-center mt-2'>
                <button
                  onClick={() => handleVote(post._id, "upvote", index)}
                  className='mr-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600'
                >
                  <MdKeyboardArrowUp />
                </button>
                <span className='font-bold text-white'>{post.votes}</span>
                <button
                  onClick={() => handleVote(post._id, "downvote", index)}
                  className='ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                >
                  <MdKeyboardArrowDown />
                </button>
              </div>
              <div className='mt-2'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentSubmit(post._id, comment, index);
                  }}
                  className='flex items-center'
                >
                  <input
                    type='text'
                    name='comment'
                    placeholder='Add a comment...'
                    className='text-black w-8/12 p-2 sm:mr-7 border rounded-lg focus:outline-none focus:border-blue-500'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='px-2 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600'
                  >
                    Comment
                  </button>
                </form>
                <div className='mt-2'>
                  {post.comments.map((comment, index) => (
                    <div key={index} className='bg-gray-600 p-2 rounded mt-1'>
                      {comment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
