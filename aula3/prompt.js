// Prompt-sync. Entrada de dados por teclado via terminal utilizando o pacote prompt-sync.
// 1. Importa e configura a ferramenta
const prompt = require("prompt-sync")();
// 2. Usa a ferramenta para receber um dado
let nome = prompt("Qual é o seu nome? ");
// 3. Exibe o resultado
console.log(`Olá, ${nome}! Agora o JavaScript sabe quem você é.`);