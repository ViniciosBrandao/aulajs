const inRaio = document.getElementById('idInRaio');
const inAltura = document.getElementById('idInAltura');
const btnCalcular = document.getElementById('btnCalcular');

function calcularCilindro() {
    const raio = Number(inRaio.value);
    const altura = Number(inAltura.value);

    const areaLateral = (2 * Math.PI * raio * altura).toFixed(2);
    const areaTotal = (2 * Math.PI * raio * (altura + raio)).toFixed(2);
    const volume = (Math.PI * raio * raio * altura).toFixed(2);

    document.getElementById('idOutAreaLateral').innerText = areaLateral;
    document.getElementById('idOutAreaTotal').innerText = areaTotal;
    document.getElementById('idOutVolume').innerText = volume;
}
function eventoCalcular() {
    calcularCilindro();
}

btnCalcular.addEventListener('click', eventoCalcular);