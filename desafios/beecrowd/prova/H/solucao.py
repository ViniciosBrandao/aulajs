import sys

dados = sys.stdin.read().split()

numeros = []
for n in dados:
    numeros.append(int(n))
dario = numeros[1::2]
xerxes = numeros[2::2]
contadorDario = 0
contadorXerxes = 0

jogadas = [0, 1, 2, 3, 4]


for i in range((len(dario))):
    nova = (dario[i] + 1) % 4
    if(xerxes[i] == jogadas[nova]):
        contadorDario = contadorDario + 1
    else:
        contadorXerxes = contadorXerxes + 1
        
if contadorXerxes > contadorDario:
    print('xerxes')
else:
    print('dario')