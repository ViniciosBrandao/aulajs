import sys

dados = sys.stdin.read().splitlines()

qtdAlunos = int(dados[0])
notas = list(map(int, dados[1].split()))

maiorNumero = 0
contagem = []
for numero in notas:
    contagem.append(notas.count(numero))  
maiorContagem = max(contagem)

saida = []
for numero in notas:
    if(notas.count(numero) == maiorContagem):
        saida.append(numero)
print(max(saida))