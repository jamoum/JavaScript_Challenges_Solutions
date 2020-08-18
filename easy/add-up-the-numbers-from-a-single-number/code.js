function addUp(num) {
  // Your code here.
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}
// console.log(addUp(4));
module.exports = addUp;
