// PROJETO CONJUNTO
//
// Ordem do arquivo (sempre a mesma, em qualquer programa):
//   1. Constantes   2. Elementos do HTML   3. Estado
//   4. Lógica pura  5. Funções de evento   6. Registro dos eventos
// =====================================================================


// ---------- 1. CONSTANTES ----------
// Evita "números mágicos"
// espalhados pelo código: para mudar o limite, altera-se em um só lugar.
const tamanhoMaximo = 1000;

// ---------- 2. ELEMENTOS DO HTML ----------
// getElementById devolve uma REFERÊNCIA ao elemento real da página.
// Por isso a busca é feita uma vez, aqui fora. O que muda é o conteúdo
// (.value), e esse é lido dentro das funções, no momento do clique.
// O nome da variável é igual ao id: fica fácil ligar um ao outro.
const inTamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const outConjunto = document.getElementById("outConjunto");

const inValorBuscaSequencial = document.getElementById("inValorBuscaSequencial");
const btnBuscaSequencial = document.getElementById("btnBuscaSequencial");
const outBuscaSequencial = document.getElementById("outBuscaSequencial");

const btnMaiorMenor = document.getElementById("btnMaiorMenor");
const outMaiorMenor = document.getElementById("outMaiorMenor");

const btnOrdenar = document.getElementById("btnOrdenar");
const outOrdenado = document.getElementById("outOrdenado");

const inValorBuscaBinaria = document.getElementById("inValorBuscaBinaria");
const btnBuscaBinaria = document.getElementById("btnBuscaBinaria");
const outBuscaBinaria = document.getElementById("outBuscaBinaria");


// ---------- 3. ESTADO ----------
// Os dados do programa. Usamos "let" porque estas variáveis recebem um
// NOVO array a cada "Criar Conjunto" (com const isso não seria possível).
//   conjunto         -> os números na ordem original (aleatória)
//   conjuntoOrdenado -> uma CÓPIA ordenada, criada ao clicar em "Ordenar"
let conjunto = [];
let conjuntoOrdenado = [];


// ---------- 4. LÓGICA PURA (não toca no HTML) ----------
// Recebem dados por parâmetro e DEVOLVEM o resultado com return.
// Não leem o HTML nem escrevem nele: por isso podem ser testadas
// sozinhas e reaproveitadas em qualquer programa.

function criarConjunto(tamanho) {
    // Array novo a cada chamada. Se reaproveitássemos o array antigo,
    // criar um conjunto de 5 depois de um de 10 deixaria 10 elementos.
    const novoConjunto = [];

    for (let pos = 0; pos < tamanho; pos++) {
        novoConjunto[pos] = Math.floor(Math.random() * (1000 + 1));
    }

    return novoConjunto;
}

function buscarValorConjunto(array, valor) {
    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === valor) {
            return pos;         // achou: encerra a função e devolve a posição
        }
    }

    return -1;                  // só chega aqui se percorreu tudo e não achou
}

// Uma função para cada tarefa: uma acha o maior, outra o menor.
// Cada uma devolve um único número, sem precisar de objeto.
function encontrarMaior(array) {
    let maior = array[0];

    for (let pos = 1; pos < array.length; pos++) {
        if (array[pos] > maior) {
            maior = array[pos];
        }
    }

    return maior;
}

function encontrarMenor(array) {
    let menor = array[0];

    for (let pos = 1; pos < array.length; pos++) {
        if (array[pos] < menor) {
            menor = array[pos];
        }
    }

    return menor;
}

function bubbleSort(array) {
    // slice() sem argumentos devolve uma CÓPIA do array. Ordenamos a
    // cópia, e o array original continua na ordem em que foi criado.
    const copia = array.slice();

    for (let i = 0; i < copia.length - 1; i++) {
        let houveTroca = false;

        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j] > copia[j + 1]) {
                const temp = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = temp;
                houveTroca = true;
            }
        }

        // Passou pela laço j sem nenhuma troca = já está ordenado, pare.Evita continuar até length -1 quando o array ja esta ordenado.
        if (!houveTroca) {
            break;
        }
    }

    return copia;
}

function buscaBinaria(vetor, valor) {
    let inicio = 0;
    let fim = vetor.length - 1;

    // Pré-condição: o vetor PRECISA estar ordenado. A cada volta,
    // descartamos metade das posições restantes.
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (vetor[meio] === valor) {
            return meio;
        }

        if (vetor[meio] < valor) {
            inicio = meio + 1;  // valor está na metade direita
        } else {
            fim = meio - 1;     // valor está na metade esquerda
        }
    }

    return -1;
}


// ---------- 5. FUNÇÕES DE EVENTO (ponte entre HTML e lógica) ----------
// Todas seguem o mesmo roteiro: LER entrada -> VALIDAR -> CHAMAR lógica
// -> ESCREVER saída.
//
// O "return;" dentro dos if de validação NÃO devolve dado nenhum: ele
// apenas ENCERRA a função ali, para o resto do código não executar
// com dados inválidos (guard clause).

