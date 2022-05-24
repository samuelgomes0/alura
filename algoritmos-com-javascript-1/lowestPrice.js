export function lowestPrice(productsArray, startingPosition) {
  let index = startingPosition;
  let cheapest = startingPosition;

  for (index; index < productsArray.length; index++) {
    if (productsArray[index].price < productsArray[cheapest].price) {
      cheapest = index;
    }
  }

  return cheapest;
}
