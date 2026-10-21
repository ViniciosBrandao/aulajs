// readFileSync(0,'utf8') devolve a STRING:
//   "7 5\n4 2 3 1 2 3 5\n2\n3\n1\n7\n6\n"
//
// .trim()      → "7 5\n4 2 3 1 2 3 5\n2\n3\n1\n7\n6"   (sem o \n final)
// .split(/\s+/) → ["7","5","4","2","3","1","2","3","5","2","3","1","7","6"]
// .map(Number)  → [7, 5, 4, 2, 3, 1, 2, 3, 5, 2, 3, 1, 7, 6]
//
// Agora a desestruturação reparte essa lista por posição:
//   n     = 7                              (posição 0)
//   q     = 5                              (posição 1)
//   resto = [4,2,3,1,2,3,5, 2,3,1,7,6]    (posições 2 em diante: 12 elementos)
const [n, q, ...resto] = require('fs')
    .readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

// slice(início, fim) recorta [início, fim): inclui o início, EXCLUI o fim.
//
// resto.slice(0, 7)  → posições 0 a 6   → valores = [4, 2, 3, 1, 2, 3, 5]
//                      (n = 7 elementos: a LISTA do enunciado)
const valores = resto.slice(0, n);

// resto.slice(7, 12) → posições 7 a 11  → perguntas = [2, 3, 1, 7, 6]
//                      (começa onde a lista terminou e leva q = 5 elementos)
const perguntas = resto.slice(n, n + q);

// PREPARAÇÃO DA LISTA (feita UMA vez). prefixo[k] = soma dos k primeiros valores.
//   começa:   [0]
//   i=0: 0+4  → [0,4]
//   i=1: 4+2  → [0,4,6]
//   i=2: 6+3  → [0,4,6,9]
//   i=3: 9+1  → [0,4,6,9,10]
//   i=4: 10+2 → [0,4,6,9,10,12]
//   i=5: 12+3 → [0,4,6,9,10,12,15]
//   i=6: 15+5 → [0,4,6,9,10,12,15,20]
const prefixo = [0];
for (let i = 0; i < n; i++) {
    prefixo.push(prefixo[i] + valores[i]);
}

// responder recebe UMA pergunta (x) e devolve UMA resposta.
//   responder(2) → prefixo[2] → 6
//   responder(7) → prefixo[7] → 20
function responder(x) {
    return prefixo[x];
}

// perguntas.map(responder) → [6, 9, 4, 20, 15]
// .join('\n')              → "6\n9\n4\n20\n15"
console.log(perguntas.map(responder).join('\n'));