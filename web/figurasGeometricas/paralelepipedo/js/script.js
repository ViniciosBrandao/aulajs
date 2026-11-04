// Ordem do arquivo: 1. Elementos  2. Cálculos  3. Eventos  4. Registro
// =====================================================================

// ---------- 1. ELEMENTOS DO HTML ----------
const formulario = document.getElementById("formularioParalelepipedo");

const inComprimento = document.getElementById("inComprimento");
const inLargura = document.getElementById("inLargura");
const inAltura = document.getElementById("inAltura");

const outAreaTotal = document.getElementById("outAreaTotal");
const outVolume = document.getElementById("outVolume");
const outDiagonal = document.getElementById("outDiagonal");
const outTipo = document.getElementById("outTipo");


// ---------- 2. CÁLCULOS (lógica pura) ----------
// Recebem números e DEVOLVEM números exatos, sem tocar no HTML.

function calcularAreaTotal(comprimento, largura, altura) {
    return 2 * (comprimento * largura + comprimento * altura + largura * altura);
}

function calcularVolume(comprimento, largura, altura) {
    return comprimento * largura * altura;
}

// A diagonal é a RAIZ QUADRADA da soma dos quadrados das três medidas.
function calcularDiagonal(comprimento, largura, altura) {
    return Math.sqrt(comprimento ** 2 + largura ** 2 + altura ** 2);
}


// ---------- 3. EVENTOS ----------

function limparSaida() {
    outAreaTotal.textContent = "";
    outVolume.textContent = "";
    outDiagonal.textContent = "";
    outTipo.textContent = "";
}

function eventoCalcular(evento) {
    // O comportamento padrão do submit é enviar o formulário e recarregar
    // a página. preventDefault() cancela isso: quem responde é o JavaScript.
    evento.preventDefault();

    // Apaga resultados antigos: se a validação falhar, não pode sobrar
    // na tela o resultado da conta anterior.
    limparSaida();

    // .value é sempre texto; Number() converte.
    const comprimento = Number(inComprimento.value);
    const largura = Number(inLargura.value);
    const altura = Number(inAltura.value);

    // O HTML já valida (required, min), mas o JavaScript sempre revalida:
    // o usuário pode contornar o HTML pelo DevTools.
    if (comprimento <= 0 || largura <= 0 || altura <= 0) {
        alert("Informe comprimento, largura e altura maiores que zero.");
        return;
    }

    const areaTotal = calcularAreaTotal(comprimento, largura, altura);
    const volume = calcularVolume(comprimento, largura, altura);
    const diagonal = calcularDiagonal(comprimento, largura, altura);

    // toFixed(2) devolve TEXTO e só entra na hora de exibir.
    outAreaTotal.textContent = areaTotal.toFixed(2);
    outVolume.textContent = volume.toFixed(2);
    outDiagonal.textContent = diagonal.toFixed(2);
    outTipo.textContent = "Paralelepípedo";
}


// ---------- 4. REGISTRO DOS EVENTOS ----------
// O botão type="reset" já esvazia os CAMPOS sozinho. Mas os <span> do
// resultado não são campos de formulário: o navegador não os limpa. Por
// isso o ouvinte do 'reset' existe: sem ele, o resultado antigo ficaria
// na tela ao lado dos campos vazios.
formulario.addEventListener("submit", eventoCalcular);
formulario.addEventListener("reset", limparSaida);