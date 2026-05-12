function calcularPesoPorPLaneta(peso, planeta){
    const jupiter = 1;
    const saturno = 2;
    const urano = 3;
    let gravidadeRelativa = 0;
    let nomePLaneta = "";

    switch (planeta) {
        case jupiter:
            gravidadeRelativa = 2.64;
            nomePLaneta = "Jupiter";
            break;

        case saturno:
            gravidadeRelativa = 1.15;
            nomePLaneta = "Saturno";
            break;

        case urano:
            gravidadeRelativa = 1.17;
            nomePLaneta = "Urano"
            break;
    }
    return `Peso em ${nomePLaneta}: ${((peso * gravidadeRelativa)/10).toFixed(3)}`;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const peso = Number(prompt("Peso: "));
    console.log("Nome do Planeta: ");
    console.log("1: Jupiter");
    console.log("2: Saturno");
    console.log("3: Urano");
    const planeta = Number(prompt("Planeta: "));
    const resposta = calcularPesoPorPLaneta(peso, planeta);
    console.log(resposta);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");