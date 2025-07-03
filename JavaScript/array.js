// Array
const num = [12,3,4,56,76]
const fruit = ['apple','mango','banana']
const num1 = new Array(19,26,45,5,2,7)
const mix = ['Anil',19,true,undefined,null]

console.log(num)
console.log(fruit)
console.log(num1)
console.log(mix)

// length
let val;

val = num.length;
// console.log(val)

// check if its an array
val = [1,2,3,4,5]
val = Array.isArray(num1)

// to get single value
val = num[3]
val = fruit[2]

// insert or replace
num[3] = 67
console.log(num)

// find index value
val = num.indexOf(67)

// mutating an array
// add a number to end
num.push(90)
// add front
num.unshift(100)

// remove last
num.pop()

// remove front
num.shift()

// slicing
num.slice(1, 2)

// reverse
num.reverse()

// concat
val=num.concat(num1)

// sort
val=fruit.sort()
val=num1.sort(function (x,y){
    return x-y;
})

val=num1.sort(function (x,y){
    return y-x;
})

console.log(num)
console.log(val)
