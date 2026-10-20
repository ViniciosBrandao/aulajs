/*
==========================================================================
 CONSULTA: PADRÕES DE ENTRADA E SAÍDA ESTILO BEECROWD (JavaScript / Node)
==========================================================================

 COMO USAR ESTE ARQUIVO
 - Rode:  node consulta-beecrowd.js
   Cada padrão roda com um exemplo embutido (texto entre crases).
   O debug aparece no stderr (console.error), a "resposta" no stdout.

 NO BEECROWD DE VERDADE, o texto vem do stdin:
   const texto = require('fs').readFileSync(0, 'utf8');
 E você testa localmente com:
   node solucao.js < entrada.txt | diff - saida.txt

 PRINCÍPIO CENTRAL (vale para qualquer linguagem):
   stdin → ler tudo como TEXTO → separar → converter tipo → processar → imprimir

 REGRAS DE OURO
 1. Tudo que chega é string. "10" !== 10.
 2. Nunca use aspas nos arquivos .txt de entrada/saída.
 3. Saída termina com \n (console.log já faz isso).
 4. Inspecione o dado a cada etapa com dbg() antes de seguir.
 5. Antes de enviar: DEBUG = false (ou apague os dbg).
*/


// =========================================================================
// 0. HELPER DE DEBUG
// =========================================================================
/*
 JSON.stringify mostra o que o olho não vê:
   - strings aparecem entre aspas  → "10" é string, 10 é número
   - \r e \n aparecem escritos     → caracteres invisíveis denunciados
   - "" aparece                    → pedaço vazio sobrando

 Limitação: JSON troca NaN e Infinity por null e omite undefined.
 O "replacer" abaixo corrige isso, para você ver o valor real.

 Usa console.error (stderr) para não contaminar o stdout que o
 juiz (e o diff) comparam.
*/
const DEBUG = true;

function dbg(rotulo, valor) {
  if (!DEBUG) return;
  const seguro = JSON.stringify(valor, (chave, v) => {
    if (typeof v === 'number' && !Number.isFinite(v)) return String(v); // NaN, Infinity
    if (v === undefined) return 'undefined';
    return v;
  });
  console.error(`[${rotulo}] ${seguro}`);
}

// Outras ferramentas de inspeção úteis:
//   typeof valor              → 'string' | 'number' | ...
//   Array.isArray(valor)      → true se for array
//   valor.length              → tamanho (string ou array)
//   Number.isNaN(valor)       → true só para NaN
//   console.table(array)      → tabela legível no terminal


// =========================================================================
// 1. TUDO É SEQUÊNCIA DE NÚMEROS (a organização em linhas não importa)
//    Ex.: soma de A e B; idades da dona Mônica; chá (T + 5 respostas)
// =========================================================================
/*
 Entrada:  "10\n9\n"
 Etapas:
   texto.trim()        "10\n9"          tira o \n das pontas
   .split(/\s+/)       ["10","9"]       corta em QUALQUER espaço/quebra
   .map(Number)        [10, 9]          texto → número, item a item
*/

// --- Versão didática (laço for, igual à sala) ---
function padrao1_for(texto) {
  dbg('texto cru', texto);

  const partes = texto.trim().split(/\s+/);
  dbg('partes (ainda strings)', partes);

  const nums = [];
  for (let i = 0; i < partes.length; i++) {
    nums.push(Number(partes[i]));
  }
  dbg('nums (agora números)', nums);

  return nums[0] + nums[1];
}

// --- Versão profissional ---
function padrao1_pro(texto) {
  const [a, b] = texto.trim().split(/\s+/).map(Number);
  dbg('a, b', [a, b]);
  return a + b;
}

/*
 Por que .trim() E split(/\s+/)?
   trim cuida das PONTAS; /\s+/ cuida do MEIO.
   "1\n2\n".split(/\s+/)  → ["1","2",""]  ← "" sobrando (vira 0 no Number!)

 Por que map(Number) e NÃO map(parseInt)?
   map chama f(elemento, índice, array). parseInt usa o índice como BASE:
   ["1","2","3"].map(parseInt) → [1, NaN, NaN]
*/


