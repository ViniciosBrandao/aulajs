const inNumero = document.getElementById("inNumero");
const btnVerificar = document.getElementById("btnVerificar");

const outResultado = document.getElementById("outResultado");

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) return 'Par';
    else return 'Ímpar'
}
function eventoVerificar(evento) {
    const numero = Number(inNumero.value);

    const resposta = verificarParOuImpar(numero);

    outResultado.innerText = resposta;
}
btnVerificar.addEventListener('click', eventoVerificar);