/*
Um posto de combustível vende três tipos de combustível : álcool,
diesel e gasolina. O preço por litro de combustível é apresentado na
tabela a seguir. Faça um algoritmo que leia uma opção que representa
o tipo de combustível comprado (1, 2 ou 3) e a quantidade em litros. O
programa deve imprimir o valor em reais a ser pago pelo combustível.

Combustível Preço por Litro
1 – Álcool R$ 4,805
2 – Diesel R$ 5,953
3 – Gasolina R$ 6,565

Versão 2 - Utilizando else if
*/
function calcularValorPagamento(quantidadeLitros, opcao){
    const precoAlcool = 4.805;
    const precoDiesel = 5.953;
    const precoGasolina = 6.565;
    switch(opcao){
        case 1: return quantidadeLitros * precoAlcool;
                break;
        case 2: return quantidadeLitros * precoDiesel;
                break;
        case 3: return quantidadeLitros * precoGasolina;
                break;
        default: return 0;        
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const quantidadeLitros = Number(prompt("Quantidade de Litros: "));
console.log("MENU OPCOES: ");
console.log("1 - Álcool");
console.log("2 - Diesel");
console.log("3 - Gasolina");
const tipoCombustivel = Number(prompt("Opção:  "));

// Processamento
const resposta = calcularValorPagamento(quantidadeLitros,tipoCombustivel);

// Saída da Informação
console.log(`Valor a pagar é R$ ${resposta.toFixed(2)}`);