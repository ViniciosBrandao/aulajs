const inSalario = document.getElementById("inSalario");
const btnCalcular = document.getElementById("btnCalcular");

const outResultado = document.getElementById("outResultado")

function calcularSalarioReajustado(salario) {
    if(salario > 1412) return salario * 1.4;
    return salario * 1.5;

}
function eventoCalcular() {
    const salario = Number(inSalario.value);

    const resultado = calcularSalarioReajustado(salario);

    const saida = `R$ ${resultado.toFixed(2)} reais.`
    outResultado.innerText = saida;
}

btnCalcular.addEventListener('click', eventoCalcular)