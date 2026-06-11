/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.

*/
// Entrada de Dados
const arr = [-1, 10, 25, 0, 2];

function somaPositivaArray(arr) {
    let total = 0;

    for (let elemento = 0; elemento < arr.length; elemento++) {
        if (arr[elemento] > 0) total += arr[elemento];
    }
    return total;
}
function positiveSum(arr) { // mais legível, primeiro filter depois reduce
  const positivos = arr.filter(n => n > 0);

  return positivos.reduce((acumulador, n) => acumulador + n, 0);
}
function positiveSumEficiente(arr) { // apenas um array, reduce com condicional
    return arr.reduce((acc, n) => n > 0 ? acc + n : acc, 0);
}
// Processamento e Saída da Informação
console.log(somaPositivaArray(arr));
console.log(positiveSumEficiente(arr));
console.log(positiveSumEficiente(arr));
