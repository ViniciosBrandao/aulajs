import sys

linhas = sys.stdin.read().splitlines()
n = int(linhas[0])                       # quantidade de casos

saida = []
for frase in linhas[1:n + 1]:            # exatamente n frases
    metade = len(frase) // 2             # onde cortar
    primeira = frase[:metade]            # 1ª metade
    segunda = frase[metade:]             # 2ª metade
    saida.append(primeira[::-1] + segunda[::-1])   # inverte cada metade e junta

print('\n'.join(saida))