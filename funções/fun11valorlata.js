function calculaCustoCilindro(raio, altura){
    const custo = 155;
    const areaBase = (Math.PI * raio ** 2 * 2);
    const areaLado = (2 * Math.PI * raio * altura);
    const areaCilindro = areaBase + areaLado
    const valorCilindro = areaCilindro * custo
    return valorCilindro

}

// Entrada de dados
const prompt = require("prompt-sync")();
const raio = Number(prompt("Qual o raio da lata em metros? "));
const altura = Number(prompt("Qual a altura da lata em metros? "));

// Processamento
const valorCilindro = calculaCustoCilindro(raio, altura);

// Saída da Informação
console.log(`O valor total da lata é de R$ ${valorCilindro.toFixed(2)} reais`);