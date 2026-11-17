import { Fila } from './Fila.js';

// =====================================================================
// Ordem do arquivo: 1. Elementos  2. Estado  3. Funções  4. Registro
// =====================================================================


// ---------- 1. ELEMENTOS DO HTML ----------
const inNome = document.getElementById("inNome");
const btnInserir = document.getElementById("btnInserir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const outMensagem = document.getElementById("outMensagem");
const outPrimeiro = document.getElementById("outPrimeiro");
const outFila = document.getElementById("outFila");


// ---------- 2. ESTADO ----------
const fila = new Fila();


// ---------- 3. FUNÇÕES ----------

// Redesenha a fila na tela. Todos os eventos precisam disso, então a
// linha fica em UM lugar só, em vez de repetida em cada evento.
function atualizarFila() {
    outFila.textContent = fila.obterDadosFila();
}

function eventoInserir() {
    outMensagem.textContent = "";

    // trim() remove espaços das pontas: "   " não é um nome.
    const nome = inNome.value.trim();

    if (nome === "") {
        outMensagem.textContent = "Informe o nome do cliente.";
        return;
    }

    fila.enfileirar(nome);
    atualizarFila();

    outMensagem.textContent = nome + " entrou na fila.";
    inNome.value = "";      // campo pronto para o próximo cliente
    inNome.focus();         // cursor de volta no campo
}

function eventoRetirar() {
    outMensagem.textContent = "";

    if (fila.estaVazia()) {
        outMensagem.textContent = "A fila está vazia: não há cliente para atender.";
        return;
    }

    // desenfileirar() remove mas NÃO devolve o elemento (igual ao
    // desempilhar da Pilha). Para saber quem saiu, consultamos ANTES.
    const atendido = fila.acessar();
    fila.desenfileirar();

    // O "primeiro" mostrado antes deixou de valer: se não limpar, a tela
    // continuaria exibindo alguém que já foi atendido.
    outPrimeiro.textContent = "";
    atualizarFila();

    outMensagem.textContent = "Atendido: " + atendido + ".";
}

function eventoAcessar() {
    outMensagem.textContent = "";

    if (fila.estaVazia()) {
        outPrimeiro.textContent = "";
        outMensagem.textContent = "A fila está vazia: não há primeiro cliente.";
        return;
    }

    outPrimeiro.textContent = fila.acessar();
}


// ---------- 4. REGISTRO DOS EVENTOS ----------
btnInserir.addEventListener("click", eventoInserir);
btnRetirar.addEventListener("click", eventoRetirar);
btnAcessar.addEventListener("click", eventoAcessar);

// Mostra o estado inicial ("Fila => { }") assim que a página abre.
atualizarFila();