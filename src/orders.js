var TAX = 0.2

export function calcTotal(items, discount) {
  var total = 0
  for (var i = 0; i < items.length; i++) {
    if (items[i].price == null) {
      console.log("no price for", items[i].name)
    } else {
      total = total + items[i].price * items[i].qty
    }
  }
  if (discount != undefined) {
    total = total - total * discount
  }
  return total + total * TAX
}

export function unusedHelper(x) {
  return x
}