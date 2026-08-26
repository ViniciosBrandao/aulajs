// Seleção dos elementos do HTML que o script vai ler ou modificar.
// getElementById busca, na árvore do documento (DOM), o único elemento
// que tem aquele id — retorna uma referência ao objeto real da página,
// não uma cópia. Por isso, quando o usuário digita algo no input,
// a variável "enxerga" essa mudança através de .value, sem precisar
// buscar o elemento de novo.
const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const saidaDeDados = document.getElementById("onSaidaConjunto");
const valorBuscado = document.getElementById("inValorBuscadoConjunto");
const btnBuscarValor = document.getElementById("btnBuscarValorConjunto");
const saidaValorBuscado = document.getElementById("onSaidaBuscarValor");

const conjunto = [];

// Função de manipulação do conjunto — lógica pura, não toca no HTML.
// Recebe o array e o tamanho como parâmetros, não depende de variáveis
// globais do DOM. Isso permite testar essa função isoladamente,
// sem precisar de uma página HTML carregada.
function criarConjunto(array, tamanho) {
    for (let pos = 0; pos < tamanho; pos++) {
        let numeroAleatorio = Math.floor(Math.random() * 1001);
        array[pos] = numeroAleatorio;
    }
}

// Função de evento: essa sim toca no DOM. É a "ponte" entre a lógica
// pura acima e a página. Faz três coisas em sequência: lê entrada,
// chama lógica, escreve saída.
function eventoCriarConjunto() {
    // .value lê o conteúdo atual do campo <input> — sempre retorna
    // string, por isso o Number() converte para número antes de usar.
    const tamanho = Number(tamanhoConjunto.value);

    criarConjunto(conjunto, tamanho);

    const saida = "Conjunto = [" + conjunto.join(' | ') + " ]";

    // innerHTML substitui todo o conteúdo interno do elemento pelo
    // texto/HTML fornecido. Aqui é só texto simples, mas se a string
    // contivesse tags (ex: "<b>...</b>"), o navegador as interpretaria
    // como HTML de verdade, não como texto literal — é por isso que
    // innerHTML com dado vindo de usuário é evitado em código
    // profissional (risco de injeção de HTML/script malicioso).
    // Para texto puro sem esse risco, o equivalente mais seguro é
    // .textContent, que sempre trata o conteúdo como texto literal.
    saidaDeDados.innerHTML = saida;
}

// Função de buscar valor no conjunto — lógica pura, mesmo padrão de antes.
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
    const saidaValor = "Resultado da Busca Sequencial: " + (posicao !== -1 ? `O número ${valor} esta na posição: ${posicao}` : `O número ${valor} não pertence ao Conjunto`);
    saidaValorBuscado.innerHTML = saidaValor;
}

// addEventListener registra uma função para ser chamada pelo navegador
// no momento em que o evento especificado ('click') ocorrer no elemento.
// Note: sem parênteses após o nome da função — passamos a REFERÊNCIA
// à função (o bloco de código em si), não o resultado de executá-la.
// O navegador guarda essa referência e a invoca sozinho, no futuro,
// quando o clique acontecer — o momento da execução não é controlado
// por esta linha, é controlado pela interação do usuário.
btnCriarConjunto.addEventListener('click', eventoCriarConjunto);
btnBuscarValor.addEventListener('click', eventoBuscarValorConjunto);