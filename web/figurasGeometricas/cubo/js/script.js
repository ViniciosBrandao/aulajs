// Ordem do arquivo: 1. Elementos  2. Cálculos  3. Evento  4. Registro
// =====================================================================


// ---------- 1. ELEMENTOS DO HTML ----------
// Todas as referências ficam no topo: o elemento não muda, então a
// busca é feita uma vez. O .value só é lido dentro do evento.
const inAresta = document.getElementById('inAresta');
const btnCalcular = document.getElementById('btnCalcular');

const outAreaFace = document.getElementById('outAreaFace');
const outAreaLateral = document.getElementById('outAreaLateral');
const outAreaTotal = document.getElementById('outAreaTotal');
const outVolume = document.getElementById('outVolume');
const outTipo = document.getElementById('outTipo');


// ---------- 2. CÁLCULOS (lógica pura) ----------
// Recebem números e DEVOLVEM números exatos. Não leem nem escrevem no
// HTML. O arredondamento só acontece na hora de exibir (no evento).

function calcularAreaFace(aresta) {
    return aresta ** 2;
}

// O cubo tem 4 faces laterais e 6 faces no total: reaproveitamos a
// função da face em vez de repetir a conta (a fórmula 4 * aresta²
// continua a mesma, só não é escrita duas vezes).
function calcularAreaLateral(aresta) {
    return 4 * calcularAreaFace(aresta);
}

function calcularAreaTotal(aresta) {
    return 6 * calcularAreaFace(aresta);
}

function calcularVolume(aresta) {
    return aresta ** 3;
}


// ---------- 3. EVENTO (ponte entre HTML e cálculos) ----------
// Roteiro: LER -> VALIDAR -> CALCULAR -> ESCREVER.
function eventoCalcular() {
    // .value é sempre texto. Number("") vale 0, então campo vazio cai
    // na validação "<= 0" junto com o zero e os negativos.
    const aresta = Number(inAresta.value);

    if (aresta <= 0) {
        alert('Informe uma aresta maior que zero.');
        return;
    }

    const areaFace = calcularAreaFace(aresta);
    const areaLateral = calcularAreaLateral(aresta);
    const areaTotal = calcularAreaTotal(aresta);
    const volume = calcularVolume(aresta);

    // toFixed(2) devolve TEXTO e só entra na hora de EXIBIR.
    // textContent: saída como texto puro.
    outAreaFace.textContent = areaFace.toFixed(2);
    outAreaLateral.textContent = areaLateral.toFixed(2);
    outAreaTotal.textContent = areaTotal.toFixed(2);
    outVolume.textContent = volume.toFixed(2);
    outTipo.textContent = 'Cubo';
}


// ---------- 4. REGISTRO DO EVENTO ----------
// Função SEM parênteses: entregamos ao navegador, que a chama no clique.
btnCalcular.addEventListener('click', eventoCalcular);