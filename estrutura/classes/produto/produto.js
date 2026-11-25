/*
 * EXERCÍCIO 3: CLASSE Produto
 *
 * ATRIBUTOS (privados): nome, preco.
 * CONSTRUTOR: recebe nome e preco e os guarda CHAMANDO OS SETTERS
 *             (this.nome = nome; this.preco = preco;), para a validação
 *             valer já na criação do objeto.
 * GETTERS E SETTERS de nome e preco.
 *   - nome: não pode ser vazio nem só espaços (use trim).
 *   - preco: precisa ser número maior que 0.
 *   - valor inválido: throw new Error("mensagem clara").
 * MÉTODO calcularPrecoComDesconto(percentual):
 *   - percentual entre 0 e 100, senão lança Error.
 *   - DEVOLVE o novo valor, sem alterar o preço original do produto.
 *
 * TESTE (teste.js): crie 2 produtos, mude o preço de um pelo setter,
 * mostre o preço com 10% de desconto e prove que o preco original
 * não mudou. Capture com try/catch um preço negativo e um nome vazio.
 *
 * PERGUNTAS PARA RESPONDER EM COMENTÁRIO:
 * 1. Por que NÃO guardar o preço com desconto em um atributo?
 * 2. Por que o construtor usa o setter e não atribui direto ao #preco?
 * 3. Qual a diferença entre um método e um atributo, neste exemplo?
 */