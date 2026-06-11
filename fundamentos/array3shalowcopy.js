const original = [1, 2, [3, 4]];
const shallow = [...original];
shallow[2][0] = 999;
shallow[0] = 50;
console.log(original[2][0]);
console.log(...shallow); // 50 2 [ 999, 4] copia dos elementos de shallow, expande o array é uma referencia (o endereço aponta para a variavel original)
console.log(shallow); //
console.log(original);