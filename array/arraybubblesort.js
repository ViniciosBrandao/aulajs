function bubbleSort(arr) {
    const a = [...arr]; // não muta o original
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                const temp = a[j];
                a[j]     = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    
    return a;
}
function insertionSort(arr) {
    const a = [...arr];

    for (let i = 1; i < a.length; i++) {
        const atual = a[i];
        let j = i - 1;

        // desloca elementos maiores uma posição à frente
        while (j >= 0 && a[j] > atual) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = atual; // insere no lugar certo
    }

    return a;
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // caso base — já ordenado

    const meio = Math.floor(arr.length / 2);
    const esquerda = mergeSort(arr.slice(0, meio)); // divide e conquista
    const direita  = mergeSort(arr.slice(meio));

    return merge(esquerda, direita);
}
function merge(esq, dir) {
    const resultado = [];
    let i = 0;
    let j = 0;

    // compara o menor de cada metade, pega o menor
    while (i < esq.length && j < dir.length) {
        if (esq[i] <= dir[j]) {
            resultado.push(esq[i]);
            i++;
        } else {
            resultado.push(dir[j]);
            j++;
        }
    }

    // adiciona o que sobrou (uma das metades terminou antes)
    while (i < esq.length) { resultado.push(esq[i]); i++; }
    while (j < dir.length)  { resultado.push(dir[j]); j++; }

    return resultado;
}