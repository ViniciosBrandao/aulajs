// Elementos do html para executar a criação do conjunto e mostrar os dados
const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const saidaDeDados = document.getElementById("onSaidaConjunto");
const valorBuscado = document.getElementById("inValorBuscadoConjunto");
const saidaValorBuscado = document.getElementById("onSaidaBuscarValor")

const conjunto = [];

// Função de manipulação do conjunto
function criarConjunto(array, tamanho) {
    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001);
        array[pos] = numeroAleatorio;
    }
}
function eventoCriarConjunto() {
    const tamanho = Number(tamanhoConjunto.value);
    criarConjunto(conjunto, tamanho);
    const saida = "Conjunto = [" + conjunto.join(' | ') + " ]";
    saidaDeDados.innerHTML = saida;
}
// Função de buscar valor no conjunto
function buscarValorConjunto(array, elemento) {
    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === elemento) {
            return pos;
        }
    }
    return -1;
}
function eventoBuscarValorConjunto() {
    const valor = Number(valorBuscado.value);
    const posicao = buscarValorConjunto(conjunto, valor);
    const saidaValor = `Resultado da Busca Sequencial: O número ${valor} esta na posição: ${posicao}`
    saidaValorBuscado.innerHTML = saidaValor;
}
btnCriarConjunto.addEventListener('onclick', eventoCriarConjunto());