// =========================================================================
// 2. ENTRADA POR LINHAS (cada linha tem significado próprio)
//    Ex.: chá → linha 1 = T, linha 2 = respostas
// =========================================================================
/*
 split(/\r?\n/) corta em \n (Linux) e em \r\n (Windows).
 Com split('\n') simples, o \r ficaria grudado: "1\r".
*/
function padrao2_linhas(texto) {
  const lines = texto.trim().split(/\r?\n/);
  dbg('lines', lines);

  const tipoReal = lines[0].trim();
  const respostas = lines[1].trim().split(/\s+/);
  dbg('tipoReal', tipoReal);
  dbg('respostas', respostas);

  // Aqui nem precisa converter: compara string com string.
  // Converter só é necessário para aritmética ou ordem numérica.
  let acertos = 0;
  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] === tipoReal) acertos++;
  }
  return acertos;
}

// Versão profissional da contagem:
function padrao2_pro(texto) {
  const lines = texto.trim().split(/\r?\n/);
  const tipoReal = lines[0].trim();
  const respostas = lines[1].trim().split(/\s+/);
  return respostas.filter((r) => r === tipoReal).length;
}


// =========================================================================
// 3. PRIMEIRO VALOR DIZ QUANTOS VÊM DEPOIS ("a primeira linha contém N")
// =========================================================================
/*
 Desestruturação: const [n, ...resto] = array
   n     → elemento da posição 0
   resto → NOVO array com todo o restante (o ... só pode ser o último)
*/
function padrao3_n_valores(texto) {
  const tokens = texto.trim().split(/\s+/).map(Number);
  const [n, ...resto] = tokens;
  dbg('n', n);
  dbg('resto', resto);

  const valores = resto.slice(0, n); // garante exatamente n valores
  let soma = 0;
  for (let i = 0; i < valores.length; i++) soma += valores[i];
  return soma;
}


// =========================================================================
// 4. VÁRIOS CASOS ATÉ O FIM DA ENTRADA (EOF)
//    Ex.: "cada linha tem dois números" sem dizer quantas linhas
// =========================================================================
/*
 Descarte linhas vazias (o \n final gera uma) e processe todas as outras.
 Acumule saídas num array e imprima de uma vez com join('\n').
 Muitos console.log pequenos são mais lentos que um só grande.
*/
function padrao4_ate_eof(texto) {
  const lines = texto.split(/\r?\n/).filter((l) => l.trim() !== '');
  dbg('lines úteis', lines);

  const saidas = [];
  for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].trim().split(/\s+/).map(Number);
    saidas.push(x + y);
  }
  return saidas.join('\n');
}


// =========================================================================
// 5. LINHAS DE TEXTO COM ESPAÇOS QUE FAZEM PARTE DO DADO (nomes, frases)
// =========================================================================
/*
 NÃO use split(/\s+/) no texto todo: "Maria da Silva" viraria 3 pedaços.
 Corte só por linha. Aplique trim() em cada linha, não no texto inteiro,
 se espaços nas pontas da linha forem relevantes.
*/
function padrao5_texto(texto) {
  const lines = texto.split(/\r?\n/);
  dbg('lines', lines);

  const nome = lines[0].trim();   // "Maria da Silva" intacto
  const idade = Number(lines[1]); // "30" → 30
  return `${nome} tem ${idade} anos`;
}


// =========================================================================
// 6. DECIMAIS E FORMATAÇÃO DA SAÍDA
// =========================================================================
/*
 Number("3.14") → 3.14 (ponto decimal, nunca vírgula).
 Ponto flutuante é impreciso:  0.1 + 0.2  →  0.30000000000000004
 toFixed(n) arredonda e devolve STRING com n casas: ideal para imprimir.
 Se o enunciado pede "2 casas decimais", use toFixed(2) só na saída;
 mantenha os cálculos em número.
*/
function padrao6_decimais(texto) {
  const raio = Number(texto.trim());
  dbg('raio', raio);
  const area = 3.14159 * raio * raio;
  dbg('area bruta', area);
  return `A=${area.toFixed(4)}`;
}


