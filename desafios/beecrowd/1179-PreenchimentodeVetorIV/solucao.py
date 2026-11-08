import sys

dados = sys.stdin.read().split()          # lista de TEXTOS: ['1', '2', ...]

numeros = []
for texto in dados:
    numeros.append(int(texto))            # converte na entrada: precisa de número p/ % 2

par = []       # guarda LINHAS já formatadas (texto), e não números
impar = []
blocos = []

for n in numeros:
    if n % 2 == 0:
        # len(par) ANTES do append é a posição desta linha
        par.append('par[' + str(len(par)) + '] = ' + str(n))   # converte de volta na saída
        if len(par) == 5:
            blocos.append('\n'.join(par))   # agora é lista de strings: join funciona
            par = []
    else:
        impar.append('impar[' + str(len(impar)) + '] = ' + str(n))
        if len(impar) == 5:
            blocos.append('\n'.join(impar))
            impar = []

# sobras: ímpar primeiro. O if evita bloco vazio (linha em branco)
if len(impar) > 0:
    blocos.append('\n'.join(impar))
if len(par) > 0:
    blocos.append('\n'.join(par))

print('\n'.join(blocos))                  # um único print, de texto