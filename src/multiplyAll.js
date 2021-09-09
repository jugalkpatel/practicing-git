const multiplyAll = (...a) => a.reduce((acc, val) => acc * val, 1);

const multiply = multiplyAll(1, 2, 3, 4, 5);

console.log("multiply all", multiply);