// *************** NUMBERS ********************************

// let age = 35
// const gravity = 9.81   //we use const for non-changing values, gravitational constant in m/s2
// let mass = 72
// const PI = 3.14 //pi a geometrical constant

// //More Examples

// const boilingPoint = 100
// const bodyTemp = 37

// console.log(age,gravity, mass, PI, boilingPoint, bodyTemp)

// ********************** MATH OBJECT ******************************

const PI = Math.PI 
console.log('The value of pi is :' + PI)

//Rounding to the closest number

console.log(Math.round(PI))

console.log(Math.round(9.81))

console.log(Math.floor(PI))

console.log(Math.ceil(PI))

console.log(Math.min(-5, 3, 20, 5, 10))

console.log(Math.max(-5, 20, 3, 4, 5))

//Creates random number between 0 to 0.99

const randNum = Math.random()
console.log(randNum)

//Let us create random number between 0 to 10

const num = Math.floor(Math.random() * 11)

//Absolute Value

console.log(Math.abs(-10))

//Square Root

console.log(Math.sqrt(16))
console.log(Math.sqrt(100))

//Power

console.log(Math.pow(2,4))


//Logarithms
//Return Natural logarithm with base E of x, Math.log(x)

console.log(Math.log(2))
console.log(Math.log(10))

//Returns the Natural Logarithm of 2 and 10 respectively

console.log(Math.LN2)
console.log(Math.LN10)

//Trignometry

console.log(Math.sin(0))
console.log(Math.sin(60))

console.log(Math.cos(0))
console.log(Math.cos(60))

//Random Number Generator

let randNum1 = Math.random()

//Now let us see how we can use random() method to generate a random number between 0 and 10:

//generates 0 to 0.99
let randomNum = Math.random()
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

 