var val;

// Number to string
val = 24
console.log(val)
console.log(typeof val)
val = String(24)
console.log(val)
console.log(typeof val)
val = (35).toString()
console.log(val)
console.log(typeof val)


// Boolean to string
val = true
console.log(val)
console.log(typeof val)
val = String(true)
console.log(val)
console.log(typeof val)

// date
val = new Date
console.log(val)
console.log(typeof val)
val = String(new Date)
console.log(val)
console.log(typeof val)
console.log(val.length)


// Convert string into number
var str;
str = Number('55')
console.log(str.toFixed())
console.log(typeof str)

str = parseInt('5')
console.log(str.toFixed(2))

str = 33
console.log(str.toFixed())
console.log(typeof str)