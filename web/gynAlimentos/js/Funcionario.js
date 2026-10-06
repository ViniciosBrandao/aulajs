/**
 * Classe responsável por representar a entidade Funcionario e suas
 * regras de remuneração e descontos.
 *
 * Tudo fica DENTRO da classe: os dados (campos privados), as regras da
 * empresa (tabelas de gratificação, INSS e IRPF) e a formatação do
 * contracheque. Os métodos que começam com # são PRIVADOS: servem de
 * apoio e só podem ser chamados por dentro da classe.
 *
 * A classe não conhece o HTML: o contracheque é devolvido como TEXTO
 * PURO, e quem o exibe é o app.js.
 */
export class Funcionario {
  // Campos privados
  #matricula;
  #nome;
  #dependentes;
  #salarioBase;
  #producao;

  /**
   * O construtor delega aos setters (this.nome = ...), reaproveitando as
   * validações: é impossível criar um Funcionario com dado inválido.
   * @param {string} matricula - Matrícula do funcionário.
   * @param {string} nome - Nome completo.
   * @param {number} dependentes - Número de dependentes (inteiro >= 0).
   * @param {number} salarioBase - Salário base em reais (> 0).
   * @param {number} producao - Quantidade de itens produzidos (inteiro >= 0).
   */
  constructor(matricula, nome, dependentes, salarioBase, producao) {
    this.matricula = matricula;
    this.nome = nome;
    this.dependentes = dependentes;
    this.salarioBase = salarioBase;
    this.producao = producao;
  }

  // ==========================================
  // SETTERS (com validação)
  // ==========================================
  // Number.isInteger e Number.isFinite NÃO convertem tipos: o texto "5"
  // é rejeitado. Converter texto em número é papel da tela (app.js);
  // a classe exige o tipo certo.

  set matricula(novaMatricula) {
    if (typeof novaMatricula === 'string' && novaMatricula.trim().length > 0) {
      this.#matricula = novaMatricula.trim();
    } else {
      throw new Error('A matrícula não pode ser vazia.');
    }
  }

  set nome(novoNome) {
    if (typeof novoNome === 'string' && novoNome.trim().length > 0) {
      this.#nome = novoNome.trim();
    } else {
      throw new Error('O nome do funcionário não pode ser vazio.');
    }
  }

  set dependentes(novosDependentes) {
    if (Number.isInteger(novosDependentes) && novosDependentes >= 0) {
      this.#dependentes = novosDependentes;
    } else {
      throw new Error('O número de dependentes deve ser um inteiro maior ou igual a zero.');
    }
  }

  set salarioBase(novoSalarioBase) {
    if (Number.isFinite(novoSalarioBase) && novoSalarioBase > 0) {
      this.#salarioBase = novoSalarioBase;
    } else {
      throw new Error('O salário base deve ser um valor numérico maior que zero.');
    }
  }

  set producao(novaProducao) {
    if (Number.isInteger(novaProducao) && novaProducao >= 0) {
      this.#producao = novaProducao;
    } else {
      throw new Error('A produção deve ser um inteiro maior ou igual a zero.');
    }
  }

  // ==========================================
  // GETTERS
  // ==========================================

