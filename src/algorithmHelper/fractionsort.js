//You have 10 minutes from now to complete the challenge.

//  JavaScript

let nums = [];
for (let i=0; i < 100; i++) {
    nums.push(Math.floor(Math.random() * 1000)/1000 + Math.floor(Math.random() * 1000));
}

  /*
const sortHelper = (a, b, dia, dib, i=1) => {
  if(!a[dia + i]) {
    return a - b; 
  }
  if(!b[dib + i]) {
    return b - a; 
  }
  if (a[dia + i] > b[dia + i]) {
    return 1; 
  }
  if (b[dia + i] > a[dia + i]) {
    return -1; 
  }
  return sortHelper(a,b, dia, dib, i + 1);
}
const sortCompare = (a, b) => {
  const strA = a.toString();
  const strB = b.toString();
  const dia = strA.indexOf('.') + 1;
  const dib = strB.indexOf('.') + 1;
  if (strA[dia] < strB[dib]) {
    return -1; 
  }
  if (strA[dia] > strB[dib]) {
    return 1;
  }
  if (strA[dia] === strB[dib]) {
    return sortHelper(strA, strB, dia, dib)
  }
}
for(let i = 0; i < nums.length; i++) {
  nums.sort((a,b)=> {
    return sortCompare(a, b)
  })
}

*/
nums.sort((a, b) => a % 1 === b % 1 ? a - b : a % 1 - b % 1)

console.log('nums', nums);
// Sort nums using only the fractional portion of each number. 
// // So under this ordering 50.40 is bigger than 100.09
