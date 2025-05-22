const arrayOfElements = [4, 4, 8, 3, 3, 3, 2, 4, 4]

let a1 = 4
let a2 = 4
let a3 = 8
let a4= 3
let a5 = 3
let a6 = 3
let a7 = 2
let a8 = 4
let a9 = 4
console.log("These are all elements the first way")
arrayOfElements.forEach(item =>{
    console.log(item)
    })
console.log("These are all elements the second way")
for(var i = 0; i<arrayOfElements.length; i++){
    console.log(arrayOfElements[i])
} 

console.log("These are 3 elements the first way")
console.log(arrayOfElements[0])
console.log(arrayOfElements[1])
console.log(arrayOfElements[2])

console.log("These are 3 elements the second way")
for(var i = 0; i<3; i++){
    console.log(arrayOfElements[i])
} 

let a10 = a1+a2+a3+a4+a5+a6+a7+a8+a9
console.log("This is the sum")
console.log(a10)

let a11 = a3+a4+a5+a6+a7
console.log("This is the sum without 4")
console.log(a11)