  get matricula() { return this.#matricula; }
  get nome() { return this.#nome; }
  get dependentes() { return this.#dependentes; }
  get salarioBase() { return this.#salarioBase; }
  get producao() { return this.#producao; }

  // ==========================================
  // MÉTODOS DE CÁLCULO (públicos)
  // ==========================================
  // Valores derivados (gratificação, bruto, descontos, líquido) NÃO são
  // guardados em atributos: são calculados na hora. Assim nunca ficam
  // desatualizados se o salário ou a produção mudarem.
  //
  // Divisão de papéis:
  //   - os métodos públicos usam os dados do objeto (this) e montam o cálculo;
  //   - os métodos privados #obterGratificacao, #calcularInss e #calcularIrpf
  //     guardam as TABELAS da empresa (as funções que fizemos em aula).

  /** @returns {number} Gratificação conforme a tabela de produção. */
  calcularGratificacao() {
    return this.#obterGratificacao(this.#producao);
  }

  /** @returns {number} Salário bruto = salário base + gratificação. */
  calcularSalarioBruto() {
    return this.#arredondar(this.#salarioBase + this.calcularGratificacao());
  }

  /** @returns {number} Desconto do INSS sobre o salário bruto. */
  calcularDescontoINSS() {
    return this.#arredondar(this.#calcularInss(this.calcularSalarioBruto()));
  }

  /** @returns {number} Valor total do abatimento por dependentes (R$ 123,00 cada). */
  calcularDescontoDependentes() {
    const descontoPorDependente = 123.00;

    return this.#dependentes * descontoPorDependente;
  }

  /**
   * IRPF final = valor da faixa salarial - desconto por dependentes.
   * Se o abatimento for maior que o imposto (ou se for isento), o resultado
   * seria negativo; imposto não pode ser negativo, então devolvemos 0.
   * @returns {number} IRPF a descontar.
   */
  calcularDescontoIRPF() {
    const irpfDaFaixa = this.#calcularIrpf(this.calcularSalarioBruto());
    const irpfFinal = irpfDaFaixa - this.calcularDescontoDependentes();

    if (irpfFinal < 0) return 0;

    return this.#arredondar(irpfFinal);
  }

  /** @returns {number} Salário líquido = bruto - INSS - IRPF. */
  calcularSalarioLiquido() {
    return this.#arredondar(
      this.calcularSalarioBruto() - this.calcularDescontoINSS() - this.calcularDescontoIRPF()
    );
  }

  // ==========================================
  // CONTRACHEQUE
  // ==========================================

  /**
   * Gera o contracheque como texto, uma linha por item. Devolve texto puro
   * (sem HTML): quem decide como exibir é a tela. join('\n') une as linhas
   * do array separando-as por quebras de linha.
   * O divisor tem 48 caracteres: é a soma das larguras da linha de valor
   * (34 do rótulo + 14 do valor, veja #formatarLinha).
   * @returns {string} Contracheque formatado.
   */
  gerarContracheque() {
    const divisor = '-'.repeat(48);

    return [
      'GYNALIMENTOS - CONTRACHEQUE',
      divisor,
      `Matrícula: ${this.#matricula}`,
      `Nome: ${this.#nome}`,
      `Dependentes: ${this.#dependentes}`,
      divisor,
      this.#formatarLinha('Salário base:', this.#salarioBase),
      this.#formatarLinha('Gratificação:', this.calcularGratificacao()),
      this.#formatarLinha('Salário bruto:', this.calcularSalarioBruto()),
      divisor,
      this.#formatarLinha('Desconto INSS:', this.calcularDescontoINSS()),
      this.#formatarLinha('Desconto IRPF:', this.calcularDescontoIRPF()),
      this.#formatarLinha('Desconto por dependentes (IRPF):', this.calcularDescontoDependentes()),
      divisor,
      this.#formatarLinha('Salário líquido:', this.calcularSalarioLiquido())
    ].join('\n');
  }

  // ==========================================
  // MÉTODOS PRIVADOS: TABELAS DA EMPRESA
  // ==========================================
  // Padrão das três: testamos da faixa MAIS ALTA para a mais baixa. Cada
  // if usa o TETO da faixa anterior (a tabela diz "até X", então X ainda
  // pertence à faixa de baixo). Como cada if tem return, só chegamos ao
  // seguinte se o anterior falhou. A última linha vale para o que sobrou.
  // Cada um recebe um valor e DEVOLVE o resultado.

  /**
   * Gratificação conforme a produção (quantidade de itens).
   * @param {number} producao - Itens produzidos.
   * @returns {number} Valor da gratificação em reais.
   */
  #obterGratificacao(producao) {
    if (producao > 2000) return 2250;
    if (producao > 1000) return 1250;

    return 500; // até 1000 itens
  }

  /**
   * INSS: alíquota da faixa aplicada ao salário bruto.
   * Escrevemos "salario * 14 / 100" para a conta ficar igual à tabela (14%).
   * @param {number} salario - Salário bruto.
   * @returns {number} Valor do INSS.
   */
  #calcularInss(salario) {
    if (salario > 4000.03) return salario * 14 / 100;
    if (salario > 2666.68) return salario * 12 / 100;
    if (salario > 1412.00) return salario * 9 / 100;

    return salario * 7.5 / 100; // até 1412,00
  }

  /**
   * IRPF da faixa salarial (ainda SEM o abatimento por dependentes).
   * @param {number} salario - Salário bruto.
   * @returns {number} Valor do IRPF da faixa; 0 se isento.
   */
  #calcularIrpf(salario) {
    if (salario > 4664.68) return salario * 27.5 / 100;
    if (salario > 3751.05) return salario * 22.5 / 100;
    if (salario > 2826.65) return salario * 15 / 100;
    if (salario > 2259.20) return salario * 7.5 / 100;

    return 0; // até 2259,20 é isento
  }

  // ==========================================
  // MÉTODOS PRIVADOS: APOIO (arredondar e formatar)
  // ==========================================

  /**
   * Arredonda para 2 casas decimais (centavos).
   * Usado no salário bruto, antes de compará-lo com os tetos das faixas
   * (somas com decimais saem com "sujeira": 64.07 + 500 dá 564.0699999999999,
   * e isso pode jogar o valor na faixa errada), e nos descontos, para os
   * valores exibidos somarem exatamente.
   * @param {number} valor - Número a arredondar.
   * @returns {number} Número com 2 casas decimais.
   */
  #arredondar(valor) {
    return Math.round(valor * 100) / 100;
  }

  /**
   * Formata como moeda: 4250 -> "R$ 4250,00".
   * toFixed(2) devolve TEXTO com 2 casas e ponto ("4250.00");
   * replace troca o ponto pela vírgula.
   * @param {number} valor - Valor em reais.
   * @returns {string} Valor formatado.
   */
  #formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  }

  /**
   * Monta uma linha do contracheque com o valor alinhado à direita.
   * padEnd(34): completa o rótulo com espaços à DIREITA até 34 caracteres.
   * padStart(14): completa o valor com espaços à ESQUERDA até 14 caracteres.
   * Resultado: linha de 48 caracteres, com a coluna de valores alinhada.
   * @param {string} rotulo - Texto da esquerda (ex.: "Salário base:").
   * @param {number} valor - Valor em reais.
   * @returns {string} Linha formatada.
   */
  #formatarLinha(rotulo, valor) {
    return rotulo.padEnd(34) + this.#formatarMoeda(valor).padStart(14);
  }
}