/*
Uma sentença é chamada de dançante se sua primeira letra for maiúscula e cada letra subsequente for o oposto da letra anterior. Espaços devem ser ignorados ao determinar o case (minúsculo/maiúsculo) de uma letra. Por exemplo, "A b Cd" é uma sentença dançante porque a primeira letra ('A') é maiúscula, a próxima letra ('b') é minúscula, a próxima letra ('C') é maiúscula, e a próxima letra ('d') é minúscula.

Entrada
A entrada contém vários casos de teste. Cada caso de teste é composto por uma linha que contém uma sentença, que é uma string que contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída
Transforme a sentença de entrada em uma sentença dançante (conforme o exemplo abaixo) trocando as letras para minúscula ou maiúscula onde for necessário. Todos os espaços da sentença original deverão ser preservados, ou seja, " sentence " deverá ser convertido para " SeNtEnCe ".

Exemplo de Entrada	Exemplo de Saída
This is a dancing sentence
  This   is         a  dancing   sentence  
aaaaaaaaaaa
z

ThIs Is A dAnCiNg SeNtEnCe
  ThIs   Is         A  dAnCiNg   SeNtEnCe  
AaAaAaAaAaA
Z
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let array = [];

//console.error(JSON.stringify(lines[0]));
for (let index = 0; index < lines.length; index++) {
    array.push(lines[index].split(''));
}

for (let i = 0; i < array.length; i++) {
    let primeiraLetra = false;
    let posicaoLetraAnterior = 0;

    for (let j = 0; j < array[i].length; j++) {
        if(array[i][j] === ' ') continue;
        
        if(!primeiraLetra) {
            array[i][j] = array[i][j].toUpperCase();
            primeiraLetra = true;
            posicaoLetraAnterior = j;
            continue;
        }
        
        if(array[i][posicaoLetraAnterior].toUpperCase() === array[i][posicaoLetraAnterior]) {
            array[i][j] = array[i][j].toLowerCase();
            posicaoLetraAnterior = j;
        } else {
            array[i][j] = array[i][j].toUpperCase();
            posicaoLetraAnterior = j;
        }   
    }  
}
const saida = [];
for (const element of array) {
   saida.push(element.join(''));    
}
console.log(saida.join('\n'));