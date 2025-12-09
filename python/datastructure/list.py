num = [1,2,3,4,5,6]
names = ['safa','sana','sss']

mixed = [1,2,'safa','sana',0,0,3.14,200.80,True,False]

print(mixed)
print(names)

print(num)

#access via index

# + val || - val

print(num[0])
print(names[1])

print(mixed[-7])

#modified

names[2] = "Python"

print(names)

#add

names.append("hhh")
names.append("hhh")
names.append("hhh")

print(names)

#insert

num.insert(2,20)
num.insert(5,"siva")

print(num)
#extent

num.extend([200,500,900,"Safa"])

print(num)





