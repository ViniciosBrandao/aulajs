import { Fila } from './Fila.js'

const inNome = document.getElementById("inNome");
const btnInserir = document.getElementById("btnInserir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const outPrimeiro = document.getElementById("outPrimeiro");
const outFila = document.getElementById("outFila");
const fila = new Fila();
function mostrarFila() {
    
}
function eventoInserir() {
    const nome = inNome.value;

	fila.enfileirar(nome);
	const saida = fila.obterDadosFila();
	console.log(saida)
	outFila.innerText = fila.obterDadosFila();

}
function eventoRetirar() {
	fila.desenfileirar();
	outFila.innerText = fila.obterDadosFila();
}
function eventoAcessar() {
	outPrimeiro.innerText = fila.acessar();
}

btnInserir.addEventListener('click', eventoInserir);
btnRetirar.addEventListener('click', eventoRetirar);
btnAcessar.addEventListener('click', eventoAcessar);