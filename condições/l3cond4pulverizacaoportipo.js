/*
A Companhia de Pulverização Faz Tudo Ltda utiliza aviões para
pulverizar lavouras. Os custos de pulverização dependem do tipo de
praga e da área contratada conforme o esquema:
Tipo 1: pulverização contra ervas daninhas, R$ 50,00 por acre;
Tipo 2: pulverização contra gafanhotos, R$ 100,00 por acre;
Tipo 3: pulverização contra broca, R$ 150,00 por acre;
Tipo 4: pulverização contra tudo acima, R$ 250,00 por acre.
Se a área a ser pulverizada é maior que 350 acres, o fazendeiro
recebe um desconto de 5%. Em adição, qualquer fazendeiro cujo
custo total, sem desconto, ultrapasse R$ 10.750,00 recebe um
desconto de 10% sobre o valor que ultrapassar os R$ 10.750,00.
Preparar um programa que leia as seguintes informações:

● Nome do fazendeiro;
● Tipo de pulverização (de 1 a 4);
● Área a ser pulverizada.

O programa deve ainda calcular o custo final da pulverização e
escrever o nome do fazendeiro e o valor a ser pago.
*/
function calcularCustoPulverizacao(pragaTipo, area) {
    const ervaDaninha = 1;
    const gafanhotos = 2;
    const broca = 3;
    const completa = 4;
    let precoPorAcre = 0;
    let valorTotal = 0;
    let descontoExcedente = 0;

    switch (pragaTipo) {
        case ervaDaninha:
            precoPorAcre = 50;
            break;
        case gafanhotos:
            precoPorAcre = 100;
            break;
        case broca:
            precoPorAcre = 150;
            break;
        case completa:
            precoPorAcre = 250;
            break;
    
        default: return null
    }
    valorTotal = area * precoPorAcre;
    
// Desconto de 10% sobre excedente de 10750
    if (valorTotal > 10750) {
       descontoExcedente = (valorTotal - 10750) * 10/100;
       valorTotal = valorTotal - descontoExcedente;
    }
// Desconto por área
    if (area > 350) {
        return valorTotal * 0.95;
    } else {
        return valorTotal
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const nomeFazendeiro = prompt("Nome: ");
let opcao = "";

// Processamento e Saída da Informação
do{
    console.log("Tipo de Praga: ");
    console.log("1: pulverização contra ervas daninhas, R$ 50,00 por acre");
    console.log("2: pulverização contra gafanhotos, R$ 100,00 por acre");
    console.log("3: pulverização contra broca, R$ 150,00 por acre");
    console.log("4: pulverização contra tudo acima, R$ 250,00 por acre");
    const pragaTipo = Number(prompt("Tipo de Praga: "));
    const area = Number(prompt("Tamanho do área em acres: "));
    const precoFinal = calcularCustoPulverizacao(pragaTipo, area);
    console.log(`${nomeFazendeiro}. Valor a pagar: ${precoFinal.toFixed(2)} reais`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");


