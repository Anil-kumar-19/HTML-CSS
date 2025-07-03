// object literals
const person = {
    name:"anil",
    age:24,
    Email:"sringeri@gmail.com",
    hobby:['cricket','code','dance'],
    address:{
        city:"Sringeri",
        state:"Karnataka"
    }
};

console.log(person)//entire object elements
console.log(person.name) // only name
console.log(person.age) //Age
console.log(person.Email) //City
console.log(person.hobby)//Hobby array
console.log(person.hobby[2]) // Exact Array[index] value is Dance


let val;
val = person;
console.log(val.address.state) // Karnataka
console.log(val.address.city) //Sringeri



// Array of Objects
const people = [
    {
        firstName:"Anil",
        age:24
    },
    {
        firstName:"Kumar",
        age:23
    }
]

console.log(people[1].firstName) //Kumar
console.log(people[1].age) //23
console.log(people[0].firstName) //Anil
console.log(people[0].age) //24
// console.log(people[3].firstName)//error because there is no index 3