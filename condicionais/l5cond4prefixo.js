/*
Fazer um programa que leia os dados de um usuário de telefonia de
uma empresa de telecomunicações: bairro e número completo do
telefone e verifique se o número do telefone (Exemplo:32121212) está
correto, ou seja, se o prefixo (4 primeiros dígitos) é correspondente ao
bairro especificado. Sabendo-se que os prefixos existem nos bairros
conforme a tabela a seguir:

Bairro Prefixos
Oeste 3223, 3225, 3212,
Centro 3223, 3224, 3212,
Sul 3241, 3242, 3243, 3281
Bueno 3251, 3285
Campinas 3233, 3291
*/
function verificarPrefixo(numeroTelefone, bairro) {
    // Extração do prefixo (4 primeiros dígitos)
    const prefixo = Math.trunc(numeroTelefone / 10000);

    // Oeste
    if (bairro === 1) {
        if (prefixo === 3223 || prefixo === 3225 || prefixo === 3212) {
            return "correto";
        }
    }

    // Centro
    if (bairro === 2) {
        if (prefixo === 3223 || prefixo === 3224 || prefixo === 3212) {
            return "correto";
        }
    }

    // Sul
    if (bairro === 3) {
        if (prefixo === 3241 || prefixo === 3242 || prefixo === 3243 || prefixo === 3281) {
            return "correto";
        }
    }

    // Bueno
    if (bairro === 4) {
        if (prefixo === 3251 || prefixo === 3285) {
            return "correto";
        }
    }

    // Campinas
    if (bairro === 5) {
        if (prefixo === 3233 || prefixo === 3291) {
            return "correto";
        }
    }

    return "incorreto";
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída
let opcao = "";
do {
    const numeroTelefone = Number(prompt("Número do telefone: "));
    
    console.log("Bairros: ");
    console.log("1 - Oeste");
    console.log("2 - Centro");
    console.log("3 - Sul");
    console.log("4 - Bueno");
    console.log("5 - Campinas");
    
    const bairro = Number(prompt("Bairro: "));
    const resposta = verificarPrefixo(numeroTelefone, bairro);
    
    console.log("Prefixo: " + resposta);
    
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");