// Arrays são objetos com chaves numéricas e propriedades especiais (length, métodos de Array.prototype). Internamente:
// ["a", "b", "c"]
// é equivalente a:
// { 0: "a", 1: "b", 2: "c", length: 3 }
let vetor1 = [1,3,5,7,9];
console.log(vetor1);
console.log(vetor1.length);
const vetor2 = ["Carlos","Godofredo", "Orozimbo", "Nabucodonossor"];
console.log(vetor2);
console.log(vetor2.length);
vetor1[1] = 6;
vetor2[1] = "Josefina";
console.log(vetor1);
console.log(vetor2);
console.log(vetor2[3]);
console.log(vetor1[4]);