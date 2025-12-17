#book = open('temp.txt','w')
book = open('temp.txt','w')
book.write("Hi welcome to safa home \n")
book.write("Hi welcome to sana home")
book.close()
book1 =open('temp.txt','r+')
content = book1.read()
print(content)


