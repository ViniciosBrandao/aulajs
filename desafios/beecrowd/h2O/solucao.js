/*
Agua
1
Time limit: 1000 ms
Memory limit: 1024 MiB
Felipinho escreveu H2O em uma folha de papel. Mas, infelizmente, uma gota de café caiu em uma
das letras, tornando-a ilegível. Sua tarefa é determinar qual foi a letra coberta pelo café.
Input
A entrada consiste em uma única string s, contendo exatamente duas letras escolhidas entre “H”,
“2” e “O”. s sempre será formada por letras distintas e na ordem correta em relação a composição
de “H2O”.
Output
Imprima a letra que está faltando para completar “H2O”.
Examples
Sample input 1
HO
Sample output 2
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var s = input.trim();

//console.error(JSON.stringify(s));

if (s[0] !== 'H') {
    console.log('H');
} else if (s[1] !== '2') {
    console.log('2');
} else {
    console.log('O');
}
