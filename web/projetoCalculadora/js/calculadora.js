const inPrimeiroNumero = document.getElementById("inIdPrimeiroNumero");
const inSegundoNumero = document.getElementById("inIdSegundoNumero");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnPotencia = document.getElementById("btnPotencia");
const btnRaiz = document.getElementById("btnRaiz");
const outResultado = document.getElementById("idOutResultado");

function calcularAdicao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = primeiroNumero + segundoNumero;
    outResultado.innerHTML = resultado;
}
function calcularSubtracao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = primeiroNumero - segundoNumero;
    outResultado.innerHTML = resultado;
}
function calcularMultiplicacao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = primeiroNumero * segundoNumero;
    outResultado.innerHTML = resultado;
}
function calcularDivisao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = primeiroNumero / segundoNumero;
    outResultado.innerHTML = resultado;
}
function calcularPotenciacao() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = primeiroNumero ** segundoNumero;
    outResultado.innerHTML = resultado;
}
function calcularRaiz() {
    const primeiroNumero = Number(inPrimeiroNumero.value);
    const segundoNumero = Number(inSegundoNumero.value);
    const resultado = Math.pow(primeiroNumero, 1 / segundoNumero);
    outResultado.innerHTML = resultado;
}

