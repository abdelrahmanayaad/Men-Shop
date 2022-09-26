export function getActualPrice(price, discount) {
  if (discount) {
    return price - price * discount;
  }
  return price;
}
