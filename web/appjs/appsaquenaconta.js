function saqueNaConta(valorSaldo, valorSaque) {
    if(valorSaldo < valorSaque) {
        throw new Error("Faltou o saldo!");
    }
    return valorSaldo - valorSaque;
}

let saldo = 1000;
let saque = 1500;

try {
    saldo = saqueNaConta(saldo, saque);
} catch (erro) {
    console.log("Erro do Sistema: " + erro.message);
} finally {
    console.log("Saldo atual R$" + saldo);
}