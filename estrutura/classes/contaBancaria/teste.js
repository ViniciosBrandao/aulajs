import { ContaBancaria } from "./ContaBancaria.js";

// Duas contas = dois OBJETOS independentes, feitos do mesmo molde.
const contaJoao = new ContaBancaria("João");
const contaMaria = new ContaBancaria("Maria");

// Movimentamos SÓ a conta do João.
contaJoao.depositar(1000);
contaJoao.sacar(250);

console.log(contaJoao.titular, "=>", contaJoao.saldo);    // João => 750
console.log(contaMaria.titular, "=>", contaMaria.saldo);  // Maria => 0

// Saque maior que o saldo: a classe lança Error, o try/catch captura.
try {
    contaJoao.sacar(5000);
    console.log("Isto não deve aparecer.");
} catch (erro) {
    console.log("Erro:", erro.message);   // Saldo insuficiente.
}

// Depósito inválido.
try {
    contaJoao.depositar(-10);
} catch (erro) {
    console.log("Erro:", erro.message);
}

// Tentativa de burlar: sem setter, a atribuição é ignorada (ou dá erro
// em modo estrito). O saldo não muda.
try {
    contaJoao.saldo = 999999;
} catch (erro) {
    console.log("Erro:", erro.message);
}
console.log("Saldo continua:", contaJoao.saldo);

contaMaria.depositar(2000);
console.log(contaMaria.saldo);
conta