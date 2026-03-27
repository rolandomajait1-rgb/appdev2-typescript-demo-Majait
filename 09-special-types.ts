// Special Type - null
let a: null;

a = null
// a = "Hi"
console.log(a)

let b: null | string

b = null
console.log(b)
b = "Hi"
console.log(b)
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hi"
console.log(c)


let d: undefined | string

d = undefined
console.log(d)
d = "Hi"
// d = null
// d = 10
console.log(d)