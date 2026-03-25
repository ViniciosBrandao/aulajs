// --- Definição das Variáveis ---
let n1 = 10;
let n2 = 20;
let n3 = 19.25;
let nome1 = "Maria";
let nome2 = `Jose`; // Usando template literal

console.log("--- TESTES DE IGUALDADE (== vs ===) ---");

// 1. Igualdade Abstrata (==) - Foca no valor (faz coerção se necessário)
console.log(`10 == "10"  : ${n1 == "10"}`);     // true (coerção de tipo)
console.log(`20 == 20     : ${n2 == 20}`);       // true (literal)
console.log(`19.25 == n3  : ${19.25 == n3}`);    // true
console.log(`"Maria" == nome1 : ${"Maria" == nome1}`);// true

console.log("--- TESTES DE IGUALDADE (== vs ===) ---");

// 2. Igualdade Estrita (===) - Valor E Tipo devem ser iguais
console.log(`10 === "10"  : ${n1 === "10"}`);    // false (Number vs String)
console.log(`n2 === 20  : ${n2 === 20}`);      // true
console.log(`n3 === 19.25  : ${n3 === 19.25}`);   // true
console.log(`nome2 === "Jose"  : ${nome2 === "Jose"}`);    // true

console.log("\n--- TESTES DE DIFERENÇA (!= vs !==) ---");

// 3. Diferença Abstrata (!=)
console.log(`n1 != 20            : ${n1 != 20}`);       // true
console.log(`19.25 != "19.25"    : ${19.25 != "19.25"}`);// false (valores são iguais após conversão)
console.log(`nome1 != "Maria"    : ${nome1 != "Maria"}`);// false
console.log(`nome2 != "Maria"    : ${nome2 != "Maria"}`);// true

console.log("\n--- TESTES DE DIFERENÇA (!= vs !==) ---");

// 4. Diferença Estrita (!==)
console.log(`n1 !== "10"  : ${n1 !== "10"}`);    // true (são tipos diferentes)
console.log(`20 !== 20   : ${n2 !== 20}`);      // false (são idênticos)
console.log(`n3 !== 19.25        : ${n3 !== 19.25}`);   // false
console.log(`nome1 !== nome2     : ${nome1 !== nome2}`); // true
