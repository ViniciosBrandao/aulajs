const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Manipular array usando for

let str1 = "Array = |";

for (let pos1 = 0; pos1 < array.length; pos1++) {
    str1 += array[pos1] + " | ";
}

let str2 = "Array = |";
let pos2 = 0;
while (pos2 < array.length) {
    str2 += array[pos2] + " | ";
    pos2++;
}

let str3 = "Array = |";
let pos3 = 0;
do {
    str3 += array[pos3] + " | ";
    pos3++;
} while (pos3 < array.length);

let str4 = "Array = |";
for (const elemento of array) {
    str4 += elemento + " | ";
}

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
