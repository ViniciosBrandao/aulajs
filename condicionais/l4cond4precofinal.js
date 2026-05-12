/*
Elabore um programa que calcule o valor final a ser pago em uma
compra feita na loja Vende Tudo, em sua promoção de final de ano.
Os produtos da loja possuem uma etiqueta colorida com o preço
unitário deste. Utilize a tabela a seguir para saber como efetuar o
cálculo adequado. Deve ser lido a cor da etiqueta, a quantidade do
produto e o seu valor unitário. Calcule e imprima o valor final do
produto com base na tabela abaixo.

Cor da Etiqueta, Quantidade de Produtos, Desconto Final

Verde, Até 10, 5%
Verde, Acima de 10, 10%
Amarelo, Até 5, 15%
Amarelo, Acima de 10, 20%
*/
function calcularPrecoFinal(cor, quantidade, precoUnitario) {
    const corFormatada = cor.toUpperCase();
    const total = precoUnitario * quantidade;

    if (corFormatada === "VERDE") {
        if (quantidade > 10) return total * 0.9;
        return total * 0.95;
    }

    if (corFormatada === "AMARELO") {
        if (quantidade > 10) return total * 0.8;
        if (quantidade <= 5) return total * 0.85;
        return total; // faixa não definida no enunciado
    }

    return null;
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    console.log("MENU DE OPÇÕES: ");
    console.log("Verde");
    console.log("Amarelo");
    const cor = prompt("Cor: ");
    const quantidade = Number(prompt("Quantidade: "));
    const precoUnitario = Number(prompt("Valor unitário: "));
    const valorFinal = calcularPrecoFinal(cor, quantidade, precoUnitario);
    console.log(`Valor final: ${valorFinal.toFixed(2)} reais`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");