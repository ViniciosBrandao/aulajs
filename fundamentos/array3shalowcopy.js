const original = [1, 2, [3, 4]];
const shallow = [...original];
shallow[2][0] = 999;
shallow[0] = 50;
console.log(original[2][0]); // 999, pois mudou a referencia no shallow, muda no original
console.log(...shallow); // 50 2 [ 999, 4] copia dos elementos de shallow, expande o array é uma referencia (o endereço aponta para a variavel original)
console.log(shallow); // [ 50, 2, [ 999, 4 ] ] dentro do colchete pois pois nao teve o spread operator (...)
console.log(original); // [ 1, 2, [ 999, 4 ] ] o 1 permanece (nao é 50), pois mudou apenas na copia (alterou primitivo nao altera no original)