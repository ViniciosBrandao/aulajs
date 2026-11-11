const inNome = document.getElementById("inNome");
const inNumeroConta = document.getElementById("inNumeroConta");
const inSaldoBancario = document.getElementById("inSaldoBancario");
const btnCalcular = document.getElementById("btnCalcular");
const outResposta = document.getElementById("outResposta");

function calcularTarifaBancaria(saldoBancario){

    const saldoMedioMensal = saldoBancario / 6;

    if (saldoMedioMensal <= 1000) return "Básica - R$25,00";
    if (saldoMedioMensal <= 2000) return "Prata - R$20,00";
    if (saldoMedioMensal <= 3500) return "Ouro - R$13,00";

    return "Prêmio - isento";
}
function eventoCalcular(evento) {
    const nome = inNome.value;
    const numeroConta = Number(inNumeroConta.value);
    const saldoBancario = Number(inSaldoBancario.value);
    
    const tarifa = calcularTarifaBancaria(saldoBancario);
    const saida = `Cliente: ${nome}. Conta ${numeroConta}. Tarifa: ${tarifa}`;
    outResposta.innerText = saida;
}

btnCalcular.addEventListener('click', eventoCalcular);