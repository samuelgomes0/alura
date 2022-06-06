import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/livros", BookController.listBooks)
  .get("/livros/busca", BookController.listBookByPublisher)
  .get("/livros/:id", BookController.listBookId)
  .post("/livros", BookController.logBook)
  .put("/livros/:id", BookController.updateBook)
  .delete("/livros/:id", BookController.deleteBook);

export default router;
