function mean(arr) {
  // Your code here.
  // var sum = 0;
  // var avg;
  // for (var i = 0; i < arr.length; i++) {
  //   sum = sum += arr[i];
  //   avg = sum / arr.length;
  // }
  // return Math.round((avg + Number.EPSILON) * 100) / 100;

  const avg = arr.reduce((a,b)=>a+b,0)/arr.length;
  return Math.round((avg + Number.EPSILON) * 100) / 100;
}
// console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
// console.log(mean([324, 543, 654, 9876]));

module.exports = mean;
