var a = 10
console.log(a)
var a = "Prem"
console.log(a)
// let a = "Premraj" -->ERROR
// const a = "Yash" -->ERROR
a = "Premraj"
console.log(a)

let b = 34
console.log(b)
// let b = "Adarsh" -->ERROR
b = "Adarsh"
console.log(b)

const c = "Yash"
console.log(c)
// c = 43 -->ERROR

console.log(typeof 4.3)

//NN SS BB U
let p1 = null
let p2 = 1
let p3 = Symbol("I'm Premraj")
let p4 = "Premraj"
let p5 = true
let p6 = BigInt(234)
let p7 = undefined

console.log(p1, p2, p3, p4, p5, p6, p7)

// OBJECT
let x = {
    Name: "Premraj Patil",
    rollNo: 66,
    "Subject": "Java"
}

console.log(x)
console.log(x.Name)
console.log(x['Name'])//console.log(x[Name]) --> ERROR
console.log(x.Subject)
console.log(x["Subject"])

x.isPrincipal = false
// x[isStudent] = true -->ERROR
x['isStudent'] = true
console.log(x)

delete x['isStudent']
console.log(x)