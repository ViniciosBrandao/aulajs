function obterMensalidade(anoNascimento, nome, anoAtual) {
    const idade = anoAtual - anoNascimento;

    if (idade > 65) return `${nome} R$ 1.120,00`;
    if (idade > 50) return `${nome} R$ 490,00`
    if (idade > 30) return `${nome} R$ 345,00`;
    if (idade > 10) return `${nome} R$ 230,00`;
    if (idade <= 10) return `${nome} R$ 130,00`;
    
    return "Erro";
}

// Entrada de Dados
const prompt = require("prompt-sync")();
const anoAtual = new Date().getFullYear();


// Loop principal
let opcao = "";

do {
    // Entrada de Dados
    const nome = prompt("Nome: ");
    const anoNascimento = Number(prompt("Ano de Nascimento: "));

    // Processamento
    const resultado = obterMensalidade(anoNascimento, nome, anoAtual);

    // Saída da Informação
    console.log(resultado);

    // loop
    opcao = prompt("Deseja continuar? (S/N) ");
    
} while (opcao.toUpperCase() === "S");