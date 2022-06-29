let isLightOn = true
let isRaining = false
let isHungry = true
let isMarried = false

let truValue = 4 > 3
let falValue = 4 < 3

console.log(truValue,falValue)


let firstname
console.log(firstname)

let empty = null
console.log(empty)

let num1 = 4
let num2 = 3
let sum = num1 + num2
let sub = num1 - num2
let div = num1 / num2
let mul = num1 * num2
let remainder = num1 % num2
let powerof = num1 ** 2

console.log(sum,sub,mul, div, remainder, powerof)


const PI = 3.14
let radius = 100 //length in meter

//let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)

const gravity = 9.81              //in m/s2
let mass = 72                     //in Kilogram

//Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)

const boilingPoint = 100
const bodyTemp = 37

//Concatenating string with numbers using string interpolation
console.log(`THe boiling point of water is $(boilingPoint) oC.\nHuman Body Tempreature is $(bodyTemp) oC.\nThe gravity of earth is $(gravity) m/s2.`)

//Comparison Operator
console.log(3 > 2)
console.log(3 >= 2)
console.log(3 < 2)
console.log(2 < 3)
console.log(2 <= 3)
console.log(3 == 2)
console.log(3 != '3')
console.log(0 == false)
console.log(undefined == null)
console.log(undefined === null)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(typeof NaN)
console.log('mango'.length == 'avocado'.length)


//Logical Operators

// &&
const check = 4 > 3 && 10 > 5
const check1 = 4 > 3 && 10 < 5
const check2 = 4 < 3 && 10 < 5
console.log(check, check1, check2)

// || 
const check3 = 4 > 3 || 10 > 5
const check4 = 4 > 3 || 10 > 5
const check5 = 4 > 3 || 10 > 5
console.log(check3, check4, check5)

// ! Negation 
let check6 = 4 > 3
let check7 = !(4 > 3)
let check8 = !isLightOn

console.log(check6, check7, check8)

//Increment Operator
//Pre-increment
let count = 5
console.log(++count)
console.log(count)

//Post-increment
let count1=10
console.log(count1++)
console.log(count1)

//Note - We mostly use post increment operator.

//Pre-Decrement Operator

let count2 = 0
console.log(--count2)
console.log(count2)

//Post-Decrement Operator

let count3 = 0
console.log(count3--)
console.log(count3)

//Ternary Operator 

let isRain = true
isRain
    ? console.log("You need a rain coat")
    : console.log("No need for a raincoat")
isRain = false

isRain = false
    ? console.log("You need a raincoat")
    : console.log("No need for a raincoat")

    //

let num = 5
num > 0
    ? console.log(`${num} is a positive number`)
    : console.log(`${num} is a negative number`)
num = -5

num > 0 
    ? console.log(`${num} is a positive number`)
    : console.log(`${num} is a negative number`)

// Operator Precedence
// Multiplication has a higher precedence than Addition. Hence, Multiplication is performed earlier than Addition.
let x
x = 3 + 5 * 3
console.log(x)

//Division has a higher precendence than Subtraction. Hence, Division is performed earlier than Subtraction
let y
y = 3 - 14 / 2
console.log(y)

// We can use parentheses to priortize lower level precedence
let z 
z = (5 + 4) * 2 + 5 / 5
console.log(z)