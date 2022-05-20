import { books } from "./books.js";

function insertionSort(list) {
  let index = 0;

  for (index; index < list.length; index++) {
    let analysis = index;

    while (analysis > 0 && list[analysis].price < list[analysis - 1].price) {
      let analysisItem = list[analysis];
      let lastItem = list[analysis - 1];

      list[analysis] = lastItem;
      list[analysis - 1] = analysisItem;

      analysis--;
    }
  }

  console.log(list);
}

insertionSort(books);
