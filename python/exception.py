"""try:
    x = 10/0
    print(x)
    
except ZeroDivisionError:
    print("you can't divide by zero")
"""

#a = int("sdfsdf")

try:
    a = int(input("Enter the value a?"))
    b = int(input("Enter the value b?"))

    c = a/b
    print(c)

#except ZeroDivisionError as z:
    #print("number can't divide by zero" ,z)

#except ValueError as v:
    #print("A value or type error occur" ,v)
except Exception as e :
    print("some Error :",e)
    
finally:
    print("process completed")

