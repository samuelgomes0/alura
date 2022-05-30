const listaLivros = require("./arrayOrdenado");

function buscaBinaria(array, de, ate, valorBuscado) {
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

  if (de > ate) {
    return -1;
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return buscaBinaria(array, de, meio - 1, valorBuscado);
  }

  if (valorBuscado > atual.preco) {
    return buscaBinaria(array, meio + 1, ate, valorBuscado);
  }
}

console.log(listaLivros);
console.log(buscaBinaria(listaLivros, 0, listaLivros.length - 1, 60));
