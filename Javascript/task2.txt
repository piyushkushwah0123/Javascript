function flat10(price) {
  return price * 0.90;
}

function festival(price) {
  return price * 0.8;
}

function loyalty(price) {
  return price * 0.85;
}

function bulkPurchase(price) {
  return price * 0.75;
}

let discounts = [flat10, festival, loyalty, bulkPurchase];

let price = 1000;

console.log("Flat10 Discount:", discounts[0](price));
console.log("Festival Discount:", discounts[1](price));
console.log("Loyalty Discount:", discounts[2](price));
console.log("Bulk Purchase Discount:", discounts[3](price));
