myArray = [4, 4, 8, 3, 3, 3, 2, 4, 4]
a = 4
b = 4
c = 8
d = 3
e = 3
f = 3
g = 2
h = 4
k = 4
print("These are all elements the first way")
for element in myArray:
    print(element)

print("These are all elements the second way")
for i in range(len(myArray)):
    print(myArray[i])

print("These are 3 elements the first way")
for i in range(3):
    print(myArray[i])

print("These are 3 elements the second way")
print(myArray[0])
print(myArray[1])
print(myArray[2])

print("This is the sum")
m = a+b+c+d+e+f+g+h+k
print(m)

print("This is the sum without 4")
n = c+d+e+f+g
print(n)

