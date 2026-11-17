s = input().lower()
(s.replace(" ", ""))
nVogais = sum(c in 'aeiou' for c in s)
print(nVogais % 3)