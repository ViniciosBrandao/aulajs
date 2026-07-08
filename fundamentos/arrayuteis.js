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

// Remove o primeiro elemento e Retorna  
array.shift() // Mais lento que pop pois precisa reorganizar os indices do array, importa para arrays grandes. Muta o array original. se array for vazio retorna undefined

// Remove o ultimo elemento e Retorna
array.pop()  // mais barato que shift porque não precisa reindexar — o último elemento simplesmente some, sem deslocar ninguém. se array vazio retorna undefined.

// Inverte a ordem dos elementos do array no próprio lugar e retorna o mesmo array modificado.
array.reverse() // Muta o original. devolve o próprio original modificado, não uma cópia. se precisar de preservar original [...original].reverse()

// Retorna um novo array que é a junção do array original com os valores passados como argumento. O original não é tocado.
a.concat(b) // junta os elementos de a e b em um novo array. Nao muta os arrays originais
[1, 2].concat([3, 4], 5, [6]); // [1, 2, 3, 4, 5, 6] Essa diferença é importante: se você fizer result.push([1,2,3]), o resultado fica [..., [1,2,3]] — um array dentro do array. concat([1,2,3]) distribui os elementos: [..., 1, 2, 3].