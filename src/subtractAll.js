const subtractAll = (...all) => all.reduce((acc, val) => val - acc, 0);

const subtract = subtractAll(5, 4, 3, 2, 1);

console.log("subtract all: ", subtract);