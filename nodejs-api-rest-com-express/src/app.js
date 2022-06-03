import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso.");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/livros/:id", (req, res) => {
  let index = searchBook(req.params.id);

  res.json(books[index]);
});

app.post("/livros", (req, res) => {
  books.push(req.body);

  res.status(201).send("Livro cadastrado com sucesso.");
});

app.put("/livros/:id", (req, res) => {
  let index = searchBook(req.params.id);

  books[index].title = req.body.title;

  res.json(books);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);

  books.splice(index, 1);

  res.send(`Livro ${id} removido com sucesso.`);
});

function searchBook(id) {
  return books.findById((book) => book.id == id);
}

export default app;
