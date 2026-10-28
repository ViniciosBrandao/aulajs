import { Pilha } from './Pilha.js';

const tamanhoMaximo = 1000;
const formulario = document.getElementById('idFormPalindromo');
const inTamanhoConjunto = document.getElementById('idInTamanhoVetor');
const btnCriarConjunto = document.getElementById("btnCriarConjunto");
const outConjunto = document.getElementById('outConjunto');
const btnInverter = document.getElementById('btnInverter');
const btnLimpar = document.getElementById('btnLimpar');
const outResultado = document.getElementById('idOutInverterVetor');
let conjunto = [];

function criarConjunto(tamanho) {
    // Array novo a cada chamada. Se reaproveitássemos o array antigo,
    // criar um conjunto de 5 depois de um de 10 deixaria 10 elementos.
    const novoConjunto = [];

    for (let pos = 0; pos < tamanho; pos++) {
        novoConjunto[pos] = Math.floor(Math.random() * (100 + 1));
    }

    return novoConjunto;
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
    

    outConjunto.innerHTML = "Conjunto = [ " + conjunto.join(" | ") + " ]";
}

function inverterVetor(vetor) {
  const saida = [];
  const pilha = new Pilha();

  for (const element of vetor) {
    pilha.empilhar(element);
  }

  
  for (let pos = 0; pos < vetor.length; pos++) {
    saida[pos] = (pilha.acessar()); 
    pilha.desempilhar();
  }

  return saida;
}


function aoInverter(evento) {
  // O submit padrão recarrega a página; preventDefault cancela isso.
  evento.preventDefault();

  outResultado.textContent = inverterVetor(conjunto);
}
function aoLimpar() {
  outResultado.textContent = '';
  inTamanhoConjunto.focus();
}

btnCriarConjunto.addEventListener("click", eventoCriarConjunto);
btnInverter.addEventListener("click", aoInverter);
btnLimpar.addEventListener("click", aoLimpar);