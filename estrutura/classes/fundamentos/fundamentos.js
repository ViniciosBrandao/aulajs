// =====================================================================
// FUNDAMENTOS: classes, erros (throw/try/catch) e encapsulamento
// Resumo das lições e dúvidas tiradas em aula. Consulte quando esquecer.
// Rodar: node fundamentos.js
// =====================================================================
//
// ÍNDICE
//   1. throw, try e catch: o que são e como funcionam
//   2. Por que "if + throw" e não "if + return"
//   3. Quem faz o quê: classe x app.js
//   4. O parâmetro do constructor x a validação
//   5. Gaveta (atributo) x Porta (propriedade)
//   6. get, set e o erro "Cannot set property ... only a getter"
//   7. O erro SILENCIOSO: atribuir a uma propriedade que não existe
//   8. Privado sem get/set: é comum e faz sentido
//   9. Resumo das combinações
//  10. finally (só uma prévia)


// =====================================================================
// CLASSE DE APOIO (mínima, só para os exemplos abaixo)
// =====================================================================
class Conta {
    #titular;
    #saldo = 0;

    constructor(titular) {
        // VALIDAÇÃO: o "if" detecta o problema, o "throw" avisa.
        if (typeof titular !== "string" || titular.trim() === "") {
            throw new Error("Informe o nome do titular.");
        }
        this.#titular = titular.trim();
    }

