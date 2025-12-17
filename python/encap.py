class Bank:
   def __init__(self ):
       #name , phone public attribe
       self.name = ""
       self.phone = ""
       #private attribute
       self.__balance = 0
       self.__acc_no = ""


   def bank_bal(self):
       return self.__balance


   def deposit(self,ac , amt):
       if(self.__acc_no == ac):
           self.__balance+=amt
       
   def account_create(self,n,p,ac,amt):
       self.name = n
       self.phone = p
       self.__balance = amt
       self.__acc_no = ac
       print("account has been created!!!.")
       

c1 = Bank()
isExit =True
while(isExit):
    
    op = input("Enter your OPtion \n1. Account Create \n2. Deposit \n3.Withdraw \n4.Show Balance \n5.exit \n")
    if(op== "1"):
        n = input("Name?")
        p = input("phone?")
        ac = input("acc no?")
        amt = int(input("amount?"))
        c1.account_create(n,p,ac,amt)
        
    elif(op == "2"):
        ac = input("acc no?")
        amt = int(input("amount?"))
        c1.deposit(ac,amt)
    elif(op == "3"):
        pass
    elif(op == "4"):
        amt = c1.bank_bal()
        print(f"Balance is : {amt}")
    elif(op == "5"):
        isExit = False

