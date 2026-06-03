/*
Foi feita uma pesquisa de audiência de canal de TV em várias casas de uma certa
cidade, num determinado dia. Para cada casa visitada, é fornecido o número do canal (4,5,7,12) e
o número de pessoas que o estavam assistindo naquela casa. Se a televisão estivesse desligada,
nada era anotado, ou seja, esta casa não entrava na pesquisa. Fazer um algoritmo que:
- leia um número indeterminado de dados, sendo que o “FLAG” corresponde ao número
do canal igual a zero;
- calcule a porcentagem de audiência para cada emissora;
- escreva o número do canal e a sua respectiva porcentagem.
*/
// Entrada de Dados
const prompt = require("prompt-sync")();

function calcularPorcentagemAudiencia(totalPorCanal, totalTelespectadores) {
    return ((totalPorCanal / totalTelespectadores) * 100).toFixed(2);
}
function calcularAudiencia() {
    let totalTelespectadores = 0;
    let totalCanal4 = 0;
    let totalCanal5 = 0;
    let totalCanal7 = 0;
    let totalCanal12 = 0;

    while (true) {
        const entrada = prompt("Canal (4,5,7,12 | 0 para encerrar): ");
        if (entrada.trim() === "") continue;        // vazio → TV desligada, pula
        
        const canal = Number(entrada);             // só convertemos para number depois de tratar o texto vazio pois Number converteria "" => 0
        if (canal === 0) break;                    

        const quantidadeAssistindo = Number(prompt("Número de pessoas assistindo: "));
        totalTelespectadores += quantidadeAssistindo;

        if      (canal === 4)  totalCanal4  += quantidadeAssistindo;
        else if (canal === 5)  totalCanal5  += quantidadeAssistindo;
        else if (canal === 7)  totalCanal7  += quantidadeAssistindo;
        else if (canal === 12) totalCanal12 += quantidadeAssistindo;
    }
    
    const porcentagemAudiencia = (total) => ((total / totalTelespectadores) * 100).toFixed(2); // closure. Como a função foi criada no mesmo ambiente que a variavel totalTelespectadores ela tem acesso a ela, nao precisa passar como parametro.

    return `Canal  4: ${porcentagemAudiencia(totalCanal4)}%
Canal  5: ${porcentagemAudiencia(totalCanal5)}%
Canal  7: ${porcentagemAudiencia(totalCanal7)}%
Canal 12: ${porcentagemAudiencia(totalCanal12)}%`;
}

// Processamento e Saída da Informação
const resposta = calcularAudiencia();
console.log(resposta);

