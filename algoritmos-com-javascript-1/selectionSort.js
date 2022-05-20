import { books } from "./books.js";
import { lowestPrice } from "./lowestPrice.js";

let index = 0;

for (index; index < books.length; index++) {
  let lowest = lowestPrice(books, index);

  let actualBook = books[index];
  let lowestPriceBook = books[lowest];

  books[index] = lowestPriceBook;
  books[lowest] = actualBook;
}

console.log(books);
