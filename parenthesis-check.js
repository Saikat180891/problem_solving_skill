let check = function(str) {
  const parenthesis = ["{", "}", "[", "]", "(", ")"];
  const openParenthsis = ["{", "[", "("];
  const closedParenthsis = ["}", "]", ")"];
  let matchedOPenBracket;

  const stack = [];

  function isParenthesis(char) {
    return parenthesis.indexOf(char) > -1;
  }

  function main() {
    for (let i = 0; i < str.length; i++) {
      if (isParenthesis(str[i])) {
        if (closedParenthsis.indexOf(str[i]) > -1) {
          matchedOPenBracket = openParenthsis[closedParenthsis.indexOf(str[i])];

          if (stack.length === 0 || stack.pop() != matchedOPenBracket) {
            return false;
          }
        } else {
          stack.push(str[i]);
        }
      }
    }
    return stack.length == 0;
  }

  console.log(main());
};

check("{[d(a)]}");
