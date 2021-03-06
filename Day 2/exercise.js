//Exercise - Level 1 - 25 Questions

let challenge = "30 Days of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(8,))
console.log(challenge.substring(3,))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let exercise_10 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(exercise_10.split(','))
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(12))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let exercise_17 = "You cannot end a sentence with because because is a conjunction."
console.log(exercise_17.indexOf('because'))
console.log(exercise_17.lastIndexOf('because'))
console.log(exercise_17.search(/because/gi))
let exercise_20 = "        30 Days of JavaScript          "
console.log(exercise_20.trim())
console.log(challenge.startsWith(30))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
let exercise_24a = '30 Days of '
let exercise_24b = 'JavaScript'
console.log(exercise_24a.concat(exercise_24b))
console.log(challenge.repeat(2))

// Exercise : Level 2
console.log("Exercise - Level 2")

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to \'help\' one another.")

console.log("\"LOve is not patronizing and charity isn\'t about pity. it is about love, so don\'t just give money but reach out your hand instead\"")

let ex_3 = '10'
let ex_31 = Number(ex_3)
console.log(typeof(ex_31))

console.log(Math.ceil(parseFloat('9.8')))

let ex_5 = 'Python'
let ex_51 = 'Jargon'
console.log(ex_5.includes('on'))
console.log(ex_51.includes('on'))

const ex_num = Math.random()
let num_bet_0_and_100 = ex_num * 101
console.log(Math.floor(num_bet_0_and_100))

const ex_8 = Math.floor(Math.random() + 50 * 1.5)
console.log(ex_8)

const ex_9 = Math.floor(Math.random() * 256)
console.log(ex_9)

let ex_10 = "JavaScript"
console.log(ex_10[0])


console.log("\n 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")

let ex_12 = "You cannot end a sentence with because because because is a conjunction."
console.log(ex_12.indexOf('because'))
console.log(ex_12.lastIndexOf('because'))
console.log(ex_12.substr(31, 23))

//Exercise - Level 3

let lvl3_1 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(lvl3_1.split(/love/gi).length-1)

let lvl3_2 = "You cannot end a sentence with because because because is a conjunction"
let count = lvl3_2.match(/because/gi)
console.log(count)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const clean_sentence = sentence.replace(/[^a-zA-z0-9]/g, '')
console.log(clean_sentence)

let lvl3_4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

//Method 1
let lvl3_split = lvl3_4.split(' ')
let sal_month = lvl3_split[2]
let sal_bonus= lvl3_split[8]
let sal_course = lvl3_split[12]        
let total_income = Number(sal_month) + Number(sal_bonus) + Number(sal_course)
console.log(total_income)

//Method 2

const sal_list = lvl3_4.match(/\d+/g)
const total_income1 = +sal_list[0] + +sal_list[1] + +sal_list[2]
console.log(total_income1)