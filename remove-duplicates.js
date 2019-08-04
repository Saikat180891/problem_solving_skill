let myarr = [12, 2, 45, 51, 2, 32, 4, 5, 3, 2, 1, 6, 8, 55, 45, 12];

function removeDuplicates(arr) {
  const obj = {};

  for (let i of arr) {
    obj[i] = true;
  }

  return Object.keys(obj);
}

function removeDuplicates2(arr) {
  let newArr = [];
  for (let i of arr) {
    if (newArr.indexOf(i) === -1) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(removeDuplicates(myarr));

console.log(removeDuplicates2(myarr));

console.log([...new Set(myarr)]);
