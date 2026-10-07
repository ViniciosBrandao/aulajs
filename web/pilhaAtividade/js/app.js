import { Pilha } from './Pilha.js';

const formulario = document.getElementById('idFormPalindromo');
const inTexto = document.getElementById('idInTexto');
const outResultado = document.getElementById('idOutVerificarPalindromo');

// Os únicos caracteres que participam da comparação. Em vez de listar o
// que deve SAIR (vírgula, traço, ponto... a lista nunca acaba), listamos
// o que deve FICAR. Constante fora da função: criada uma vez, não a cada
// chamada.
const CARACTERES_PERMITIDOS = 'abcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Reduz o texto ao que importa para a comparação: letras e números,
 * minúsculos e sem acento.
 *
 * - toLowerCase: "A" e "a" são caracteres diferentes para o JavaScript.
 * - normalize('NFD'): decompõe cada letra acentuada em letra + acento
 *   solto ("ô" vira "o" + marca de acento).
 * - O laço mantém só o que está em CARACTERES_PERMITIDOS: espaços,
 *   pontuação e os acentos soltos são descartados.
 *
 * Limitação: reconhece apenas letras latinas (a-z) e dígitos. Textos em
 * outros alfabetos (grego, cirílico...) seriam descartados por inteiro.
 *
 * @param {string} texto - Texto digitado.
 * @returns {string} Texto normalizado.
 */
function normalizarTexto(texto) {
  const decomposto = texto.toLowerCase().normalize('NFD');
  let textoNormalizado = '';

  // for...of percorre a string um caractere por vez (string é iterável);
  // nenhum array é criado.
  for (const caractere of decomposto) {
    if (CARACTERES_PERMITIDOS.includes(caractere)) {
      textoNormalizado += caractere;
    }
  }

  return textoNormalizado;
}

/**
 * Verifica se o texto é palíndromo usando uma Pilha.
 * A pilha nasce DENTRO da função e é descartada ao seu fim: não existe
 * estado compartilhado entre chamadas, então não há o que esvaziar e um
 * erro no meio do caminho não deixa resíduo.
 *
 * @param {string} texto - Texto já normalizado.
 * @returns {boolean} true se for palíndromo.
 */
function ehPalindromo(texto) {
  const caracteres = [...texto];
  const pilha = new Pilha();

  for (const caractere of caracteres) {
    pilha.empilhar(caractere);
  }

  // A segunda metade é o espelho da primeira: basta conferir a primeira.
  const metade = Math.floor(caracteres.length / 2);

  for (let pos = 0; pos < metade; pos++) {
    if (caracteres[pos] !== pilha.acessar()) {
      return false;
    }

    pilha.desempilhar();
  }

  return true;
}

/**
 * Trata o envio do formulário.
 * @param {SubmitEvent} evento
 */
function aoVerificar(evento) {
  // O submit padrão recarrega a página; preventDefault cancela isso.
  evento.preventDefault();

  // Guardamos o texto original (só sem espaços nas pontas) para exibi-lo
  // na resposta; a comparação usa a versão normalizada.
  const textoOriginal = inTexto.value.trim();
  const textoNormalizado = normalizarTexto(textoOriginal);

  // O "required" do HTML aceita "   " ou "!!!"; só depois de normalizar
  // sabemos se sobrou algo para comparar. A validação do HTML é conforto:
  // o JavaScript sempre revalida.
  if (textoNormalizado === '') {
    outResultado.textContent = 'Informe um texto com letras ou números.';
    return;
  }

  // textContent: o que o usuário digitou nunca é interpretado como HTML,
  // por isso é seguro exibir o texto original na resposta.
  outResultado.textContent = ehPalindromo(textoNormalizado)
    ? `"${textoOriginal}" é um palíndromo.`
    : `"${textoOriginal}" não é um palíndromo.`;
}

/** Ao limpar o formulário, apaga também o resultado e devolve o foco. */
function aoLimpar() {
  outResultado.textContent = '';
  inTexto.focus();
}

formulario.addEventListener('submit', aoVerificar);
formulario.addEventListener('reset', aoLimpar);