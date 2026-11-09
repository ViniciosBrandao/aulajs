import sys

N = 12                                    # tamanho da matriz: um nome para o número mágico

entrada = sys.stdin.read().split()

operacao = entrada[0]                     # 'S' ou 'M'

numeros = []
for texto in entrada[1:]:                 # pula a letra
    numeros.append(float(texto))

matriz = []
for i in range(N):                        # i = LINHA
    linha = []
    for j in range(N):                    # j = COLUNA
        linha.append(numeros[i * N + j])
    matriz.append(linha)

soma = 0.0
contador = 0

for i in range(N):
    for j in range(N):
        if j < i and i + j > N - 1:       # abaixo das duas diagonais
            soma = soma + matriz[i][j]
            contador = contador + 1

if operacao == 'S':
    resultado = soma
else:
    resultado = soma / contador

print(f'{resultado:.1f}')                 # um único print, um único formato