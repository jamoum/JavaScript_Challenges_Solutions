function percentDiff(num1, num2) {
  // Your code here.
  let diff1 = num1 - num2;
  let halfSum = (num1 + num2)/2;
  return Math.round(100 * Math.abs(diff1 / (halfSum) *10 ))/10;
}
// console.log(percentDiff(60, 100))
// console.log(percentDiff(5439, 4538))
module.exports = percentDiff;
