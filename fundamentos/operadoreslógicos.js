// --- Definição das Variáveis ---
// --- Definição das Variáveis ---
let a = 10;
let b = 20;
let c = 19.25;
let nome1 = "Maria";
let nome2 = `Jose`; // Usando template literal

console.log("===== Operador NOT (!) =====")
console.log(!(a > b))          // verdadeiro pois 10 > 20 é falso
console.log(!(nome1 == nome2)) // verdadeiro pois Maria é diferente de Jose

console.log("\n===== Operador AND (&&) =====")
console.log((a < b) && (b > c))          // true && true -> true
console.log((a > b) && (nome1 == "Maria")) // false && true -> false

console.log("\n===== Operador OR (||) =====")
console.log((a > b) || (b > c))          // false || true   -> true
console.log((nome1 == "Maria") || (nome2 == "Ana")) // true || false -> true

console.log("\n===== Testes usando literais diretamente =====")
console.log((10 < 20) && (19.25 < 30));  //true && true  -> true
console.log((10 > 20) || ("Maria" == `Jose`));  //false || false  -> false
console.log(!(19.25 > 50)); //!false  -> true);