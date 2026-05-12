/*
Fazer um algoritmo que imprima todas as tabuadas de adicionar de 1 a 9.
*/
const parcela_inicio = 1;
const parcela_fim    = 9;
const somador_fim   = 10;

function imprimirTabuadaAdicao() {
    for (let parcela = parcela_inicio; parcela <= parcela_fim; parcela++) {
        console.log(`── Tabuada do ${parcela} ──`);

        for (let i = 1; i <= somador_fim; i++) {
            console.log(`${parcela} + ${i} = ${parcela + i}`);
        }

        console.log("");
    }
}

imprimirTabuadaAdicao();
