function calcularOrcamento() {
    const nome = document.getElementById("idNome").value;
    const servico = document.getElementById("idServico").value;
    const valorUnitario = Number(document.getElementById("idValorUnitario").value);
    const quantidade = Number(document.getElementById("idQuantidade").value);

    const mensagem = ` Olá ${nome}! o serviço de ${servico} ficou por R$ ${(quantidade * valorUnitario).toFixed(2)} reais.`
    document.getElementById("idOutResultado").innerText = mensagem;
}