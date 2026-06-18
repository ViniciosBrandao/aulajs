/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) { // mais lógica para compreender, mais eficiente. O(n) — uma passagem
    let menor = Infinity;
    let segundoMenor = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < menor) {
            segundoMenor = menor;
            menor = numbers[i];
        } else if (numbers[i] < segundoMenor) {
            segundoMenor = numbers[i];
        }
    }

    return menor + segundoMenor;
}
function sumTwoSmallestNumbersDeclarativa(numbers) { // versao mais legível, menos eficiente.O(n log n) — ordenação
    const ordenado = [...numbers].sort((a, b) => a - b); // sort.() modifica array original, o que pode gerar bugs silenciosos, por isso fazemos copia
    return numbers[0] + numbers[1];
}
const teste = [10, 343445353, 3453445, 3453545353453];
const teste2 = [3, 1, 2, 4, 5]
console.log(sumTwoSmallestNumbers(teste));
console.log(sumTwoSmallestNumbers(teste2));