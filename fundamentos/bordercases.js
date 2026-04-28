let x;
let resultado = x || "padrão";
console.log(resultado);



let total = 0;
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        total += i;
        continue;
    }
    if (i === 5) break;
    total -= 1;
}
console.log(total);

