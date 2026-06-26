const numeros = [1, 2, 3, 4, 5];

// .map => transforma cada elemento, retorna novo array de mesmo tamanho. O callback recebe três parâmetros pela posição (como todos os iteradores)
const dobro = numeros.map(n => n * 2); // O que acontece: Para CADA elemento do array Aplique uma funçã. Crie um novo array com os resultados
// array.map((elementoAtual, indice, arrayOriginal) => ...)
// No map, o return é a atribuição. Você não diz onde colocar — só diz o que produzir para aquela posição. O map cuida do resto

const pares = dobro.filter(n => n % 2 === 0); // O que acontece: Para CADA elemento Teste uma condição (verdadeiro/falso) Se verdadeiro, inclua no novo array

const soma = pares.reduce((acumulador, n) => acumulador + n, 0); // O valorInicial (0 no exemplo) é o ponto de partida. Mentalidade: "Quero 'colapsar' todos os elementos em um único valor."
// arr.reduce((primeiroParametro, segundoParametro, terceiroParametro, quartoParametro) => {...}, valorInicial)
//           ↑ acumulador        ↑ elemento atual   ↑ índice          ↑ array original


console.log(soma); // 2 + 4 + 6 + 8 + 10 = 30