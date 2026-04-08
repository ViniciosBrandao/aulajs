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
    let precoPorAcre = 0;
    let desconto = 1;
    switch (pragaTipo) {
        case 1:
            precoPorAcre = 50;
            break;
        case 2:
            precoPorAcre = 100;
            break;
        case 3:
            precoPorAcre = 150;
            break;
        case 4:
            precoPorAcre = 250;
            break;
    
        default: return null
            break;
    }

    if (area > 350) {
        desconto = 0.95;
    }
    const lancamento = "L";
    let descontoDia = 1;

    if (diaLocacao === 2 || diaLocacao === 3 || diaLocacao === 5) {
            descontoDia = 0.6;
    }

    if (pragaTipo=== lancamento) return (precoFilme *  1.15) * descontoDia;
    else return precoFilme * descontoDia
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const nomeFazendeiro = prompt("Nome: ");
console.log("Tipo de Praga: ");
console.log("1: pulverização contra ervas daninhas, R$ 50,00 por acre");
console.log("2: pulverização contra gafanhotos, R$ 100,00 por acre");
console.log("3: pulverização contra broca, R$ 150,00 por acre");
console.log("4: pulverização contra tudo acima, R$ 250,00 por acre");
const pragaTipo = Number(prompt("Tipo de Praga: "));
const area = Number(prompt("Tamanho do área em acres: "));

// Processamento
const precoFinal = calcularCustoPulverizacao(pragaTipo, area);

// Saída da Informação
console.log(`${nomeFazendeiro}. Valor a pagar: ${precoFinal.toFixed(2)} reais`);