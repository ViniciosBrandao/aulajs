/*
Grafico de Barras
1
Tempo limite: 1000 ms
Memória limite: 256 MiB
Caique e o mais novo estagiario da OBI (Organizacao de Brinquedos Infantis) e esta encarregado de
preparar os slides que serao apresentados na proxima reuniao de vendas do departamento. A fim de
avaliar os futuros investimentos da empresa, o chefe do garoto pediu que ele fizesse um grafico sobre
a popularidade de diversos brinquedos.
Para conseguir esses dados, a OBI realizou previamente uma pesquisa com varias criancas, na qual
cada uma escolheu seu brinquedo favorito dentre N opcoes disponiveis. Os resultados da pesquisa
foram organizados em uma lista de N valores, onde o i-esimo desses valores, Xi , indica quantos
participantes da pesquisa preferem o i-esimo brinquedo. Caique ja possui essa lista e deve criar um
grafico de barras com base nessas informacoes.
Ele deve seguir a seguinte formatacao padrao da empresa:
• Ografico deve conter N colunas de mesma altura H compostas de numeros 0 e 1, representando
os valores na ordem da lista.
• Nao deve existir nenhuma linha completamente preenchida por numeros 0, ou seja, H deve
ser igual ao maior valor Xi da lista.
• Abase da i-esima coluna deve ser composta de Xi numeros iguais a 1, enquanto os outros
H−Xi numeros do topo devem ser iguais a 0.
Por exemplo, suponha que N = 4 e a lista seja 4,2,5,3. Nesse caso, H = 5 e o grafico de barras
deve ser

Caique ainda esta muito ocupado com outros pedidos de seu chefe e pediu sua ajuda. Portanto, dada
a lista de popularidade dos N brinquedos, ajude-o a construir um grafico que siga as especificacoes
da OBI.
Entrada
A primeira linha da entrada contem um unico inteiro N, a quantidade de brinquedos da pesquisa
realizada pela OBI. A segunda linha da entrada contem N inteiros, o i-esimo desses valores, Xi,
indica a quantidade de participantes da pesquisa que preferem o i-esimo brinquedo.
2
Saída
A saida deve conter o grafico de barras conforme especificado pela OBI, portanto, deve ser composta
por H linhas, onde cada uma delas deve ser composta por N numeros, cada um sendo 0 ou 1,
formando o grafico desejado pela OBI.
Restricoes
E garantido que todo caso de teste satisfaz as restricoes abaixo.
• 1≤N≤100
• 0≤Xi≤100, para todo 1≤i≤N
• Existe algum elemento nao-nulo na lista, ou seja, max(Xi) > 0
Informacoes sobre a pontuacao
A tarefa vale 100 pontos. Estes pontos estao distribuidos em subtarefas, cada uma com
suas restricoes adicionais as definidas acima.
• Subtarefa 1 (0 pontos): Esta subtarefa e composta apenas pelos exemplos mostra
dos abaixo. Ela nao vale pontos, serve apenas para que voce verifique se o seu
programa imprime o resultado correto para os exemplos.
• Subtarefa 2 (30 pontos): Xi ≤ 2, para todo 1 ≤ i ≤ N.
• Subtarefa 3 (70 pontos): Sem restricoes adicionais.
Exemplos
Exemplo de entrada 1
8
1 2 3 4 5 6 7 8
Exemplo de saída 1
0 0 0 0 0 0 0 1
0 0 0 0 0 0 1 1
0 0 0 0 0 1 1 1
0 0 0 0 1 1 1 1
0 0 0 1 1 1 1 1
0 0 1 1 1 1 1 1
0 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
Exemplo de entrada 2
5
1 2 1 2 1
Exemplo de saída 2
0 1 0 1 0
1 1 1 1 1
Exemplo de entrada 3
4
4 2 5 3
Exemplo de saída 3
0 0 1 0
1 0 1 0
1 0 1 1
1 1 1 1
1 1 1 
*/
// Lê TODO o texto do stdin como uma única string.
// Ex.: "8\n12345678\n"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Corta o texto em linhas. lines[0] = "8", lines[1] = "12345678"
var lines = input.split('\n');
//console.error(JSON.stringify(lines));   // debug: descomente para ver as strings e o \r escondido

// N = quantidade de colunas do gráfico. parseInt converte o TEXTO "8" no NÚMERO 8.
const colunas = parseInt(lines[0]);

// Vai guardar as alturas como NÚMEROS: [1,2,3,4,5,6,7,8]
const inteiros = [];

// "Campeão": começa em -Infinity para que qualquer altura o vença na primeira comparação.
let maior = -Infinity;

// Percorre a segunda linha CARACTERE A CARACTERE.
// Só funciona porque cada altura tem um dígito e não há espaços (ex.: "12345678").
// Com "10 20" (ou com valores de 2 dígitos), quebraria.
for (let index = 0; index < lines[1].length; index++) {
    // lines[1][index] é UM caractere (string); parseInt o transforma em número e o guarda
    inteiros.push(parseInt(lines[1][index]));

    // Se esta altura bate o campeão atual, ela vira o novo campeão
    if (inteiros[index] > maior) maior = inteiros[index];
}
// Ao fim do laço, "maior" = H, a altura do gráfico (= número de linhas a imprimir).

// Array de STRINGS: cada elemento será uma linha pronta do gráfico, ex.: "0 0 1 0".
const saida = [];

// Cada volta do laço de fora constrói UMA linha do gráfico, de cima para baixo.
// "nivel" é a altura que essa linha representa: começa em H (topo) e desce até 1.
// Para em 1 porque o nível 0 seria uma linha só de zeros, proibida pelo enunciado.
for (let nivel = maior; nivel >= 1; nivel--) {

    // Array de NÚMEROS, novo a cada nível (por isso declarado dentro do laço).
    // Vai guardar os 0 e 1 desta linha: [0,0,0,0,0,0,0,1]
    const linha = [];

    // Percorre as colunas da esquerda para a direita
    for (let j = 0; j < colunas; j++) {

        // A coluna j alcança este nível? Se a altura dela é >= nivel, há "tijolo" aqui (1).
        // Senão, esta posição está acima da barra (0).
        if (inteiros[j] >= nivel) {
            linha.push(1);
        } else {
            linha.push(0);
        }
    }

    // join(' '): array de números → UMA string com espaço entre eles
    // [0,0,0,1] vira "0 0 0 1". Esta string vira UM elemento de saida.
    saida.push(linha.join(' '));
}

// join('\n'): array de strings → UMA string só, com quebra de linha ENTRE as linhas.
// Não há \n depois da última; quem acrescenta é o console.log.
console.log(saida.join('\n'));