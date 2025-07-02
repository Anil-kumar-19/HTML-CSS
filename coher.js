// Cohersion
// const val1 = 15
// const val2 = 20

// const sum = val1+val2
// console.log(sum)
// console.log(typeof sum)


// String Methods
const firstname = "Anil";
const lastname = "Kumar";
const str = "Hello my friend.";

var val;
// concat
val = firstname+lastname;
console.log(val)

val = firstname + ' '+lastname
console.log(val)

val = firstname.concat(" ",lastname)
console.log(val)

// append
var name = "anil"
name += "Kumar"
console.log(name)

// Escaping
val = "That's awesome, I can't wait."
console.log(val)
// length
val=lastname
console.log(val.length)

// Uppercase and lowercase
val = "AnilKumar"
console.log(val.toUpperCase())
console.log(val.toLowerCase())

// Index of,Charat, substring
val="Anil kumar"
console.log(val.indexOf('l'))
console.log(val.charAt(5))
console.log(val.substring(0,5))

// slice, split, replace and include
console.log(val.slice(0,6))
console.log(val.split('',))
console.log(val.replace('Anil','Anis'))
console.log(val.includes('','good'))