/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
*/
function pickPeaks(arr) {
    const result = { pos: [], peaks: [] };

    for (let i = 1; i < arr.length - 1; i++) { // testamos o primeiro e ultimo elemento no codigo (i - 1 e i + 1), por isso começamos no i = 1;
        if (arr[i] <= arr[i - 1]) continue; // se o elemento é menor ou igual o anterior, continua
        if (arr[i] < arr[i + 1]) continue; // se o elemento é menor que o proximo, continua

        if (arr[i] > arr[i + 1]) { // se o elemento é maior que o próximo e ja sabemos que é maior que o anterior por exclusao
            result.pos.push(i);
            result.peaks.push(arr[i]);
            continue;
        }

        let j = i + 1; // pelas exclusoes, so chega aqui o elemento maior que o anterior e igual ao proximo
        while (j < arr.length - 1 && arr[j] === arr[i]) { // verifica-se entao se é plateau, identificando o primeiro elemento diferente
            j++;
        }

        if (arr[j] < arr[i]) { // ao encontrar a posição do elemento diferente j, verifica se ele é menor, se for é pico
            result.pos.push(i);
            result.peaks.push(arr[i]);
        }
    }

    return result;
}
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));
