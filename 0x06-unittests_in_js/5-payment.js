import { Utils } from './utils.js';

export function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};
