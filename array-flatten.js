let a = [1, 2, [3, 4, [5, 6, [7, [8, [8], 9], 7], 2]]];

function flatten(arr) {
  let temp = [];
  for (let i of arr) {
    if (Object.prototype.toString.call(i) === "[object Array]") {
      temp = temp.concat(flatten(i));
    } else {
      temp.push(i);
    }
  }
  return temp;
}

console.log(flatten(a));
