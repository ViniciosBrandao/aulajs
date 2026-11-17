h, m = map(int, input().split())

if h >= 6 and h <= 10:
        print('BREAKFAST')        
elif h == 11:
    if m >= 0 and m <= 30:
        print('BREAKFAST')
    else:
         print('SORRY')
else:
    print('SORRY')
