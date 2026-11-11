import sys

linhas = sys.stdin.read().splitlines()
n = int(linhas[0])                          # quantidade de casos

alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'     # o texto também tem posição: alfabeto[0] = 'A'

saida = []
for k in range(n):
    palavra = linhas[1 + 2 * k]             # linha da palavra do caso k
    deslocamento = int(linhas[2 + 2 * k])   # linha seguinte: o deslocamento

    original = ''
    for letra in palavra:
        posicao = alfabeto.index(letra)             # 0 a 25
        nova = (posicao - deslocamento) % 26        # % 26 dá a volta, nunca fica negativo
        original = original + alfabeto[nova]
    saida.append(original)

print('\n'.join(saida))