from abc import ABC , abstractmethod

class Server(ABC):
    @abstractmethod
    def register(self,name,depart):
        pass

    @abstractmethod
    def login(self):
        pass

    @abstractmethod #decorator
    def dailylogin(self):
        pass
    

class Student(Server):
    
    def register(self,na):
        self.studentname  = na


    def login(self):
        print(f"Student Name is {self.studentname}")


class Staff(Server):
    def register(self,name):
        self.staffname = name

    def login(self):
        print(f"Staff name is {self.staffname}")
    


s1 = Student()

s1.register("safa")
s1.login()

staff  = Staff()
staff.register("Sana")
staff.login()













