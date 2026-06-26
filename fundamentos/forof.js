const array = [2, 5, 3, 7, 4, 9];

let str1 = "VETOR = [ ";
for(const elemento of array) {
    str1 += elemento + " | ";
}
console.log(str1);

// for...of
// Itera sobre valores de qualquer iterável diretamente:
for (const char of "abc");    // strings
for (const item of [1,2,3]);    // arrays
for (const item of new Set());  // Sets

//Diferente do for...in (que itera chaves/índices, fonte de bugs em arrays — evite for...in em arrays):
for (const i in ["a","b"]);   // "0", "1" — índices como strings
for (const v of ["a","b"]);  // "a", "b" — valores diretos
