import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  pages: { type: Number },
});

const books = mongoose.model("livros", bookSchema);

export default books;
