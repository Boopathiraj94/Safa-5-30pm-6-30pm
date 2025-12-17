class Car:
    name=""
    price=0
    color=""
    brand=""
    carlists = [] 

    def __init__(self,n,p,c,b): 
         self.name = n
         self.price = p
         self.color = c
         self.brand = b
         
    
    
    def addCars(self):
        my_car_disc = { 'name': self.name , 'price':self.price , 'color': self.color,'brand':self.brand}
        self.carlists.append(my_car_disc)
        
        
    
    def getCarDetails(self):
        #print(f"Name: {self.name} \nPrice = {self.price} \nColor = {self.color}\nBrand = {self.brand}")
        print(self.carlists)
        
        



for i in range(2):
    n = input(f"Enter your Car{i+1}  name?")
    p = input(f"Enter your Car{i+1} Price?")
    c = input(f"Enter your Car{i+1} Color?")
    b = input(f"Enter your Car{i+1} Brand?")

    c1 = Car(n,p,c,b)
    c1.addCars()
    




c1.getCarDetails()



 

"""c2 = Car()
print(c1.__dict__)
#Car.setCarDetails(n,p,c,b)
#Car.getCarDetails()
c2.setCarDetails("Nano",100000,"white","TATA")
c2.getCarDetails()

def setCarDetails(n,p,c,b):
        Car.name = n
        Car.price = p
        Car.color = c
        Car.brand = b
"""




