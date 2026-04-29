/* 
Escrever um programa para gerar e escrever uma tabela com os
valores do seno de um ângulo A em radianos, utilizando a série de
Mac-Laurin truncada, apresentada a seguir:

Condições: os valores dos ângulos A devem variar de 0,0 a 3,3,
inclusive de 0,3 em 0,3.
*/
const inicio = 0;
const fim = 3.3;
const passo = 0.3;
// Fórmula para calculo de número de passos em sequência fixa
const passos = Math.round((fim - inicio) / passo) + 1; // no exercício passos = 12 

let seno;
let angulo;

// ── do/while ─────────────────────────────────────────────
let i = 0;
do {
    angulo = i * passo;
    seno   = angulo - (angulo ** 3) / 6 + (angulo ** 5) / 120 - (angulo ** 7) / 5040;
    console.log(`Ângulo A: ${angulo.toFixed(1)} sen(A): ${seno.toFixed(6)}`);
    i = i + 1;
} while (i < passos);

// ── while ────────────────────────────────────────────────
i = 0;
while (i < passos) {
    angulo = i * passo;
    seno   = angulo - (angulo ** 3) / 6 + (angulo ** 5) / 120 - (angulo ** 7) / 5040;
    console.log(`Ângulo A: ${angulo.toFixed(1)} sen(A): ${seno.toFixed(6)}`);
    i = i + 1;
}

// ── for ──────────────────────────────────────────────────
for (let i = 0; i < passos; i++) {
    angulo = i * passo;
    seno   = angulo
           - (angulo ** 3) / 6
           + (angulo ** 5) / 120
           - (angulo ** 7) / 5040;

    console.log(`Ângulo A: ${angulo.toFixed(1)} sen(A): ${seno.toFixed(6)}`);
}

/* nao utilizei essa aqui pois ao que parece somar float repetidamente pode resultar em acumulo de erros por conta da representacao binaria de float como 0.3
seno = 0;
angulo = 0;
do { 
    seno = angulo - (Math.pow(angulo, 3) / 6) + (Math.pow(angulo, 5) / 120) - (Math.pow(angulo, 7) / 5040);
    console.log(seno.toFixed(6)); 
    angulo = angulo + 0.3; 
    } while (angulo <= 3.3);
*/ 