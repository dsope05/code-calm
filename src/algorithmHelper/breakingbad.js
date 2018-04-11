
const elements = {
    c: 1,
    na: 1,
    al: 1,
    o: 1,
    i: 1,
    ra: 1,
    k: 1,
    ca: 1,
    n: 1,
    h: 1,
    s: 1,
};
const createStringHelper = (string, j, double) => {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === j && !double) {
      newStr = newStr + '[' + string[i].toUpperCase() + ']';
      const endStr = string.slice(i+1);
      newStr += endStr;
      break;
    }
    if (i === (j + 1) && double) {
      newStr += `[${string[i]}${string[i + 1]}]`
      const endStr = string.slice(i+1);
      newStr += endStr;
      break;
    }
    newStr += string[i];
      /*
    if (i === j + 1 && double) {
      newStr += string[i] + ']';
      bol = true;
    }
    if (i === j + 2 && double) {
      newStr = newStr + string[i];
      bol = true;
    }
    if (bol === false) {
      newStr += string[i];
    }
  */
  };
  return newStr;
};

const breakingbad = (string) => {
  for (let i = 0; i <= string.length; i++) {
    if (elements[string[i]]) {
      return createStringHelper(string, i);
    }
    let doubleLetter = string[i] + string[i + 1];
    if (elements[doubleLetter]) {
      return createStringHelper(string, i, 'double');
    }
  }
};

export default breakingbad;
