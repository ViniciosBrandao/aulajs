andar1 =  int(input())
andar2 =  int(input())
andar3 =  int(input())

maiorAndar = max(andar1, andar2, andar3)
maior = 0
if abs(andar3 - andar1) >= andar2:
    if (andar3 > andar1):
        print(andar1 * 4 + andar2 * 2)
    else:
        print(andar3 * 4 + andar2 * 2)
else:
    print(andar1 * 2 + andar3 * 2)