function somaTresDigitos(numero){
    const digitoUltimo = numero % 10; // extrai ultimo digito
    const digitoSegundo = Math.trunc(numero / 10) % 10; // remove ultimo digito e extrai segundo 
    const digitoTerceiro = Math.trunc(numero / 100); // remove dois ultimos digitos 
    const somaTresDigitos = digitoUltimo + digitoSegundo + digitoTerceiro;
    return somaTresDigitos
}

function multiplicaTresDigitos(numero){
    const digitoUltimo = numero % 10; // extrai ultimo digito
    const digitoSegundo = Math.trunc(numero / 10) % 10; // remove ultimo digito e extrai segundo 
    const digitoTerceiro = Math.trunc(numero / 100); // remove dois ultimos digitos 
    const multiplicaTresDigitos = digitoUltimo * digitoSegundo * digitoTerceiro;
    return multiplicaTresDigitos
}
// Entrada de Dados
const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite o número de três dígitos: "));

// Processamento
const soma = somaTresDigitos(numero);
const multiplicacao = multiplicaTresDigitos(numero);

// Saída da Informação
console.log(`A soma dos dígitos do número ${numero} é: ${soma}`);
console.log(`A multiplicação dos dígitos do número ${numero} é: ${multiplicacao}`);