    get titular() { return this.#titular; }   // só get: ninguém troca o titular
    get saldo()   { return this.#saldo; }     // só get: saldo só muda por método

    depositar(valor) {
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
            throw new Error("O valor do depósito deve ser um número maior que zero.");
        }
        this.#saldo += valor;
    }

    sacar(valor) {
        if (typeof valor !== "number" || isNaN(valor) || valor <= 0) {
            throw new Error("O valor do saque deve ser um número maior que zero.");
        }
        if (valor > this.#saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.#saldo -= valor;
    }
}


// =====================================================================
// 1. THROW, TRY E CATCH
// =====================================================================
// Analogia do alarme de incêndio:
//   throw = quem APERTA o alarme ("deu problema, pare tudo!")
//   catch = a brigada que ouve o alarme e decide o que fazer
//   try   = a área protegida pela brigada
//
// IMPORTANTE: o throw NÃO é uma vigilância automática. Ele só dispara
// quando a execução CHEGA naquela linha (normalmente porque um "if"
// detectou o problema). Os erros "da própria linguagem" (como o do
// getter, na seção 6) são o JavaScript dando throw sozinho no momento
// em que você faz algo proibido.
//
// O que acontece num throw:
//   1. A função é ABANDONADA na hora (as linhas seguintes não rodam).
//   2. O erro "sobe" a pilha de chamadas procurando um catch.
//   3. Achou catch: ele trata e o programa SEGUE.
//      Não achou: o programa PARA com o erro vermelho no console.
// O catch não impede o erro de acontecer; só decide o que fazer depois.

console.log("----- 1. throw / try / catch -----");

const joao = new Conta("João");
joao.depositar(750);

try {
    joao.sacar(5000);                         // 5000 > 750 -> throw
    console.log("Isto não deve aparecer.");   // PULADA
} catch (erro) {
    console.log("Erro:", erro.message);       // Erro: Saldo insuficiente.
}
console.log("O programa continuou. Saldo:", joao.saldo);   // 750


// =====================================================================
// 2. POR QUE "IF + THROW" E NÃO "IF + RETURN"
// =====================================================================
// O if e o throw trabalham JUNTOS: o if DECIDE, o throw COMUNICA.
//
// Versão com return (ruim):
//     sacar(valor) {
//         if (valor > this.#saldo) return "Saldo insuficiente";
//         this.#saldo -= valor;
//     }
//     conta.sacar(5000);
//     console.log("Saque realizado!");   // aparece mesmo sem ter sacado!
//
// Problemas do return:
//   a) O return só sai de dentro do método. Quem chamou NÃO é obrigado a
//      olhar o retorno. Se esquecer, o erro passa em SILÊNCIO.
//   b) Mistura retorno de erro com retorno normal ("isso é uma conta ou
//      uma mensagem?").
//   c) O constructor não consegue "devolver" nada: sem throw, nasceria
//      uma conta zumbi (titular vazio).
//   d) Em várias camadas, cada uma teria que checar e repassar o erro.
//
// return de erro = pedido educado ("confira o retorno, por favor").
// throw          = ordem ("pare tudo até alguém resolver").


// =====================================================================
// 3. QUEM FAZ O QUÊ: CLASSE x APP.JS
// =====================================================================
//   Classe : sabe o que está ERRADO (regras)      -> dá throw
//   app.js : decide o que FAZER com o erro (tela) -> try/catch
//
// A classe não conhece HTML nem console. Fluxo completo no site:
//   Usuário digita 5000 e clica em "Sacar"
//   app.js : try { conta.sacar(5000) }
//   Classe : 5000 > 750 -> throw Error("Saldo insuficiente.")
//   app.js : catch -> mensagemDiv.textContent = erro.message
//   Tela   : "Saldo insuficiente." (em vermelho)
//
// Não é lei que o try/catch fique só no app.js: ele fica ONDE ALGUÉM
// SABE O QUE FAZER com o erro. E nem todo throw precisa de catch ao
// lado: se ninguém sabe tratar, deixar subir é o certo.


// =====================================================================
// 4. PARÂMETRO DO CONSTRUCTOR x VALIDAÇÃO
// =====================================================================
//   constructor(titular) { if (...) throw ...; this.#titular = titular }
//
//   (titular)      -> a "caixinha" que RECEBE o valor do new.
//                     É o que PERMITE passar o dado.
//   if + throw     -> só CONFERE o que chegou (o segurança na porta).
//   this.#titular  -> GUARDA o valor dentro do objeto.
//
// Sem parâmetro, "new Conta('jao')" NÃO dá erro: o valor chega, mas não
// tem caixinha, então é jogado fora em silêncio.
//
//   | constructor                  | new Conta("jao") | new Conta()      |
//   |------------------------------|------------------|------------------|
//   | constructor() {}             | aceita, ignora   | aceita           |
//   | constructor(titular) sem if  | guarda "jao"     | aceita, undefined|
//   | constructor(titular) + throw | guarda "jao"     | ERRO claro       |

console.log("----- 4. constructor com validação -----");

try {
    new Conta();   // esqueceu o nome
} catch (erro) {
    console.log("Erro:", erro.message);   // Erro: Informe o nome do titular.
}


// =====================================================================
// 5. GAVETA (ATRIBUTO) x PORTA (PROPRIEDADE)
// =====================================================================
//   Atributo / campo : o DADO guardado.   Ex.: #saldo   (a gaveta)
//   Propriedade      : o que se acessa de FORA com "objeto.nome".
//                      Ex.: conta.saldo (a porta). Pode ser um dado
//                      simples ou um get/set (porta que executa código).
//
// A porta NÃO é a gaveta: ela só mostra (get) ou altera (set) o conteúdo
// da gaveta. Os nomes são independentes: a gaveta poderia ser #dinheiro
// e a porta "saldo".
//
// Privado (#) de fora:
//     conta.#saldo;   // SyntaxError: o arquivo NEM RODA (erro ao carregar)


// =====================================================================
// 6. GET, SET E O ERRO "only a getter"
// =====================================================================
// Com "get saldo()" e SEM "set saldo()":
//     conta.saldo          -> funciona (leitura)
//     conta.saldo = 999    -> TypeError, lançado PELO JAVASCRIPT
//                             (você não escreveu throw nenhum)
//
// Quem lança o quê:
//   "Saldo insuficiente."           -> VOCÊ, com throw new Error(...)
//   "Cannot set property ... getter"-> O JAVASCRIPT (TypeError)
// Para o catch tanto faz: os dois são capturados e têm erro.message.
//
// Modo estrito: arquivos com import/export (módulos ESM, como este
// projeto, com "type": "module") são SEMPRE estritos. Por isso você VÊ
// o erro. Fora de módulos (modo comum), a atribuição seria IGNORADA em
// silêncio e o saldo continuaria o mesmo.

console.log("----- 6. atribuir a algo que só tem getter -----");

try {
    joao.saldo = 999999;
} catch (erro) {
    console.log("Erro:", erro.message);
    // Erro: Cannot set property saldo of #<Conta> which has only a getter
}
console.log("Saldo continua:", joao.saldo);   // 750


// =====================================================================
// 7. O ERRO SILENCIOSO (por que vale colocar get)
// =====================================================================
// Se existe só "#titular" e NENHUMA porta "titular" (nem get, nem set):
//     conta.titular = "Ana";
// O JavaScript procura a propriedade "titular", não acha (o "#titular"
// é de outro mundo, por causa do #) e, como objetos aceitam propriedades
// novas a qualquer momento, CRIA uma propriedade pública nova e solta.
// Resultado: dois "titulares" independentes, e NENHUM erro.

class SemPorta {
    #titular;

    constructor(titular) { this.#titular = titular; }

    mostrarTitularInterno() { return this.#titular; }
}

console.log("----- 7. erro silencioso -----");

const s = new SemPorta("Maria");
s.titular = "Ana";   // sem erro: criou uma propriedade nova

console.log(s.titular);                  // Ana   (a propriedade criada de fora)
console.log(s.mostrarTitularInterno());  // Maria (a gaveta, intacta)

// Por isso um "get" (mesmo sem set) é um BÔNUS DE SEGURANÇA: ele OCUPA
// o nome da porta. Tentar escrever nela dá TypeError, em vez de criar
// uma porta falsa sem ninguém perceber.
// Quando isso importa? Quando existe a chance de alguém de fora tentar
// usar esse nome. Para detalhes internos que ninguém vai tentar
// acessar, não é preciso reservar porta nenhuma (seção 8).


// =====================================================================
// 8. PRIVADO SEM GET NEM SET: É COMUM E FAZ SENTIDO
// =====================================================================
// Muito dado e método são DETALHE INTERNO e ninguém de fora precisa
// saber que existem. Exemplos numa conta:
//     #historico = [];              // só a classe mexe
//     #contadorDeSaques = 0;        // controla limite diário
//     #validarValor(valor) { ... }  // até métodos podem ser privados
//
// Regra para decidir:
//   | O dado...                              | Então                    |
//   |----------------------------------------|--------------------------|
//   | É só detalhe interno                   | #privado, sem porta      |
//   | Precisa ser VISTO, não alterado        | #privado + get           |
//   | Precisa ser ALTERADO com regras        | #privado + get + set     |
//
// SET SEM GET (raro): entra, mas não sai. Ex.: senha.
//     set senha(nova)  -> grava
//     conta.senha      -> undefined (NÃO dá erro, só devolve undefined)

class Cofre {
    #senha;

    set senha(nova) {
        if (typeof nova !== "string" || nova.length < 4) {
            throw new Error("A senha deve ter pelo menos 4 caracteres.");
        }
        this.#senha = nova;
    }

    conferir(tentativa) {
        return tentativa === this.#senha;
    }
}

console.log("----- 8. set sem get -----");

const cofre = new Cofre();
cofre.senha = "1234";                    // passa pela regra do set

console.log(cofre.senha);                // undefined (não dá para ler de volta)
console.log(cofre.conferir("1234"));     // true
console.log(cofre.conferir("0000"));     // false

try {
    cofre.senha = "12";                  // o set também valida
} catch (erro) {
    console.log("Erro:", erro.message);  // Erro: A senha deve ter pelo menos 4 caracteres.
}


// =====================================================================
// 9. RESUMO DAS COMBINAÇÕES (leitura e escrita de FORA)
// =====================================================================
//   | A classe oferece            | conta.x (ler)  | conta.x = v (escrever)       |
//   |-----------------------------|----------------|------------------------------|
//   | Atributo público simples    | funciona       | funciona, SEM nenhuma regra  |
//   | #privado, sem get nem set   | undefined      | cria propriedade solta (!)   |
//   | #privado + só get           | funciona       | TypeError                    |
//   | #privado + só set           | undefined      | funciona, passa pelo set     |
//   | #privado + get + set        | funciona       | funciona, passa pelo set     |
//
// Atributo público simples não tem como ter regra: nenhum código seu
// roda na hora da escrita. Para ter regra, é preciso o set.
// Decidir se o titular pode mudar (só get) ou não (get + set) é uma
// decisão de NEGÓCIO, não da linguagem.


// =====================================================================
// 10. FINALLY (só uma prévia; aprofundar depois)
// =====================================================================
// Terceiro bloco do try/catch: roda SEMPRE no final, deu erro ou não.
// Serve para "arrumar a casa": esconder o "carregando...", reabilitar
// um botão, fechar uma conexão.

console.log("----- 10. finally -----");

try {
    joao.sacar(100);
    console.log("Saque feito");           // Saque feito
} catch (erro) {
    console.log("Erro:", erro.message);
} finally {
    console.log("Operação encerrada");   // Operação encerrada (sempre)
}

try {
    joao.sacar(99999);
} catch (erro) {
    console.log("Erro:", erro.message);   // Erro: Saldo insuficiente.
} finally {
    console.log("Operação encerrada");    // Operação encerrada (sempre)
}
