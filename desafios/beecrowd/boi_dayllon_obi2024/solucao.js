/*
Você pode não ter percebido, mas o nome deste problema é um anagrama de uma outra palavra!
Você recebe uma lista de N números inteiros. Sua tarefa é responder Q perguntas. Cada pergunta
consiste de um inteiro x que você deve dizer qual a soma dos x elementos mais à esquerda da lista.
Entrada
A primeira linha de entrada consiste de dois inteiros N e Q.
A segunda linha consiste de N inteiros, a lista de valores dada.
Seguem então Q linhas, cada uma consiste de um inteiro x.
Restrições
• 1≤N,Q≤100000
• Omaior valor para um item da lista dado é 1000.
• 1≤x≤N
• Para toda pergunta que não seja a primeira, é verdade que seu x é maior ou igual que o x da
pergunta anterior.
Saída
Para cada x recebido, imprima a soma dos x elementos mais à esquerda da lista.
Exemplos
Exemplo de entrada 1
7 5
4 2 3 1 2 3 5
2
3
1
7
6
Exemplo de saída 1
6
9
4
20
15
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

const primeiraLinha = lines[0].trim().split(' ');
const qtdPerguntas = parseInt(primeiraLinha[1]);

const linhaValores = lines[1].trim().split(' ');
const valores = [];
for (const item of linhaValores) {
    valores.push(parseInt(item));
}

// prefixo[k] = soma dos k primeiros valores, ou seja, o padrao desse exercício é fazer uma lista com as respostas das perguntas, o numero de perguntas é consultado dela ao invés de calcular cada resposta separada, o que toma mais tempo (geralmente dois loops)
const prefixo = [0];
for (let i = 0; i < valores.length; i++) {
    prefixo.push(prefixo[i] + valores[i]);
}
//console.error(JSON.stringify(prefixo));   // debug: no exemplo, [0,4,6,9,10,12,15,20]

const saida = [];
for (let i = 0; i < qtdPerguntas; i++) {
    const x = parseInt(lines[2 + i]);
    saida.push(prefixo[x]);
}

console.log(saida.join('\n'));