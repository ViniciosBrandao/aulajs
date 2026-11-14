import sys

entrada = sys.stdin.read().split()

numeros = []
for n in entrada:
    numeros.append(int(n))

idadeMonica = numeros[0]
filho1 = numeros[1]
filho2 = numeros[2]
filho3 = idadeMonica - filho1 - filho2
maior = filho1
if filho2 > maior:
    maior = filho2
if filho3 > maior:
    maior = filho3
print(maior)