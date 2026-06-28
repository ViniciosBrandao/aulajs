/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
"vvV)v)V"  => ")))))))"
"a)a"      => ")()"
"))"       => "))"
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(word) { // mais profissional, divide etapas e eficiente. O(n)
    const lower = word.toLowerCase();

    const frequencia = {};
    for (const char of lower) {
        frequencia[char] = (frequencia[char] || 0) + 1; // contador; key é o caractere(char), valor é o valor + 1 (a primeira vez é 0+1)
    }  // || não é "retorna true ou false" — é retorna o primeiro operando truthy, ou o último se nenhum for truthy: no exercicio, a primeira vez de cada elemento e undefined || 0, que resulta em 0 +1 = 1, depois vai acumulando +1. Contador.

    return lower.split('').map(char => frequencia[char] > 1 ? ')' : '(').join('');
}
function duplicateEncodeFor(word){ // minha primeira tentativa
    const arrOriginal = word.split('');
    const arrNewString = new Array(arrOriginal.length).fill(' ');


    for (let i = 0; i < arrOriginal.length; i++) {
        let found = false;
        if (arrNewString[i] === ')') continue;
        
        for (let j = i + 1; j < arrNewString.length; j++) {
            if (arrNewString[j] === ')') continue;

            if (arrOriginal[i].toUpperCase() === arrOriginal[j].toUpperCase()) { 
                arrNewString[i] = ')';
                arrNewString[j] = ')';
                found = true;
            } 
        }
        
        if (!found) { 
            arrNewString[i] = '(';
        }
    }

    return arrNewString.join('');
}
function duplicateEncodeDeclarativo2(word){ // mais legível, faz duas iteracoes por elemento no array O(n^2)
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')' // No map, o return é a atribuição. Você não diz onde colocar — só diz o que produzir para aquela posição. O map cuida do resto
    })
    .join('');
}
console.log(duplicateEncodeDeclarativo("din"));
console.log(duplicateEncodeDeclarativo("recede"));
console.log(duplicateEncodeDeclarativo("Success"));
console.log(duplicateEncodeDeclarativo("(( @"));
console.log(duplicateEncodeDeclarativo("vvV)v)V"));
console.log(duplicateEncodeDeclarativo("a)a"));
console.log(duplicateEncodeDeclarativo("))"));
arr.map()
lastInd

