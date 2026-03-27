// console.log("Hello World!")

let userName: string = "Rolando";
let userAge = 25;
let courseStudent: string = "BSIS 3RD YEAR";
let hobbyType : string = "Designing 3d Artist";


console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)
console.log(`Course - ${courseStudent}`)
console.log(`Hobby - ${hobbyType}`) 

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')