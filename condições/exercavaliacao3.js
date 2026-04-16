function obterQuadrante(x, y) {
    if (x === 0 && y === 0) return "Ponto central";
    if (x === 0) return "Eixo Y";
    if (y === 0) return "Eixo X";

    if (x > 0 && y > 0) return "1 Quadrante";
    if (x < 0 && y > 0) return "2 Quadrante";
    if (x < 0 && y < 0) return "3 Quadrante";
    return "4 Quadrante";
}
// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const coordX = Number(prompt("Coordenada X: "));
    const coordY = Number(prompt("Coordenada Y: "));
    const resultado = obterQuadrante(coordX, coordY);
    console.log(resultado);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");