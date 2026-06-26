// Split retorna array. O separador não aparece no resultado.
"abc".split('')     // ["a", "b", "c"] — cada caractere
"a,b,c".split(',')  // ["a", "b", "c"] — por vírgula
"abc".split('')     // separador vazio = cada caractere individua. R

// join(separador) Inverso do split — colapsa array em string:
["a", "b", "c"].join('')   // "abc"
["a", "b", "c"].join(',')  // "a,b,c"
["a", "b", "c"].join('-')  // "a-b-c"

// indexOf(valor) em array
// Retorna o índice da primeira ocorrência. usa ===, retorna -1 se não encontrar.
["a","b","a"].indexOf("a")      // 0 — primeira

["a","b","a"].lastIndexOf("a")  // 2 — última
//lastIndexOf(valor)
//Mesmo comportamento, mas busca da direita para a esquerda — retorna índice da última ocorrência: