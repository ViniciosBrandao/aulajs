import sys

entrada = list(map(int, sys.stdin.read().split()))

n, q = entrada[0], entrada[1]
valores = entrada[2 : 2 + n]
perguntas = entrada[2 + n :]

prefixo = [0]
soma = 0
for v in valores:
    soma = soma + v
    prefixo.append(soma)

saida = []
for x in perguntas:
    saida.append(prefixo[x])

print('\n'.join(map(str, saida)))
