// exemplo de classe oculta privada
export class Paciente {
    // Atributos 
    #nomeCompleto;    //# definição de um atributo privado.
    #peso;            // como regra todo atributo deveria ser privado.                          
    #altura;
    #sexo;

    // Metodos
    constructor(nomeCompleto, peso, altura, sexo) {
        this.#nomeCompleto = nomeCompleto; // this é o sobrenome dos atributos, diferenciando dos parametros
        this.#peso = peso;                 // serviços (métodos sao serviços) em regras devem ser públicos         
        this.#altura = altura;
        this.#sexo = sexo;
    }
    // Sets e gets idealmente após o constructor
    get nomeCompleto(){return this.#nomeCompleto;}
    get peso(){return this.#peso;}
    get altura(){return this.#altura;}
    get sexo(){return this.#sexo;}
    // Sets
    set nomeCompleto(novoNomeCompleto){this.#nomeCompleto = novoNomeCompleto;}
    set peso(novoPeso){this.#peso = novoPeso;}
    set altura(novaAltura){this.#altura = novaAltura;}
    set sexo(novoSexo){this.#sexo = novoSexo;}

    calcularIMC() { // sempre verbo para métodos
        return (this.#peso / (this.#altura * this.#altura));
    }
    classificarFaixaRisco() {

    }
    calcularPesoIdeal() {

    }
    exibirInformacoes() {
        
    }
}