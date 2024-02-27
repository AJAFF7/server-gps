// import mongoose from "mongoose";

// const imageSchema = new mongoose.Schema({
//   filename: String,
//   path: String,
//   uploadDate: { type: Date, default: Date.now }
// });
// export const Image = mongoose.model('Image', imageSchema)

// Define a schema for storing image metadata
const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  mimeType: String,
  uploadDate: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema)