import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  username: { type: String, required: true , unique: true },
  password: { type: String, required: true},
  // savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const  Auth_Model1 = mongoose.model("auths", AuthorSchema);