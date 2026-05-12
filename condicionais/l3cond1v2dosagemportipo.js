/*
Criar um programa em JavaScript que, a partir do tipo do paciente,
calcule a dosagem de determinado medicamento e imprima a receita
informando a quantidade de gotas do medicamento e a dosagem em
mg que o paciente deve tomar.
Considere que o medicamento em questão possui 400 mg por ml, e
que cada ml corresponde a 14 gotas.
Deve ser lido o tipo do paciente e calcule a dosagem em mg e em
gotas.
Leve em consideração a tabela abaixo:

Tipo do Paciente Dosagem
1 - Bebê 600 mg
2 - Adolescente 1600 mg
3 - Adulto 4600 mg
4 - Idoso 2450 mg
*/
function obterDosagemMg(tipo){
    const bebe = 1;
    const adolescente = 2;
    const adulto = 3;
    const idoso = 4;

    switch (tipo) {
        case bebe: return 600;

        case adolescente: return 1600;

        case adulto: return 4600;

        case idoso: return 2450;

        default: return null;
    }
}
function calcularGotas(dosagemMg){
    const medicamentoMgPorMl = 400;
    const gotasPorMl = 14;

    return (dosagemMg / medicamentoMgPorMl) * gotasPorMl;
}

// Entrada de Dados
const prompt = require("prompt-sync")();
console.log("MENU DE OPÇÕES: ");
console.log("1 - Bebê");
console.log("2 - Adolescente");
console.log("3 - Adulto");
console.log("4 - Idoso");
const pacienteTipo = Number(prompt("Tipo de paciente: "));

// Processamento
const dosagemMg = obterDosagemMg(pacienteTipo);
const gotas = calcularGotas(dosagemMg);

// Saída da Informação
console.log(`${dosagemMg} mg equivalente a ${Math.trunc(gotas)} gotas`);