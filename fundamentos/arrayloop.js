const array = [2, 5, 3, 7, 4, 9];

let str1 = "VETOR = [ ";
for(let pos = 0; pos < array.length; pos++) {
        str1 += array[pos] + " | ";
}
console.log(str1);

let str2 = "VETOR = [ ";
let pos = 0;
while(pos < array.length) {
    str2 += array[pos] + " | ";
    pos++;
}
console.log(str2);

let str3 = "VETOR = [ ";
let pos1 = 0;
do{
    str3 += array[pos1] + " | ";
    pos1++;
} while (pos1 < array.length);
console.log(str3);