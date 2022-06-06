import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((error, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAuthorId = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (error, authors) => {
      if (error) {
        res
          .status(400)
          .send({ message: `${error.message} - ID não localizada.` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static logAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - Erro ao cadastrar autor.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor atualizado com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor excluído com sucesso." });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
}

export default AuthorController;
