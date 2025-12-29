class Gp:
    amt = 300
    def __init__(self,gname):
        self.gparentname = gname

    def getGPName(self):
        print("My gp Name is ",self.gparentname)

class P(Gp):
    def __init__(self,fn,gn):
        self.fathername = fn
        super().__init__(gn)

    def getFatherName(self):
        print("my father name is ",self.fathername)


class C(P):
    def __init__(self,mname,fname,gpname):
        self.myname = mname
        super().__init__(fname,gpname)
        


    def getMyname(self):
        print("My Name is ",self.myname)
       


c1 = C("RAJA","KKK", "GOD")

c2 = C("Muthu",'MMM','Siva')

c1.getMyname()
c2.getMyname()

c1.getFatherName()
c2.getFatherName()

c1.getGPName()
c2.getGPName()

#print(c1.amt)

#print(c1.fathername)



