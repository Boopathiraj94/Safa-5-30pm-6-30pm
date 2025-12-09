"""a = 1

while(a<=5):
    print(a)
    a+=2
"""

"""i = 100
while(i>=2):
    print(f"{i} x 2 = {i*2}")
    i-=2"""

for i in range(1,6): #row
    for j in range(1,i+1): #column
        if i == 2 and j == 3 or j == 4 or j==5:
            
        print(j , end=" ")
            
    print()


print(chr(65))
