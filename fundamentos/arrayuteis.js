// TRANSFORMAÇÃO
array.flat()          // achata arrays aninhados [[1,2],[3]] → [1,2,3]
array.flatMap()       // map + flat em uma passagem

// ORDENAÇÃO
array.sort()          // muta o original — vimos nos exercícios
array.toSorted()      // ES2023 — retorna novo array ordenado, não muta

// VERIFICAÇÃO
array.every(pred)     // true se TODOS satisfazem o predicado
array.some(pred)      // true se ALGUM satisfaz

// BUSCA
array.find(pred)      // retorna o elemento (não o índice)
array.findIndex(pred) // retorna o índice — vimos

// CÓPIA E FATIAMENTO
array.slice(inicio, fim)   // extrai trecho sem mutar
array.splice(i, qtd)       // remove/insere mutando — vimos

// ITERAÇÃO SEM RETORNO
array.forEach(fn)     // como map mas não retorna nada — para efeitos colaterais

// CONVERSÃO
Array.from("abc")     // cria array de qualquer iterável → ["a","b","c"]
Array.isArray(valor)  // verifica se é array — retorna true/false