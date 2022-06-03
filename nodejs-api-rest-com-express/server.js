import http from "http";

const port = 3000;

const routes = {
  "/": "Curso de Node",
  "/livros": "Página de livros",
  "/autores": "Listagem de autores",
  "/editora": "Página da editora",
  "/sobre": "Informação sobre o projeto",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}.`);
});
