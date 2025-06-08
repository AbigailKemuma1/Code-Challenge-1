//Enter your code here// 
function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015; // 1.5%
  const minFee = 10;           // KES
  const maxFee = 70;           // KES

  let fee = amountToSend * feePercentage;

  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Transaction amount: KES ${amountToSend.toFixed(2)}`);
  console.log(`Transaction fee: KES ${fee.toFixed(2)}`);
  console.log(`Total amount debited: KES ${totalDebited.toFixed(2)}`);
}
const input = prompt("Enter the amount of money you wish to send (KES):");
const amountToSend = Number(input);

if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Please enter a valid positive number for the amount.");
}


