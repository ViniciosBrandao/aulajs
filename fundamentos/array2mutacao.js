// entender mutação de arrays, mesmo com const
const arr = [1, 2, 3];
const arr2 = arr;  // arr2 nao nao é uma copia, é uma referencia
arr2[0] = 999; // por isso se mudar o valor de um elemento de arr2 também altera o elemento de arr
console.log(arr[0]);
// const arr = [4, 5, 6]; // ❌ Erro: já existe 'arr', pois arr2 é uma constante: impede reatribuição (apontar para um novo objeto), não impede mutação (alterar conteúdo do objeto existente).
