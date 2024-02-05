import dbConnect from "@/utils/db";
import Post from "@/models/Post";

export default async function handler(req, res) {
  await dbConnect();


  if (req.method === 'GET') {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'POST') {
    const { content } = req.body;
    try {
      // Assuming 'user' is defined or extracted from the request
      const newPost = new Post({
        content,
        user, // Make sure 'user' is defined or extract it from the request
        votes: 0,
        comments: [],
        time: Date.now(),
      });

      await newPost.save();
      return res.status(201).json(newPost);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'PUT') {
    const { postId, type, comment } = req.body;
    try {
      const post = await Post.findById(postId);
      if (type === 'upvote') post.votes++;
      if (type === 'downvote') post.votes--;
      if (type === 'comment') post.comments.push(comment);
      await post.save();

      return res.status(201).json(post);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
