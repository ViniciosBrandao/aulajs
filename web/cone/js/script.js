// =====================================================================
// Ordem do arquivo: 1. Elementos  2. Cálculos  3. Evento  4. Registro
// =====================================================================


// ---------- 1. ELEMENTOS DO HTML ----------
// Todas as referências ficam aqui, no topo: o elemento não muda, então
// a busca é feita uma vez. Se um id estiver errado, o problema aparece
// logo na abertura da página, e não só no clique.
const inRaio = document.getElementById('inRaio');
const inAltura = document.getElementById('inAltura');
const btnCalcular = document.getElementById('btnCalcular');

const outGeratriz = document.getElementById('outGeratriz');
const outAreaLateral = document.getElementById('outAreaLateral');
const outAreaTotal = document.getElementById('outAreaTotal');
const outVolume = document.getElementById('outVolume');
const outTipo = document.getElementById('outTipo');


// ---------- 2. CÁLCULOS (lógica pura) ----------
// Recebem números e DEVOLVEM números, com precisão total. Não leem nem
// escrevem no HTML. O arredondamento NÃO acontece aqui (veja o evento).

function calcularGeratriz(raio, altura) {
    return Math.sqrt(altura * altura + raio * raio);
}

function calcularAreaLateral(raio, geratriz) {
    return Math.PI * raio * geratriz;
}

function calcularAreaTotal(raio, geratriz) {
    return Math.PI * raio * (geratriz + raio);
}

function calcularVolume(raio, altura) {
    return Math.PI * raio * raio * altura / 3;
}


// ---------- 3. EVENTO (ponte entre HTML e cálculos) ----------
// Roteiro: LER -> VALIDAR -> CALCULAR -> ESCREVER.
function eventoCalcular() {
    // .value é sempre texto. Number("") vale 0, então campo vazio cai
    // na validação "<= 0" junto com o zero e os negativos.
    const raio = Number(inRaio.value);
    const altura = Number(inAltura.value);

    if (raio <= 0 || altura <= 0) {
        alert('Informe raio e altura maiores que zero.');
        return;
    }

    // Os cálculos encadeados usam o valor EXATO (sem arredondar).
    const geratriz = calcularGeratriz(raio, altura);
    const areaLateral = calcularAreaLateral(raio, geratriz);
    const areaTotal = calcularAreaTotal(raio, geratriz);
    const volume = calcularVolume(raio, altura);

    // toFixed(2) devolve TEXTO. Ele só entra na hora de EXIBIR: texto
    // não serve para cálculo ("5.00" + 3 vira "5.003", e não 8).
    // textContent: saída como texto puro (aqui são só números).
    outGeratriz.textContent = geratriz.toFixed(2);
    outAreaLateral.textContent = areaLateral.toFixed(2);
    outAreaTotal.textContent = areaTotal.toFixed(2);
    outVolume.textContent = volume.toFixed(2);
    outTipo.textContent = 'Cone';
}


// ---------- 4. REGISTRO DO EVENTO ----------
// Função SEM parênteses: entregamos ao navegador, que a chama no clique.
btnCalcular.addEventListener('click', eventoCalcular);