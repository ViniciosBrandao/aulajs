const inputBuscaCodigo = document.getElementById("inputBuscaCodigo");
const inputNovoCodigo = document.getElementById("inputNovoCodigo");
const outputResultado = document.getElementById("outputResultado");
const botaoAdicionarCodigo = document.getElementById("btnAdicionarCodigo");
const botaoEmbaralharCodigos = document.getElementById("btnEmbaralharCodigos");
const botaoOrdenarCodigos = document.getElementById("btnOrdenarCodigos");
const botaoBuscarCodigo = document.getElementById("btnBuscarCodigo");
const corpoTabela = document.querySelector("#tabelaCodigos tbody");
const rodapeTabela = document.getElementById("totalCodigos");

let codigos = Array.from(corpoTabela.querySelectorAll("td"), (celula) =>
  Number(celula.textContent)
);

let tabelaOrdenada = false;

function bubbleSort(arr) {
  const a = [...arr];

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                const temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
    }
    }

    return a;
}

function embaralhar(arr) {
    const a = [...arr];

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    return a;
}

function atualizarTabela(vetor) {
    let linhas = "";

    vetor.forEach((codigo) => {
        linhas += `<tr><td>${codigo}</td></tr>`;
    });

    corpoTabela.innerHTML = linhas;
    rodapeTabela.textContent = `${vetor.length} códigos cadastrados`;
}

function adicionarCodigo() {
    if (inputNovoCodigo.value.trim() === "") {
        outputResultado.textContent = "Digite um código.";
        return;
    }

    const codigo = Number(inputNovoCodigo.value);

    if (!Number.isInteger(codigo) || codigo < 0) {
        outputResultado.textContent = "Digite um código inteiro válido.";
        return;
    }

    if (codigos.includes(codigo)) {
        outputResultado.textContent = "Esse código já está cadastrado.";
        return;
    }

    codigos.push(codigo);
    tabelaOrdenada = false;
    atualizarTabela(codigos);
    inputNovoCodigo.value = "";
    outputResultado.textContent = "Código adicionado. Ordene a lista antes de pesquisar.";
}

function embaralharCodigos() {
    codigos = embaralhar(codigos);
    tabelaOrdenada = false;
    atualizarTabela(codigos);
    outputResultado.textContent = "Lista embaralhada. Ordene antes de pesquisar.";
}

function ordenarCodigos() {
    codigos = bubbleSort(codigos);
    tabelaOrdenada = true;
    atualizarTabela(codigos);
    outputResultado.textContent = "Códigos ordenados.";

}
function buscaBinaria(vetor, valor) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (vetor[meio] === valor) {
            return meio;
        }

        if (vetor[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

function buscarCodigo() {
    if (inputBuscaCodigo.value.trim() === "") {
        outputResultado.textContent = "Digite um código para buscar.";
        return;
    }

    const valor = Number(inputBuscaCodigo.value);
    if (!tabelaOrdenada) {
        outputResultado.textContent = "Ordene os códigos antes de fazer a busca binária.";
        return;
    }

    const indice = buscaBinaria(codigos, valor);

    if (indice === -1) {
        outputResultado.textContent = "Nenhum código encontrado.";
        return;
    }

    outputResultado.textContent =
        `Código encontrado: ${codigos[indice]} | ` +
        `Posição na tabela: ${indice + 1}`;
}

botaoAdicionarCodigo.addEventListener("click", adicionarCodigo);
botaoEmbaralharCodigos.addEventListener("click", embaralharCodigos);
botaoOrdenarCodigos.addEventListener("click", ordenarCodigos);
botaoBuscarCodigo.addEventListener("click", buscarCodigo);