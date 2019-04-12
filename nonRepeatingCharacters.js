function findNonRepeatingChars(string, degreeOfRepeat) {
  string = string.split("");
  let obj = {};
  let count = 0;
  for (let i of string) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let key of string) {
    if (obj[key] === 1) {
      count++;
      if (count === degreeOfRepeat) {
        return key;
      }
    }
  }
}

findNonRepeatingChars("aabbceccd", 1);
