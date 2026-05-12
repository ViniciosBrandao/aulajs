// Função que inverte um número de 3 dígitos
function inverterNumero(valor){

    let numeroI = valor % 10; // extrai último dígito (unidade)
    valor = Math.trunc(valor / 10); // remove último dígito

    numeroI = numeroI * 10 + valor % 10; // adiciona segundo dígito (dezena)
    valor = Math.trunc(valor / 10); // remove segundo dígito

    numeroI = numeroI * 10 + valor; // adiciona terceiro dígito (centena)

    return numeroI
}

// Função que calcula o dígito verificador
function calculaDigitoVerificador(contaCorrente){

    // obtém número invertido
    const numeroInvertido = inverterNumero(contaCorrente);

    // soma número original + invertido
    const soma = contaCorrente + numeroInvertido;

    // extrai os dígitos da soma
    let centena = Math.trunc(soma / 100);
    let dezena = Math.trunc(soma / 10) % 10;
    let unidade = soma % 10;

    // cálculo ponderado pela ordem posicional
    const somaPonderada = 1 * centena + 2 * dezena + 3 * unidade;

    // último dígito da somaPonderada posicional é o dígito verificador
    const digitoVerificador = somaPonderada % 10;

    return digitoVerificador
}

// Entrada de dados
const prompt = require("prompt-sync")();
const contaCorrente = Number(prompt("Digite os três dígitos da conta corrente: "));

// Processamento
const digitoVerificador = calculaDigitoVerificador(contaCorrente);

// Monta conta final
const contaCompleta = `${contaCorrente}-${digitoVerificador}`;

// Saída
console.log(`A conta corrente com seu dígito verificador é: ${contaCompleta}`);