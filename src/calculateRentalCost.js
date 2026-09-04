/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = days * 40;

  if (days >= 3) {
    totalAmount = days * 40 - 20;
  }

  if (days >= 7) {
    totalAmount = days * 40 - 50;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
