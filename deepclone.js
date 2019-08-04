function deepClone(arg) {
  const string = "[object String]";
  const number = "[object Number]";
  const array = "[object Array]";
  const object = "[object Object]";
  const func = "[object Function]";
  function getTypeOf(value) {
    return Object.prototype.toString.call(value);
  }
  if (!arg) return;
  if (getTypeOf(arg) === func) {
    return arg;
  }
  if (getTypeOf(arg) === string || getTypeOf(arg) === number) {
    return arg;
  }
  if (getTypeOf(arg) === array) {
    let arr = [];
    for (let i of arg) {
      if (getTypeOf(i) === string || getTypeOf(i) === number) {
        arr.push(i);
      } else {
        arr.push(deepClone(i));
      }
    }
    return arr;
  }
  if (getTypeOf(arg) === object) {
    let newObj = {};
    for (let key in arg) {
      if (getTypeOf(arg[key]) === string || getTypeOf(arg[key]) === number) {
        newObj[key] = arg[key];
      } else {
        newObj[key] = deepClone(arg[key]);
      }
    }
    return newObj;
  }
}

const obj1 = {
  a: 2,
  b: "helo",
  c: {
    g: function() {
      console.log("hello");
    },
    h: [2, 4, 5, 6, 7],
    u: [
      {
        a: 5,
        h: 6,
        o: [4, 6, 8],
        k: {
          g: [5, "h", { n: 3 }]
        }
      }
    ]
  }
};

console.log(deepClone("jbjhhjh"), deepClone(obj1), obj1);
