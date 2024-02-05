import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  },
  comments: {
    type: [{ type: String }],
    required: true,
    default: [],
  },
},
  {
    timestamps: true,
  });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
