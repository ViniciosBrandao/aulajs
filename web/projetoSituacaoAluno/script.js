function classificarAluno() {
    const nome = document.getElementById("inNome").value;
    const nota1 = Number(document.getElementById("inNota1").value);
    const nota2 = Number(document.getElementById("inNota2").value);
    const media = (nota1 + nota2) / 2;
    let situacao = "";

    if(media > 7) situacao = "aprovado";
    if(media > 5 && media < 7) situacao = "recuperação";
    if(media < 5) situacao = "reprovado";
    
    const mensagem = ` Aluno ${nome}. Média: ${media.toFixed(2)}. Situação: ${situacao}.`
    document.getElementById("idOutResultado").innerText = mensagem;
}