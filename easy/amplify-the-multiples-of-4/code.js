function amplify(num) {
  // Your code here.
  // var arr = [];
  // for (var i = 1; i <= num; i++) {
  //   if (i % 4 != 0)
  //     arr[i-1] = i;
  //   else arr[i-1] = i*10;
  // }
  return Array.from(Array(num), (_,i)=> ((++i%4 != 0 ) ? i :  i*10))
}

// console.log(amplify(3));
module.exports = amplify;