// =========================================================================
// 7. MAIOR VALOR SEM Math.max (o "campeão")
// =========================================================================
/*
 Guarde o maior visto até agora e compare cada candidato com ele.
 Math.max()           → -Infinity (ponto de partida: todo número o vence)
 Math.max(...[3,7,5]) → 7 (o ... espalha o array em argumentos)
*/
function maiorDe(lista) {
  let maior = lista[0];            // lista vazia → undefined (cuidado)
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) maior = lista[i];
  }
  return maior;
}

// Mesma ideia, tolerando lista vazia (devolve -Infinity como Math.max):
function maiorDe_seguro(lista) {
  let maior = -Infinity;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > maior) maior = lista[i];
  }
  return maior;
}


// =========================================================================
// 8. TABELA DE ARMADILHAS (o que já deu errado e por quê)
// =========================================================================
/*
 SINTOMA                         CAUSA PROVÁVEL                        COMO ACHAR
 ------------------------------  ------------------------------------  ----------------------------
 NaN na saída                    aspas/lixo no .txt; Number("")        dbg(...) logo após o parse
 Sempre imprime 0                laço não roda (typo em .length)       console.error(arr.length)
 parseInt(array) devolve 1       parseInt converte UM texto, não lista  JSON.stringify(resultado)
 Comparação sempre false         "1" !== 1 (string vs número)          typeof dos dois lados
 Elemento "" ou 0 sobrando       \n no fim sem trim()                  JSON.stringify(lines)
 "1\r" em vez de "1"             entrada com \r\n e split('\n')        JSON.stringify(lines)
 Presentation Error              faltou \n no fim ou espaço a mais     diff - saida.txt
 "10" < "9" dá true              comparação de TEXTO (ordem alfabética) converta com Number()
 Wrong answer só em alguns       caso de borda não testado             crie entradas: tudo certo,
                                                                       nenhum certo, só o último...
*/


// =========================================================================
// DEMONSTRAÇÃO (apague ou comente ao copiar um padrão para a solução)
// =========================================================================
function secao(titulo) {
  console.log(`\n--- ${titulo} ---`);
}

secao('1a. soma (for)');
console.log(padrao1_for('10\n9\n'));

secao('1b. soma (profissional), com \\r\\n');
console.log(padrao1_pro('-10\r\n4\r\n'));

secao('2. chá (T=1; respostas 1 2 3 2 1) → esperado 2');
console.log(padrao2_linhas('1\n1 2 3 2 1\n'));
console.log(padrao2_pro('1\n1 2 3 2 1\n'));

secao('3. N valores (3 valores: 10 20 30) → esperado 60');
console.log(padrao3_n_valores('3\n10 20 30\n'));

secao('4. até EOF (3 linhas)');
console.log(padrao4_ate_eof('1 2\n3 4\n5 6\n'));

secao('5. texto com espaços');
console.log(padrao5_texto('Maria da Silva\n30\n'));

secao('6. decimais (raio 2.00)');
console.log(padrao6_decimais('2.00\n'));

secao('7. maior sem Math.max');
console.log(maiorDe([14, 18, 20]));
console.log(maiorDe_seguro([]));       // -Infinity, igual a Math.max()
console.log(Math.max(...[3, 7, 5]));   // 7

/*
 EXERCÍCIOS PARA FIXAR (preveja a saída ANTES de rodar):
   console.log("10" < "9");
   console.log(Number("10") < Number("9"));
   console.log(Number(""));
   console.log(Number("12abc"));
   console.log(parseInt("12abc"));
   const [x, y, ...z] = [10, 20];  console.log(x, y, z);
*/