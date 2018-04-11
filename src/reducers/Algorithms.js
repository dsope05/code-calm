const algorithms = (state = {
  elements: {
    c: 1, na: 1, al: 1, o: 1, i: 1, ra: 1, k: 1, ca: 1, n: 1, h: 1, s: 1 
  } 
}, action) => {
  switch (action.type) {
    case '':
      return {...state};
    default:
      return state;
  }
};

export default algorithms;

