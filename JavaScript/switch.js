// Switch condition in js

// let col = 'red';

// switch(col){
//     case 'red':
//         console.log("Red");
//         break;
//     case 'yellow':
//         console.log('Yellow');
//         break;
//     default:
//         console.log("No match")
// }

const dayOfWeek = new Date().getDay();
// console.log(dayOfWeek)
switch(dayOfWeek){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('No Day');
        break;
}

