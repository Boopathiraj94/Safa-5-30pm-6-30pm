class Car:
    def nameBrand(self):
        pass



class Honda(Car):
    def nameBrand(self):
        details = {'name': 'Honda - Crv','price':'5L','color':'red'}
        return details


class Tata(Car):
    def nameBrand(self):
        details = {'name': 'Tata - Nano','price':'3L','color':'blue'}
        return details


class Hyndai(Car):
    def nameBrand(self):
        details = {'name': 'hymdai - KKK','price':'2L','color':'orangee'}
        return details

cars = [Honda(),Tata(),Hyndai()]

for c in cars:
    print(c.nameBrand())


print(len("safa"))

print(len([4,6,8,9,5]))
    

"""h = Honda()

c = h.nameBrand()

print(c)

t = Tata()

t.nameBrand()"""
