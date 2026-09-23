// export serve para linkar diferentes arquivos com javascript
export class Paciente {
    // Atributos 
    nomeCompleto;
    peso;
    altura;
    sexo;

    // Metodos
    constructor(nomeCompleto, peso, altura, sexo) {
        this.nomeCompleto = nomeCompleto; // this é o sobrenome dos atributos, diferenciando dos parametros
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }
    calcularIMC() { // sempre verbo para método
        return (this.peso / (this.altura * this.altura));
    }
}