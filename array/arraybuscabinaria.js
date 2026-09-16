// o vetor precisa estar ordenado
function buscaBinaria(vetor, valor) {
  let inicio = 0;
  let fim = vetor.length - 1;
  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (vetor[meio] === valor) {
      return meio; // encontrou o elemento
    }
    if (vetor[meio] < valor) {
      inicio = meio + 1; // descarta a metade da esquerda
    } else {
      fim = meio - 1; // descarta a metade da direita
    }
  }
  return -1; // não encontrado
}