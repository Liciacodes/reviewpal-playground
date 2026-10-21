// Order helpers

function formatPrice(amount) {
  return "₦" + amount.toFixed(2);
}

function countItems(order) {
  return order.items.length;
}

function orderTotal(order) {
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.qty;
  }
  return total;
}

function applyDiscount(total, percent) {
     if (percent > 100) return 0;
     return total - total * percent;
   }

module.exports = { formatPrice, countItems, orderTotal, applyDiscount };
