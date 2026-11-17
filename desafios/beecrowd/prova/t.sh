#!/usr/bin/env bash
# uso: bash t.sh A/solucao.py  (roda cada N.in da pasta do arquivo e compara com N.out)
f="$1"; d=$(dirname "$f"); n=0
for i in "$d"/*.in; do
  [ -e "$i" ] || { echo "ERRO: nenhum .in em $d"; exit 1; }
  o="${i%.in}.out"; n=$((n+1))
  if timeout 5 python3 "$f" < "$i" | diff - "$o"; then echo "OK     $(basename "$i")"; else echo "FALHOU $(basename "$i")"; fi
done
