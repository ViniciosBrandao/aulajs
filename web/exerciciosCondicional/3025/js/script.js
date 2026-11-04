const inNumero = document.getElementById("inNumero");
const btnVerificar = document.getElementById("btnVerificar");

const outResultado = document.getElementById("outResultado");

function verificar3025(numero) {
    const doisPrimeirosDigitos = Math.trunc(numero / 100); 
    const doisUltimosDigitos = numero % 100;

    const soma = doisPrimeirosDigitos + doisUltimosDigitos;
    return (soma * soma === numero);
}
function eventoVerificar(evento) {
    const numero = Number(inNumero.value);

    let saida = "O número " + numero;
    if(verificar3025(numero)) saida += " tem a característica 3025!";
    else saida += " não tem a característica!";
    outResultado.innerText = saida;
}
btnVerificar.addEventListener('click', eventoVerificar);