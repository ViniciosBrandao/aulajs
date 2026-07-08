/*
Description:
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
function snailMinhaTentativa(array) { // primeiro array inteiro, ultimo elemento ate o ultimo array, ultimo array de tras pra frente, primeiro elemento ate chegar, no ultimo nao lido, ler de frente para tras excluindo o ultimo 
    const snail = [];  // horizontal, vertical, horizontal inversa, vertical inversa (repete ate mapear todos elementos)
    let indexSnail = 1;
    let linha = 0;
    let coluna = 0;
    let limitLinha = array.length - 1;
    let limitColuna = array[linha].length;
    let ciclo = 0;
    let repetido = 0;
    

    while (indexSnail < 5) {

        if (indexSnail === 1) {
            if (ciclo === 2) coluna = 1;
            while (coluna < limitColuna) { // toda linha ate o limite (se muito grande o inicio é variavel tambem)
                snail.push(array[linha][coluna]);
                coluna++;
            }
            console.log(indexSnail);
            console.log(snail);
            indexSnail++;
        }

        if (linha === limitLinha) break;

        if (indexSnail === 2) {
            linha++;
            let i = linha;
            while (i < limitLinha) { // desce da segunda linha ate a penultima
                 // pega o ultimo
                snail.push(array[i][limitColuna - 1]); 
                i++; 
            }
            //limitColuna--; // diminui evitando refazer a mesma coluna
            console.log(indexSnail);
            console.log(snail);
            indexSnail++;
        }

        if (indexSnail === 3) { // horizontal do ultimo ao primeiro não pushado
            coluna = limitColuna - 1;
            
            if (ciclo >= 1) repetido++;

            while (coluna >= repetido) {
                snail.push(array[limitLinha][coluna]);
                coluna--;
            } // ultima linha
            console.log(indexSnail);
            console.log(snail);
            coluna = 0;
            limitColuna--;
            indexSnail++;
        }
        if (linha === limitLinha) break;

        if (indexSnail === 4) {  // vertical subindo
            limitLinha--;
            if (ciclo >= 1) coluna++;
            if (limitLinha > linha) {
                let i = limitLinha;
                while (i > linha) {
                snail.push(array[i][coluna]); // acho que é aqui o erro tem que ser um repetido
                i--; // ultima linha
                }    
            } 
            console.log(indexSnail);
            console.log(snail);  
            indexSnail = 1;
            ciclo++;
        }
    }

    return snail;
}*/
function snail(array) {
    // Guarda de entrada: se o array está vazio (length === 0, falsy)
    // ou se a primeira linha está vazia, não há nada a percorrer.
    // O ! inverte: !0 === true, então entra no if e retorna [] imediatamente.
    if (!array.length || !array[0].length) return [];

    const result = [];

    // As 4 variáveis abaixo são as 4 bordas do retângulo ainda não visitado.
    // Elas definem a "cebola" atual — a camada que será percorrida nesta iteração.
    // Após cada direção, a borda correspondente avança 1 para dentro.
    let top    = 0;                    // primeira linha disponível (começa em 0)
    let bottom = array.length - 1;    // última linha disponível
    let left   = 0;                   // primeira coluna disponível
    let right  = array[0].length - 1; // última coluna disponível

    // Continua enquanto houver pelo menos uma linha e uma coluna sobrando.
    // Quando top > bottom ou left > right, o retângulo interno sumiu — fim.
    while (top <= bottom && left <= right) {

        // DIREÇÃO 1: → esquerda para direita ao longo da linha do topo
        // Percorre todas as colunas da borda superior, da esquerda até a direita.
        for (let col = left; col <= right; col++) // perceba col = left pois col++ mudara o valor de left, e left é um limite
            result.push(array[top][col]);
        // A linha do topo foi totalmente consumida.
        // Avança o limite superior: a próxima iteração não voltará a essa linha.
        top++;

        // DIREÇÃO 2: ↓ de cima para baixo ao longo da coluna da direita
        // Começa em `top` (já atualizado), porque o canto superior direito
        // foi capturado na direção 1. Vai até `bottom` inclusive.
        for (let row = top; row <= bottom; row++)
            result.push(array[row][right]); // a direita aqui é o ultimo elemento da segunda linha até a ultima
        // A coluna da direita foi consumida. Fecha o limite direito.
        right--;

        // DIREÇÃO 3: ← direita para esquerda ao longo da linha do fundo
        // GUARDA: só executa se ainda há linhas distintas sobrando (top <= bottom).
        // Sem essa guarda, numa matriz com número ímpar de linhas,
        // a linha do meio seria lida duas vezes: uma na direção 1, outra aqui.
        if (top <= bottom) {
            for (let col = right; col >= left; col--) // col = right, inicia o loop a partir do limite da direita, col >= left impede de repetir um elemento que ja foi percorrido em left, proximo loop
                result.push(array[bottom][col]); 
            // A linha do fundo foi consumida. Fecha o limite inferior.
            bottom--;
        }

        // DIREÇÃO 4: ↑ de baixo para cima ao longo da coluna da esquerda
        // GUARDA: só executa se ainda há colunas distintas sobrando (left <= right).
        // Sem essa guarda, numa matriz com número ímpar de colunas,
        // a coluna do meio seria lida duas vezes: uma na direção 2, outra aqui.
        if (left <= right) {
            for (let row = bottom; row >= top; row--)
                result.push(array[row][left]);
            // A coluna da esquerda foi consumida. Abre o limite esquerdo.
            left++;
        }

        // Neste ponto o invariante se restabelece:
        // top/bottom/left/right delimitam o próximo retângulo interno.
        // Se ele ainda existe (top <= bottom && left <= right),
        // o while faz mais uma volta. Senão, termina.
    }

    return result;
}
function snailMutavel(array) {
    var result;

    // Continua enquanto ainda houver linhas na matriz.
    // A cada iteração, 4 operações destroem uma "camada" da espiral
    // — ao final de cada volta, a matriz ficou menor.
    while (array.length) {

        // DIREÇÃO 1: → rouba a primeira linha inteira
        // array.shift() remove e retorna array[0] — um array de números.
        // Na primeira iteração result é undefined, então o ternário
        // apenas atribui diretamente. Nas seguintes, concatena ao resultado.
        // Após isso, a linha do topo sumiu da matriz.
        result = (result ? result.concat(array.shift()) : array.shift());

        // DIREÇÃO 2: ↓ rouba o último elemento de cada linha restante
        // Percorre as linhas que sobraram (de cima para baixo).
        // array[i].pop() remove e retorna o último elemento de cada linha —
        // ou seja, percorre a coluna da direita de cima para baixo.
        // Após o loop, todas as linhas perderam seu último elemento.
        for (var i = 0; i < array.length; i++)
            result.push(array[i].pop());

        // DIREÇÃO 3: ← rouba a última linha, invertida
        // array.pop() remove e retorna a última linha (um array).
        // O || [] é guarda para quando array está vazio (pop() retorna undefined).
        // .reverse() inverte a linha para percorrê-la da direita para a esquerda.
        // concat adiciona todos os elementos ao resultado.
        result = result.concat((array.pop() || []).reverse());

        // DIREÇÃO 4: ↑ rouba o primeiro elemento de cada linha restante, de baixo para cima
        // array[i].shift() remove e retorna o primeiro elemento de cada linha —
        // percorre a coluna da esquerda de baixo para cima.
        // Após o loop, todas as linhas perderam seu primeiro elemento.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());

        // A matriz agora está sem a camada externa.
        // Se ainda tem linhas, o while faz mais uma volta sobre o miolo.
    }

    return result;
}
const array = [[1,2,3], // [0][j]
              [4,5,6],  // [1][length - 1]
              [7,8,9]]; // [2][]

const array2 = [[1,2,3,1],
               [4,5,6,4],
               [7,8,9,7],
               [7,8,9,7]];
const array3 = [[1, 2, 3, 4, 5], 
                [6, 7, 8, 9, 10], 
                [11, 12, 13, 14, 15], 
                [16, 17, 18, 19, 20], 
                [21, 22, 23, 24, 25]];
const array4 =  [[1, 2, 3, 4, 5, 6], 
                [20, 21, 22, 23, 24, 7], 
                [19, 32, 33, 34, 25, 8], 
                [18, 31, 36, 35, 26, 9], 
                [17, 30, 29, 28, 27, 10], 
                [16, 15, 14, 13, 12, 11]]               
console.log(snail(array4));