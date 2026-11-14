import sys

# Lê TODA a entrada de uma vez e separa em "pedaços" (palavras) onde houver
# espaço ou Enter. Para o exemplo 3 fica: ['4', '4', '2', '5', '3']
# Todo pedaço ainda é TEXTO (str), não é número.
dados = sys.stdin.read().split()

# colunas = N = quantidade de brinquedos = quantidade de colunas do gráfico.
# int() converte o TEXTO '4' no NÚMERO 4.
colunas = int(dados[0])

# alturas vai guardar os valores Xi como NÚMEROS: [4, 2, 5, 3]
alturas = []

# Os valores Xi começam na posição 1 de "dados" (a posição 0 é o N).
# range(1, colunas + 1) gera 1, 2, ..., colunas.
for i in range(1, colunas + 1):
    alturas.append(int(dados[i]))

# H = a altura do gráfico = o maior valor da lista.
# max() devolve o maior número de uma lista. Aqui H = 5.
maior = max(alturas)

# Cada volta deste laço monta UMA linha do gráfico, de CIMA para BAIXO.
# "nivel" é a altura que a linha representa: começa em H (topo) e desce até 1.
# range(maior, 0, -1) conta de trás para frente: 5, 4, 3, 2, 1 (o 0 não entra,
# porque uma linha de zeros não pode existir).
for nivel in range(maior, 0, -1):

    # linha começa vazia a cada nível. Vai guardar os '0' e '1' desta linha.
    linha = []

    # Percorre as colunas da esquerda para a direita: 0, 1, ..., colunas - 1
    for j in range(colunas):

        # A coluna j chega até este nível? Se a altura dela é maior ou igual
        # ao nível, há "tijolo" aqui (1). Senão, está acima da barra (0).
        if alturas[j] >= nivel:
            linha.append('1')
        else:
            linha.append('0')

    # " ".join(linha) cola os itens da lista com UM espaço entre eles:
    # ['0', '0', '1', '0'] vira "0 0 1 0". Por isso guardamos '0' e '1' como
    # texto: o join só junta texto.
    # print() já coloca o Enter no final de cada linha.
    print(' '.join(linha))
