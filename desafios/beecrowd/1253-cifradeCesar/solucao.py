import sys

linhas = sys.stdin.read().splitlines()

quantidadeResposta = int(linhas[0])

frases = linhas[1::2]
letrasAPercorrer = linhas[2::2]

indicesPercorrer = []
for l in letrasAPercorrer:
    indicesPercorrer.append(int(l))

alfabetoMaiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

saida = []
i = 0

for elemento in frases:
    linhaResposta = []
    letra = indicesPercorrer[i]
    
    i = i + 1
    listaCaracteres = list(elemento)
    for caractere in listaCaracteres:
        percorre =  alfabetoMaiusculo.index(caractere) - letra
        
        if percorre >= len(alfabetoMaiusculo):
            percorre = percorre - len(alfabetoMaiusculo)
        linhaResposta.append(alfabetoMaiusculo[percorre])
    saida.append(''.join(linhaResposta))
print('\n'.join(saida))    
        