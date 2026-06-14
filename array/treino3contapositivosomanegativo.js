/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {

    if (!input || input.length === 0) {
        return [];
    }

    let contagem = 0;  // acc[0]
    let soma = 0;      // acc[1]

    for (let i = 0; i < input.length; i++) {
        let numero = input[i];

        if (numero > 0) {
            contagem = contagem + 1;
        }
        if (numero < 0) {
            soma = soma + numero;
        }
    }

    return [contagem, soma];
}
function countPositivesSumNegativesReduce(input) {
    if (!input || input.length === 0) return [];

    return input.reduce((acc, cur) => {
        if (cur > 0) acc[0]++;
        if (cur < 0) acc[1] += cur;
        return acc;
    }, [0, 0]);
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData));
let testData2 = [0];
console.log(countPositivesSumNegatives(testData2));
