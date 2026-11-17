import sys

dados = sys.stdin.read().split()

numeros = []
for n in dados:
    numeros.append(int(n))

saida = []
letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
for n in numeros:
    saida.append(letras[n - 1])
print(''.join(saida))

