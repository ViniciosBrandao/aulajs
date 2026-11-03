import { Pilha } from "./Pilha.js";

const inNumero = document.getElementById('inNumero');
const btnExecutar = document.getElementById('btnExecutar');
const resultado = document.getElementById('outResultado');

function verificarCapicua(numero) {
    const pilha = new Pilha();
    let valor = numero;
    let resto;
    let numeroInvertido = 0;

    while (valor > 0) {
        resto = valor % 10;
        pilha.empilhar(resto);
        valor = Math.trunc(valor / 10);
    }

    let expoente = 1;
    let elemento;
    while(!pilha.estaVazia()) {
        elemento = pilha.acessar() * expoente;
        pilha.desempilhar();
        numeroInvertido = numeroInvertido + elemento;
        expoente = expoente * 10;
    }


    return (numero === numeroInvertido);
}
function executarBotao() {
    const valor = Number(inNumero.value);
    let saida = "O número " + valor;
    if(verificarCapicua(valor)) saida += " é um Número Capicua";
    else saida += " não é Número Capicua";
    resultado.innerText = saida;
}

btnExecutar.addEventListener('click', executarBotao)