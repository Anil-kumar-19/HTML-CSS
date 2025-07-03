// template literals
const name = "Anil";
const age = 24;
const City = "Sringeri";
const pin = 577123

// ES5 using js to render html to browser
let html;

html = '</ul><li>Name:' 
    +name+
    '</li> <li>Age:'
    +age+
    '</li> <li>City:'
    +City+
    '</li> <li>Pin:'
    +pin+
    '</li></ul>'

document.body.innerHTML = html;


// Using ES6 template literals
let html1
html1 = `
    <ul>
    <li>Name:${name} </li>
    <li>Name:${age} </li>
    <li>Name:${City} </li>
    <li>Name:${pin} </li>
    </ul>
    `;

document.body.innerHTML = html1