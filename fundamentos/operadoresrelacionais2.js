// --- Definição das Variáveis ---
let n1 = 10;
let n2 = 20;
let n3 = 19.25;
let nome1 = "Maria";
let nome2 = `Jose`; // Usando template literal

console.log("--- TESTES DE MAGNITUDE (MAIOR E MENOR) ---");

// 1. Maior que (>) e Menor que (<) com Números
console.log(`n1 > n2 (10 > 20)          : ${n1 > n2}`);      // false
console.log(`n2 > n3 (20 > 19.25)       : ${n2 > n3}`);      // true
console.log(`n1 < 15 (10 < 15)          : ${n1 < 15}`);      // true (literal)
console.log(`n3 < n1 (19.25 < 10)       : ${n3 < n1}`);      // false

console.log("--- TESTES DE MAGNITUDE (MAIOR E MENOR) ---");

// 2. Maior ou Igual (>=) e Menor ou Igual (<=)
console.log(`n1 >= 10 (10 >= 10)         : ${n1 >= 10}`);     // true (limite inclusivo)
console.log(`n3 <= 20 (19.25 <= 20)      : ${n3 <= 20}`);     // true
console.log(`n2 >= 25 (20 >= 25)         : ${n2 >= 25}`);     // false
console.log(`n1 <= 9 (10 <= 9)           : ${n1 <= 9}`);       // false

console.log("\n--- COMPARAÇÃO DE STRINGS (ORDEM ALFABÉTICA) ---");

// 3. Strings com > e < (Baseado na tabela Unicode/ASCII)
console.log(`"Maria" > "Jose"           : ${nome1 > nome2}`); // true ("M" vem depois de "J")
console.log(`"Jose" < "Maria"           : ${nome2 < nome1}`); // true
console.log(`"Maria" >= "Maria"         : ${nome1 >= "Maria"}`);// true

console.log("\n--- COMPARAÇÃO DE STRINGS (ORDEM ALFABÉTICA) ---");

// 4. Comparações "Mistas" (String numérica vs Number)
// O JS tenta converter a string para número em operações de magnitude
console.log(`"30" > n2 ("30" > 20)      : ${"30" > n2}`);    // true
console.log(`"5" < n1 ("5" < 10)        : ${"5" < n1}`);     // true