function limparResultados() {
    // Ao criar um novo conjunto, resultados antigos deixam de valer.
    outBuscaSequencial.innerHTML = "";
    outMaiorMenor.innerHTML = "";
    outOrdenado.innerHTML = "";
    outBuscaBinaria.innerHTML = "";
}

function eventoCriarConjunto() {
    // .value é sempre string. Number() converte para número.
    // Number("") vale 0, então campo vazio cai na validação abaixo.
    const tamanho = Number(inTamanhoConjunto.value);

    if (!Number.isInteger(tamanho) || tamanho < 1 || tamanho > tamanhoMaximo) {
        outConjunto.innerHTML = "Informe um número inteiro entre 1 e " + tamanhoMaximo + ".";
        return;
    }

    conjunto = criarConjunto(tamanho);
    conjuntoOrdenado = [];      // a versão ordenada antiga ficou obsoleta
    limparResultados();

    outConjunto.innerHTML = "Conjunto = [ " + conjunto.join(" | ") + " ]";
}

function eventoBuscaSequencial() {
    if (conjunto.length === 0) {
        outBuscaSequencial.innerHTML = "Crie um conjunto antes de buscar.";
        return;
    }

    // Aqui precisamos checar o texto vazio: 0 é um valor de busca válido,
    // então não dá para usar o truque do Number("").
    if (inValorBuscaSequencial.value === "") {
        outBuscaSequencial.innerHTML = "Informe o valor a ser buscado.";
        return;
    }

    const valor = Number(inValorBuscaSequencial.value);
    const posicao = buscarValorConjunto(conjunto, valor);

    // Operador ternário:  condição ? valor_se_verdadeiro : valor_se_falso
    // É uma EXPRESSÃO (produz um valor), por isso pode ser atribuída.
    const mensagem = posicao !== -1 ? "O número " + valor + " está na posição " + posicao + "." : "O número " + valor + " não pertence ao conjunto.";

    outBuscaSequencial.innerHTML = mensagem;
}

function eventoMaiorMenor() {
    if (conjunto.length === 0) {
        outMaiorMenor.innerHTML = "Crie um conjunto antes.";
        return;
    }

    const maior = encontrarMaior(conjunto);
    const menor = encontrarMenor(conjunto);

    // Aqui o innerHTML é legítimo: o <br> é HTML NOSSO e os valores são
    // números gerados pelo programa, nada digitado pelo usuário.
    outMaiorMenor.innerHTML = "Maior: " + maior + "<br>Menor: " + menor;
}

function eventoOrdenar() {
    if (conjunto.length === 0) {
        outOrdenado.innerHTML = "Crie um conjunto antes.";
        return;
    }

    conjuntoOrdenado = bubbleSort(conjunto);

    outOrdenado.innerHTML = "Conjunto ordenado = [ " + conjuntoOrdenado.join(" | ") + " ]";
}

function eventoBuscaBinaria() {
    // A busca binária só funciona em conjunto ordenado, então exigimos
    // que o usuário tenha ordenado antes, em vez de ordenar por baixo
    // dos panos a cada clique (o que repetiria trabalho à toa).
    if (conjuntoOrdenado.length === 0) {
        outBuscaBinaria.innerHTML = "Ordene o conjunto antes de usar a busca binária.";
        return;
    }

    if (inValorBuscaBinaria.value === "") {
        outBuscaBinaria.innerHTML = "Informe o valor a ser buscado.";
        return;
    }

    const valor = Number(inValorBuscaBinaria.value);
    const posicao = buscaBinaria(conjuntoOrdenado, valor);

    // A posição é no conjunto ORDENADO, e a mensagem deixa isso claro.
    const mensagem = posicao !== -1 ? "O número " + valor + " está na posição " + posicao + " do conjunto ordenado.": "O número " + valor + " não pertence ao conjunto.";

    outBuscaBinaria.innerHTML = mensagem;
}


// ---------- 6. REGISTRO DOS EVENTOS ----------
// Passamos a função SEM parênteses: entregamos a função ao navegador,
// que a chamará quando o clique acontecer. Com parênteses, ela rodaria
// agora, no carregamento da página. Cada botão é registrado UMA vez,
// aqui, e o HTML não tem mais onclick (senão executaria duas vezes).
btnCriarConjunto.addEventListener("click", eventoCriarConjunto);
btnBuscaSequencial.addEventListener("click", eventoBuscaSequencial);
btnMaiorMenor.addEventListener("click", eventoMaiorMenor);
btnOrdenar.addEventListener("click", eventoOrdenar);
btnBuscaBinaria.addEventListener("click", eventoBuscaBinaria);