import mongoose from "mongoose";

const BlogPost = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: String, required: true},
  likes: { type: Number, default: 0 },
  timestamp: {
    type: Date,
    default: Date.now, // or new Date() for a UTC timestamp
  },
})


export const  BlogPost_Model1 = mongoose.model("blogs", BlogPost);



