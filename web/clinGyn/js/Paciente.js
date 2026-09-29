// =====================================================================
// CLASSE PACIENTE
//
// A classe é o MOLDE: descreve quais dados um paciente tem (atributos)
// e o que ele sabe fazer (métodos). Cada "new Paciente(...)" cria um
// OBJETO: uma unidade concreta, com os seus próprios dados, feita a
// partir desse molde.
//
// Esta classe NÃO conhece o HTML. Ela só cuida dos dados e dos cálculos.
// =====================================================================

// "export" deixa a classe visível para outros arquivos (o main.js a importa).
export class Paciente {

    // ---------- Atributos ----------
    // O # torna o atributo PRIVADO: só o código de dentro da classe pode
    // ler ou alterar. De fora, "paciente.#peso" é erro de sintaxe. Assim
    // o objeto controla os próprios dados, e qualquer acesso externo passa
    // pelos getters e setters abaixo.
    #nomeCompleto;
    #peso;
    #altura;
    #sexo;

    // ---------- Construtor ----------
    // Executa uma única vez, no momento do "new Paciente(...)", e guarda
    // os dados recebidos dentro do objeto. "this" significa "este objeto
    // que está sendo criado (ou que está executando o método)". É ele que
    // separa o atributo (this.#peso) do parâmetro (peso).
    constructor(nomeCompleto, peso, altura, sexo) {
        this.#nomeCompleto = nomeCompleto;
        this.#peso = peso;
        this.#altura = altura;
        this.#sexo = sexo;
    }

    // ---------- Getters (leitura) ----------
    // Usados assim: paciente.peso (sem parênteses, parece uma propriedade).
    get nomeCompleto() { return this.#nomeCompleto; }
    get peso() { return this.#peso; }
    get altura() { return this.#altura; }
    get sexo() { return this.#sexo; }

    // ---------- Setters (escrita) ----------
    // Usados assim: paciente.peso = 70. É o ponto único de entrada para
    // alterar o dado: se um dia precisar validar (peso > 0), o lugar é aqui.
    set nomeCompleto(novoNomeCompleto) { this.#nomeCompleto = novoNomeCompleto; }
    set peso(novoPeso) { this.#peso = novoPeso; }
    set altura(novaAltura) { this.#altura = novaAltura; }
    set sexo(novoSexo) { this.#sexo = novoSexo; }

    // ---------- Métodos (os "serviços" do paciente) ----------
    // Repare: nenhum método recebe peso ou altura por parâmetro. O objeto
    // JÁ TEM esses dados. Essa é a diferença central entre uma função solta
    // (calcularImc(peso, altura)) e um método (paciente.calcularIMC()).

    // IMC = peso / altura². Não guardamos o IMC em um atributo: ele é
    // calculado na hora. Se o peso mudar pelo setter, um IMC guardado
    // ficaria desatualizado (a "foto" antiga do valor).
    calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    // Um método pode chamar outro do mesmo objeto, com this.
    // Testamos da faixa mais alta para a mais baixa. Como cada if tem
    // return, só chegamos ao seguinte se o anterior falhou. Por isso
    // "imc > 30" já significa "acima de 30 até 35" (o caso > 35 saiu antes).
    // Os limites seguem a tabela: 20 já é normal; 25 ainda é normal.
    classificarFaixaRisco() {
        const imc = this.calcularIMC();

        if (imc > 35) {
            return "obesidade mórbida";
        }
        if (imc > 30) {
            return "obesidade";
        }
        if (imc > 25) {
            return "excesso de peso";
        }
        if (imc >= 20) {
            return "peso normal";
        }

        return "abaixo do peso ideal";
    }

    // O texto do sexo precisa ser IGUAL ao value das <option> do HTML
    // ("Masculino" / "Feminino"). O main.js garante que só chegam esses
    // dois valores (o campo vazio é rejeitado antes de criar o objeto).
    calcularPesoIdeal() {
        if (this.#sexo === "Masculino") {
            return 72.7 * this.#altura - 58;
        }

        return 62.1 * this.#altura - 44.7;
    }

    // Devolve o relatório pronto no formato pedido no enunciado.
    // toFixed(2) arredonda só na EXIBIÇÃO (e devolve texto): os cálculos
    // continuam com o número completo. As quebras de linha do código não
    // aparecem na página, quem separa as linhas é o <br>.
    exibirInformacoes() {
        return `<b>CLÍNICA GYN</b><br>
<b>DADOS DO PACIENTE</b><br>
Nome Completo: ${this.#nomeCompleto}<br>
Peso: ${this.#peso} kg<br>
Altura: ${this.#altura} m<br>
Sexo: ${this.#sexo}<br>
IMC: ${this.calcularIMC().toFixed(2)}<br>
Faixa de Risco: ${this.classificarFaixaRisco()}<br>
Peso Ideal: ${this.calcularPesoIdeal().toFixed(2)} kg`;
    }
}