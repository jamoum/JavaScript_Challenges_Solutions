
function getAbsSum(arr) {
  // Your code here.
  const initialValue = 0;
  const reducer = (accumulator, item) => accumulator += Math.abs(item);
  return arr.reduce(reducer, initialValue);
}
// console.log(getAbsSum([8, 9, 10, 32, 101, -10]));
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));
module.exports = getAbsSum;
