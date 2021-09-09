const addAll = (...a) => a.reduce((acc, val) => acc + val, 0);

const add = addAll(1, 3, 5, 7, 8);

console.log("sum is: ", add); 