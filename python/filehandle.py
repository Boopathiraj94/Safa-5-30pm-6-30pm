book = open('test.txt','r')
#content = book.read() # entire content
#print(content)

#book.close()

book = open('safa/test.txt','r')

#print(book.readline()) # line by line execution
#print(book.readlines())

print("===============")
s = book.readlines()
print(s[2])
#print(book.readlines()) # whole content by it show list

#print(book.read(3)) # return the letters of whole content

