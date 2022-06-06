import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((error, books) => {
        res.status(200).json(books);
      });
  };

  static listBookId = (req, res) => {
    const id = req.params.id;

    books
      .findById(id)
      .populate("author", "name")
      .exec((error, books) => {
        if (error) {
          res
            .status(400)
            .send({ message: `${error.message} - ID não localizada.` });
        } else {
          res.status(200).send(books);
        }
      });
  };

  static logBook = (req, res) => {
    let book = new books(req.body);

    book.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Erro ao cadastrar livro.` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Livro atualizado com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Livro excluído com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static listBookByPublisher = (req, res) => {
    const publisher = req.query.editora;

    books.find({ publisher: publisher }, {}, (err, books) => {
      res.status(200).send(books);
    });
  };
}

export default BookController;
