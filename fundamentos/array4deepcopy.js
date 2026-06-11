const original = [1, 2, [3, 4]];
const deep = JSON.parse(JSON.stringify(original));
deep[2][0] = 999;
console.log(original[2][0]);