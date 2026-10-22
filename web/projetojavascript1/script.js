function somar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value)
    const resultado = numero1 + numero2;

    const mensagem = "Resultado da soma: " + resultado + "!";

    document.getElementById("idOutResultado").innerText = mensagem;
}
