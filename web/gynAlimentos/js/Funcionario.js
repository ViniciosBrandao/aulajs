/**
 * Classe responsável por representar a entidade 
 * Paciente e suas regras de negócio.
 * Utiliza campos privados (#) e Accessor Properties (get/set) 
 * nativos do JavaScript.
 * A palavra-chave export serve para tornar a classe Paciente 
 * pública e acessível para outros arquivos JavaScript 
 * dentro do ecossistema de módulos (ES Modules).
 */
export class Funcionario {
  // Declaração dos campos privados
  #matricula;
  #nome;
  #salarioBase;
  #producao;


  constructor(nome, peso, altura, sexo) {
    // Estas atribuições disparam os métodos 'set' correspondentes, 
    // garantindo a validação
    this.matricula = matricula;
    this.nome = nome;
    this.salarioBase = salarioBase;
    this.producao = producao;
  }

  // ==========================================
  // MÉTODOS SETTERS (Mutadores com Validação)
  // ==========================================

  set nome(novoNome) {
    /*
      if (typeof novoNome === "string" && novoNome.trim().length > 0): realiza uma validação 
      rigorosa da entrada:
      novoNome: verifica se a variável não é nula (null), 
      indefinida (undefined) ou uma cadeia de caracteres vazia ("").
      novoNome.trim(): remove os espaços em branco no início 
      e no final do texto.
      .length > 0: assegura que, após remover os espaços excedentes, 
      a cadeia ainda contém pelo menos um caractere legível, 
      impedindo que nomes constituídos unicamente por espaços 
      passem na validação.
    */
    if (typeof novoNome === "string" && novoNome.trim().length > 0) {
      this.#nome = novoNome.trim();
    } else {
      throw new Error("O nome do paciente não pode ser vazio.");
    }
  }

  set matricula(novaMatricula) {
    const novaMatricula = novaMatricula;
    if (typeof novaMatricula === "string" && novaMatricula.trim().length > 0) {
      this.#nome = novaMatricula.trim();
    } else {
      throw new Error("O número da matrícula não pode ser vazia.");
    }
  }

  // ==========================================
  // MÉTODOS GETTERS (Acessadores)
  // ==========================================

  get nome() {
    return this.#nome;
  }
}