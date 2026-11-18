const inNumero = document.getElementById("inNumero");
const btnCalcular = document.getElementById("btnCalcular");
const outResposta = document.getElementById("outResposta");

function calcularQuadradoPerfeito(numero){
    const raizQuadrada = Math.trunc(Math.sqrt(numero));
    if (raizQuadrada * raizQuadrada === numero) return "é quadrado perfeito";
    else return "não é quadrado perfeito"
}
function eventoCalcular(evento) {
    const numero = Number(inNumero.value);
    
    const resposta = calcularQuadradoPerfeito(numero);
    outResposta.innerText = resposta;
}

btnCalcular.addEventListener('click', eventoCalcular);