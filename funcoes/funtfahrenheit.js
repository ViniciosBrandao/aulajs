function conversorFarenheit(celsius){
    const fahrenheit = 9 / 5 * celsius + 32;
    return fahrenheit

}

// Entrada de Dados
const prompt = require("prompt-sync")();
const celsius = Number(prompt("Qual a temperatura em celsius? "));

// Processamento
const fahrenheit = conversorFarenheit(celsius);

// Saída da Informação
console.log(`${celsius} graus Celsius equivalem a ${fahrenheit} graus Fahrenheit`);


