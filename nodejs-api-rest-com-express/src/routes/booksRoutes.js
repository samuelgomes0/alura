import express from "express";
import BookControler from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/livros", BookControler.listBooks)
  .get("/livros/:id", BookControler.listBookId)
  .post("/livros", BookControler.logBook)
  .put("/livros/:id", BookControler.updateBook);

export default router;
