// =====================================================================
// CLASSE ContaBancaria (versão de aula)
//
// Molde: toda conta tem um titular e um saldo, e sabe depositar e sacar.
// Esta classe NÃO conhece HTML nem console: só cuida dos dados e das regras.
// =====================================================================

export class ContaBancaria {

    // Atributos PRIVADOS (#): só o código de dentro da classe os acessa.
    // De fora, "conta.#saldo" é erro. Assim ninguém faz "conta.saldo = 1000000":
    // o saldo só muda pelos métodos depositar() e sacar(), que têm regras.
    #titular;
    #saldo;

    // Executa uma vez, no "new ContaBancaria('Ana')".
    constructor(titular) {
        if (typeof titular !== "string" || titular.trim() === "") {
            throw new Error("Informe o nome do titular.");
        }

        this.#titular = titular.trim();
        this.#saldo = 0;   // toda conta nasce com saldo zero
    }

    // ---------- Getters (só leitura) ----------
    // Usados sem parênteses: conta.titular, conta.saldo.
    // NÃO existe "set saldo": sem setter, não há como atribuir de fora.
    get titular() {
        return this.#titular;
    }

    get saldo() {
        return this.#saldo;
    }

    // ---------- Métodos (os "serviços" da conta) ----------
    depositar(valor) {
        // Guard clause: valida e interrompe (throw) antes de mexer no saldo.
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
            throw new Error("O valor do depósito deve ser um número maior que zero.");
        }

        this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
            throw new Error("O valor do saque deve ser um número maior que zero.");
        }

        if (valor > this.#saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this.#saldo = this.#saldo - valor;
    }
}