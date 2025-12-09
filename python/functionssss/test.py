"""def addition(a,b):
    #print(f"{x} + {y} = {x+y}")
    return a+b

a = int(input("Enter the value of A?"))
b = int(input("Enter the value of B?"))
ans = addition(a,b)

print(f"{a} + {b} = {ans}")"""


def sums(*marks):
    print(len(marks))
    total = 0
    for i in range(len(marks)):
        total+=marks[i]

   # print("Total Marks", total)
    return total



print("Total",sums(5,2,8,9,75,25,64,52,90,81))


