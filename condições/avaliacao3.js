function obterQuadrante(x, y) {
    if (x === 0 && y === 0) return "Ponto Central";
    
    if (x > 0) {
        if (y > 0) return "1º Quadrante"; 
        else if (y < 0) return "4º Quadrante";
        return "Está no eixo X"
    } 

    if (x < 0) {
        if (y > 0) return "2º Quadrante";
        else if (y < 0) return "3º Quadrante";
        return "Está no eixo Y"
    }
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const coordX = Number(prompt("Coordenada X: "));
    const coordY = Number(prompt("Coordenada Y: "));
    const resposta = obterQuadrante(coordX, coordY);
    console.log(resposta);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");