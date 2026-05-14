const array = [2, 5, 3, 7, 4, 9];

let str1 = "VETOR = [ ";
for(const elemento of array) {
    str1 += elemento + " | ";
}
console.log(str1);