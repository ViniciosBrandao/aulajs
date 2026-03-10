function saudar(){
    console.log("Olá, aluno! Bem-vindo à aula de Funções.");
}

saudar();

function saudaUsuario(nome){ // nome é o parâmetro
    console.log(`Olá, ${nome}! Seja bem-vindo.`);

}

saudaUsuario("Vinicios"); // "Vinicios" é o argumento

function somar(a, b) {
    return a + b; // Devolve o resultado da soma
}

let resultado = somar(10, 5); // A variável 'resultado' guarda o valor 15
console.log(`O total da conta é: ${resultado}`);