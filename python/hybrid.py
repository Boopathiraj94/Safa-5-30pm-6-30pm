class PetAminal:
    petname=""

    def __init__(self,name):
        self.petname = name
    
    def category(self):
        print(f"{self.petname} is my pet animal list")
    
 

class Cat(PetAminal):
    catfoodname=""
    def __init__(self,name):
        super().__init__(name)


    def catFood(self):
        print(f"my cat food is {self.catfoodname}")

class Dog(PetAminal):
    dogfoodname=""
    def __init__(self,name):
        super().__init__(name)


    def dogFood(self):
        print(f"my dog food is {self.dogfoodname}")

class Food(Cat,Dog):

    def __init__(self,fn):
        Dog.dogfoodname = fn
        Cat.catfoodname = fn
        
    
 
d = Dog("puppy") 
d.category()

c = Cat("Tommy")
c.category()

f = Food("biscut")
f.dogFood()
f.catFood()

