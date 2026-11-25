// =====================================================================
// EXERCÍCIO 2: CONTADOR (preveja a saída)
// Rodar: node contador.js
// =====================================================================

// ---------- A CLASSE ----------
class Contador {

    // Inicializador de campo: roda no momento do "new", ANTES de qualquer
    // construtor. É por isso que a classe não precisa de constructor
    // escrito: o Contador sempre nasce zerado e não precisa receber nada
    // de fora.
    //
    // Se você não escreve constructor, o JavaScript cria um vazio por
    // baixo dos panos (constructor() {}). Regra prática: escreva um
    // construtor quando o objeto precisa de DADOS DE FORA para nascer
    // (ex.: o titular da ContaBancaria). Aqui não precisa.
    #valor = 0;

    // Único jeito de ALTERAR o #valor: avança de 1 em 1. Ninguém de fora
    // consegue pular de 3 para 500.
    incrementar() {
        this.#valor++;
    }

    // Getter: só permite LER. Não existe "set valor", então tentar
    // atribuir de fora dá erro (testado mais abaixo).
    get valor() {
        return this.#valor;
    }
}


// ---------- O EXERCÍCIO ----------
const a = new Contador();   // objeto 1 (valor 0)
const b = new Contador();   // objeto 2 (valor 0)
const c = a;                // NÃO cria objeto: copia o ENDEREÇO de a

a.incrementar();            // objeto 1: 1
a.incrementar();            // objeto 1: 2
b.incrementar();            // objeto 2: 1
c.incrementar();            // c aponta para o objeto 1: vira 3

console.log(a.valor, b.valor, c.valor);   // 3 1 3

// Por quê?
//  - a e c são DUAS variáveis para o MESMO objeto (o objeto 1).
//    Mexer por uma é mexer na outra, porque só existe uma "casa".
//  - b aponta para outro objeto (objeto 2), com seu próprio #valor.
//  - Total: 2 objetos na memória, 3 variáveis.


// ---------- DÚVIDA: "const c" não deveria impedir a mudança? ----------
// Não. O const protege a VARIÁVEL (o endereço guardado nela), não o
// CONTEÚDO do objeto para onde ela aponta.
//   c.incrementar();   // permitido: mexe DENTRO do objeto
//   c = new Contador() // ERRO: tentaria trocar o endereço guardado em c
// Para ver o erro de verdade, descomente a linha abaixo e rode:
// c = new Contador();   // TypeError: Assignment to constant variable.


// ---------- DÚVIDA: o get permite alterar? ----------
// Não: get só LÊ. A única porta para mudar o valor é incrementar().
try {
    a.valor = 500;   // não existe setter
} catch (erro) {
    console.log("Erro ao atribuir:", erro.message);
}
console.log("Valor de a continua:", a.valor);   // 3


// ---------- IGUALDADE (===) COMPARA ENDEREÇOS ----------
const d = new Contador();
d.incrementar();   // d tem valor 1, o mesmo estado de b

console.log(a === c);   // true : mesmo endereço, mesmo objeto
console.log(a === b);   // false: objetos diferentes
console.log(b === d);   // false: mesmo valor (1), mas são 2 objetos
// O === entre objetos NÃO compara o conteúdo, compara a REFERÊNCIA
// (o endereço). Dois objetos com estados idênticos continuam sendo
// duas coisas distintas. Já com números e textos o === compara o valor:
console.log(1 === 1, "ana" === "ana");   // true true