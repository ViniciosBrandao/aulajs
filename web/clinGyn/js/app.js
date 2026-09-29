// =====================================================================
// MAIN - a ponte entre a página (HTML) e a classe Paciente
//
// Ordem do arquivo: 1. Importação  2. Elementos do HTML
//                   3. Função de evento  4. Registro do evento
// =====================================================================


// ---------- 1. IMPORTAÇÃO ----------
// Traz a classe do outro arquivo. As chaves { } porque a classe foi
// exportada pelo nome. O "./" indica "na mesma pasta que este arquivo",
// e a extensão .js é obrigatória no navegador.
import { Paciente } from "./Paciente.js";


// ---------- 2. ELEMENTOS DO HTML ----------
// Referências aos elementos, buscadas uma vez. O nome da variável é
// igual ao id, para ligar um ao outro sem esforço.
const inNome = document.getElementById("inNome");
const inPeso = document.getElementById("inPeso");
const inAltura = document.getElementById("inAltura");
const inSexo = document.getElementById("inSexo");
const btnCadastrar = document.getElementById("btnCadastrar");
const outResultado = document.getElementById("outResultado");


// ---------- 3. FUNÇÃO DE EVENTO ----------
// Roteiro: LER entrada -> VALIDAR -> CRIAR o objeto -> ESCREVER a saída.
function eventoCadastrar() {
    // LER. .value é sempre texto; Number() converte peso e altura.
    // trim() remove espaços das pontas: "   " não conta como nome.
    const nome = inNome.value.trim();
    const peso = Number(inPeso.value);
    const altura = Number(inAltura.value);
    const sexo = inSexo.value;

    // VALIDAR. Campo numérico vazio vira 0 em Number(""), então
    // "<= 0" também pega campo vazio. Sem isso, altura 0 faria o IMC
    // ser uma divisão por zero (Infinity). Cada return encerra a função.
    if (nome === "") {
        outResultado.innerHTML = "Informe o nome completo.";
        return;
    }

    if (peso <= 0) {
        outResultado.innerHTML = "Informe um peso maior que zero (em kg).";
        return;
    }

    // Limite de 3 m pega o erro comum de digitar 165 (cm) em vez de 1.65.
    if (altura <= 0 || altura > 3) {
        outResultado.innerHTML = "Informe a altura em metros (ex: 1.65).";
        return;
    }

    if (sexo === "") {
        outResultado.innerHTML = "Selecione o sexo.";
        return;
    }

    // CRIAR O OBJETO. new executa o construtor da classe e devolve um
    // paciente com os dados guardados. Só aqui a classe entra em ação.
    const paciente = new Paciente(nome, peso, altura, sexo);

    // ESCREVER. O main.js não calcula nada: pede o relatório ao objeto.
    outResultado.innerHTML = paciente.exibirInformacoes();
}


// ---------- 4. REGISTRO DO EVENTO ----------
// Função SEM parênteses: entregamos ao navegador, que a chamará no clique.
btnCadastrar.addEventListener("click", eventoCadastrar);