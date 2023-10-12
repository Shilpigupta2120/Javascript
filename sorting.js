`javascript
var arr = [5, 3, 1, 4, 2];

arr.sort(function(a, b) {
  return b - a;
});

console.log(arr); // output: [5, 4, 3, 2, 1]
