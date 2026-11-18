const inPreco = document.getElementById("inPreco");
const inCodigoTabela = document.getElementById("inCodigoTabela");
const btnCalcular = document.getElementById("btnCalcular");
const outResposta = document.getElementById("outResposta");

function calcularPagamento(codigoTabela, valorProduto){
    if(codigoTabela === 1){
        const valor = valorProduto * 0.90;
        return `Valor a vista com desconto 10% R$ ${valor.toFixed(2)}`;
    }
    if(codigoTabela === 2){
        const valor = valorProduto * 0.95;
        return `Valor a vista com desconto 5% R$ ${valor.toFixed(2)}`;
    }
    if(codigoTabela === 3){
        const valorParcela = valorProduto / 2;
        return `Valor em 2 parcelas de R$ ${valorParcela.toFixed(2)}`;
    }
    if(codigoTabela === 4){
        const valorParcela = (valorProduto * 1.10) / 3;
        return `Valor em 3 parcelas de R$ ${valorParcela.toFixed(2)}`;
    }
    return "Código Inválido"
}
function eventoCalcular(evento) {
    const preco = Number(inPreco.value);
    const codigoTabela = Number(inCodigoTabela.value);
    
    const resultado = calcularPagamento(codigoTabela, preco);
    outResposta.innerText = resultado;
}

btnCalcular.addEventListener('click', eventoCalcular);