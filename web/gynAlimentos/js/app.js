/*
  Importação da classe Funcionario (named import, ES Modules).
  O app.js é a PONTE entre a página e a classe: lê o formulário,
  cria o objeto e exibe o resultado. Não faz nenhum cálculo.
*/
import { Funcionario } from './Funcionario.js';

/**
 * Processa o envio do formulário: lê os campos, instancia o Funcionario
 * e exibe o contracheque. Se a classe rejeitar um dado, mostra o motivo.
 * @param {Event} evento - Evento 'submit' do formulário.
 */
function processarFormulario(evento) {
  // Impede o recarregamento padrão da página no envio do formulário.
  evento.preventDefault();

  // Remove um contracheque anterior, para não ficar resultado velho na
  // tela caso o novo envio dê erro.
  limparResultado();

  // Campos de texto: .value já é string.
  const matricula = document.getElementById('idInMatricula').value;
  const nome = document.getElementById('idInNome').value;

  // Campos numéricos: .value é sempre string e a classe exige número.
  // parseFloat('') devolve NaN (Number('') devolveria 0, que passaria
  // despercebido), e a classe recusa NaN com a mensagem adequada.
  const dependentes = parseFloat(document.getElementById('idInDependentes').value);
  const salarioBase = parseFloat(document.getElementById('idInSalarioBase').value);
  const producao = parseFloat(document.getElementById('idInProducao').value);

  try {
    // Os setters da classe validam tudo. Se algo for inválido, lançam
    // um Error e a execução salta direto para o catch.
    const funcionario = new Funcionario(matricula, nome, dependentes, salarioBase, producao);

    apresentarContracheque(funcionario);
  } catch (erro) {
    // erro.message contém o texto passado em throw new Error('...').
    alert(erro.message);
  }
}

/**
 * Exibe o contracheque na tela.
 * textContent trata o conteúdo como TEXTO PURO: o nome digitado nunca é
 * interpretado como HTML (sem risco de injeção). A tag <pre> do HTML
 * preserva as quebras de linha e o alinhamento do texto.
 * @param {Funcionario} funcionario - Objeto com os dados e cálculos.
 */
function apresentarContracheque(funcionario) {
  document.getElementById('idOutContracheque').textContent = funcionario.gerarContracheque();
}

/** Apaga o contracheque exibido. */
function limparResultado() {
  document.getElementById('idOutContracheque').textContent = '';
}

/**
 * Registra os ouvintes de eventos da aplicação.
 * 'submit' dispara pelo botão "Gerar" OU pela tecla Enter;
 * 'reset' dispara pelo botão "Limpar" (que esvazia os campos).
 */
function inicializarAplicacao() {
  const formulario = document.getElementById('idFormularioFuncionario');

  formulario.addEventListener('submit', processarFormulario);
  formulario.addEventListener('reset', limparResultado);
}

// Aguarda o DOM estar pronto antes de procurar elementos nele.
// (Com type="module" o navegador já adia o script até o HTML ser lido,
// então aqui é uma garantia a mais, mas é o padrão seguro em qualquer caso.)
document.addEventListener('DOMContentLoaded', inicializarAplicacao);