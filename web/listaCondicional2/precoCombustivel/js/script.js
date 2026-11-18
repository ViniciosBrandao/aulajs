const inTipoCombustivel = document.getElementById("inTipoCombustivel");
const inQtdeLitros = document.getElementById("inQtdeLitros");
const btnCalcular = document.getElementById("btnCalcular");
const outResposta = document.getElementById("outResposta");

function calcularValorCombustivel(tipoCombustivel, quantidadeLitros){
    const precoAlcool = 4.805;
    const precoDiesel = 5.953;
    const precoGasolina = 6.565;
    const codigoAlcool  = 1;
    const codigoDiesel = 2;
    const codigoGasolina = 3;
    if (tipoCombustivel === codigoAlcool) return quantidadeLitros * precoAlcool;
    if (tipoCombustivel === codigoDiesel) return quantidadeLitros * precoDiesel;
    if (tipoCombustivel === codigoGasolina) return quantidadeLitros * precoGasolina;
}
function eventoCalcular(evento) {
    const tipoCombustivel = Number(inTipoCombustivel.value);
    const quantidadeLitros = Number(inQtdeLitros.value);

    if (tipoCombustivel > 3 || tipoCombustivel < 1){
        outResposta.innerText = "Informe um tipo de combustível válido."
        return;
    }

    
    const total = calcularValorCombustivel(tipoCombustivel, quantidadeLitros);
    let saida = `${total.toFixed(2)} reais.`;
    outResposta.innerText = saida;
}

btnCalcular.addEventListener('click', eventoCalcular);