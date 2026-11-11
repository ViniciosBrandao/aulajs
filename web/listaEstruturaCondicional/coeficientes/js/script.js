const inCoeficienteA = document.getElementById("inCoeficienteA");
const inCoeficienteB = document.getElementById("inCoeficienteB");
const inCoeficienteC = document.getElementById("inCoeficienteC");
const btnCalcular = document.getElementById("btnCalcular");
const outResposta = document.getElementById("outResposta");

function calcularRaizes(coeficienteA, coeficienteB, coeficienteC){
    const delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;
    if (delta < 0) return "Raízes imaginárias";
    if (delta === 0){
        const raizUnica = -coeficienteB  / 2 * coeficienteA;
        return `Raiz Única: ${raizUnica.toFixed(3)}`;
    }
    if (delta > 0){
        const raizSoma = -coeficienteB + Math.sqrt(delta) / 2 * coeficienteA;
        const raizSubtracao = -coeficienteB - Math.sqrt(delta) / 2 * coeficienteA;
        return `As raízes distintas são: ${raizSoma.toFixed(3)} e ${raizSubtracao.toFixed(3)}`;
    }
}
function eventoCalcular(evento) {
    const coeficienteA = Number(inCoeficienteA.value);
    const coeficienteB = Number(inCoeficienteB.value);
    const coeficienteC = Number(inCoeficienteC.value);
    
    const resposta = calcularRaizes(coeficienteA, coeficienteB, coeficienteC);
    outResposta.innerText = resposta;
}

btnCalcular.addEventListener('click', eventoCalcular);