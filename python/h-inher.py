class P:
    amount = 400
    def __init__(self,amt):
        self.amount += amt


class C1(P):

    def __init__(self,amt):
        super().__init__(amt)

class C2(P):
    def __init__(self, amt):
        super().__init__(amt)

     


c2 = C2(100)

c1 = C1(200)

print(c2.amount)
print(c1.amount)



 
