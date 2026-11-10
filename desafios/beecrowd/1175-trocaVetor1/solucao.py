import sys

entrada = sys.stdin.read().split()

numeros = []
for i in entrada:
    numeros.append(int(i))

contador = 0
resposta = []

for i in range(19, -1, -1):
    saida = f'N[{contador}] = {numeros[i]}'
    resposta.append(saida)
    contador = contador + 1

print('\n'.join(resposta))