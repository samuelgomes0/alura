import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/autores", AuthorController.listAuthors)
  .get("/autores/:id", AuthorController.listAuthorId)
  .post("/autores", AuthorController.logAuthor)
  .put("/autores/:id", AuthorController.updateAuthor)
  .delete("/autores/:id", AuthorController.deleteAuthor);

export default router;
