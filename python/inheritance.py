class Father:
    name = ""
    amt = 500

    def setName(self,n,amt):
        self.name = n
        self.amt = amt

    def getName(self):
        print(self.name , self.amt)


class Mother:
    amt1 = 4000
    


class Child(Mother , Father):
    pass



#p1 = Parent()

#print(p1.amt)
#print(p1.name)

c1 = Child()
print(Child.mro())
print(c1.amt , c1.amt1)
