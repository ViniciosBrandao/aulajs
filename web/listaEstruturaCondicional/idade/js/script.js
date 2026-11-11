const inIdade = document.getElementById("inIdade");
const btnClassificar = document.getElementById("btnClassificar");
const outResposta = document.getElementById("outResposta");

function classeEleitoral(idade){
    if (idade < 16) return "Não-eleitor";
    if (idade < 18) return "Eleitor facultativo (entre 16 e 18 anos)";
    if (idade <= 65) return "Eleitor obrigatório";
    return "Eleitor facultativo (maior de 65 anos)";
}
function eventoClassificar(evento) {
    const idade = Number(inIdade.value);

    const resposta = classeEleitoral(idade);
    outResposta.innerText = resposta;
}

btnClassificar.addEventListener('click', eventoClassificar);