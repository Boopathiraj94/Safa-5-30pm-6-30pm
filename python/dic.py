products = {
    "product_name": "Laptop",
    "price":20000,
    "stock":50,
    "specification":"sdfdsf",
    "product_id":2
    }


employee = {
        "employee_name":"safa",
        "designation":"Developer",
        "salary":300000
    }

#access
#print(employee["salary"])
#print(employee["designation"])
#print(employee["employee_name"])
#print(products["product_name"])

#print(products["product_id"])
#print(products["stock"])
#print(products["price"])

#using get method

#print(products.get("stock"))
#print(products.get("product_name"))
#print(products.get("product_id"))

#add
products["offer_price"] = 10000
employee["email"] = "safa@gmail.com"

#print(products)
#print(employee)

#modify / update

employee["employee_name"] = "sanasafa"

#del

#del employee["employee_name"]

#using pop

#employee.pop("salary")

"""print(len(employee))

print(type(employee))

print(employee.values())
print(employee.keys())"""

ky = employee.keys()
ky = list(ky)

v = employee.values()
v = list(v)
 

for keys in range(len(v)):
    print(ky[keys],":",v[keys] , end=" ")






