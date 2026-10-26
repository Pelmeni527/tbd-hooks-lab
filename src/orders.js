const TAX_RATE = 0.2;

function isValidItem(item) {
  return (
    Number.isFinite(item.price) && Number.isInteger(item.qty) && item.qty > 0
  );
}

export function calcSubtotal(items) {
  return items
    .filter(isValidItem)
    .reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function applyDiscount(amount, discount = 0) {
  if (discount < 0 || discount > 1) {
    throw new RangeError("Discount must be between 0 and 1");
  }
  return amount * (1 - discount);
}

export function calcTotal(items, discount = 0) {
  const discounted = applyDiscount(calcSubtotal(items), discount);
  return discounted * (1 + TAX_RATE);
}
