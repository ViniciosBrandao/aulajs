import sys

dados = sys.stdin.read().split()      # LEITURA: tudo vira uma lista de TEXTOS
                                      # ['S', '1.0', '2.0', ..., '144.0']

operacao = dados[0]                   # a letra ('S' ou 'M'): continua texto, de propósito

numeros = []                          # CONVERSÃO
for texto in dados[1:]:               # dados[1:] = a partir da posição 1 (pula a letra)
    numeros.append(float(texto))      # texto -> número decimal (como Number() no JS)

matriz = []                           # montar a 12x12 a partir da fila de 144 números
for i in range(12):
    linha = []                        # lista nova
    for j in range(12):
        linha.append(numeros[i * 12 + j])   # a linha i começa depois de i linhas de 12
    matriz.append(linha)

soma = 0.0                            # LÓGICA: dois acumuladores
contador = 0

for i in range(12):
    for j in range(12):
        if i < j and i + j < 11:      # a condição do desenho
            soma = soma + matriz[i][j]
            contador = contador + 1

if operacao == 'S':                   # só no fim decide o que mostrar
    resultado = soma
else:
    resultado = soma / contador       # média = soma / QUANTOS entraram

print(f'{resultado:.1f}')             # SAÍDA: uma casa decimal