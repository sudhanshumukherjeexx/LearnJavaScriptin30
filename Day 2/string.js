let space = ' ' // an empty space string
let first_name = "abc"
let age = 25
let last_name = "def"
let country = "India"
let city = "Delhi"
let language = "JavaScript"
let job = "Developer"
let quote = "Limits like Fear is just an illusion."

//String Concatenation

let fullname = first_name + space + last_name; 
console.log(fullname)

//String Concatenation Using + Operator

let fullName = first_name + space + last_name
let personInfoOne = fullName + '. I am ' + age + '. I Live in ' + country;

console.log(personInfoOne)

//Escape Sequence in Strings

console.log('Hi I am learning 30 days of Javascript.\n Are you learning too?')
console.log('Days \tTopics \t Exercises')
console.log('Day 1 \t3 \t5')
console.log("This is a backslash symbol (\\)") //To write a backslash
console.log('In every programming language it starts with \"Hello World!\"')
console.log('Limits like \"Fear\" is just an \" Illusion.\"')


//Template Literals (Template Strings)

//Sum
console.log(`The sum of 2 and 3 is 5`)
let a = 10
let b = 2
console.log(`The sum of ${a} and ${b} is ${a + b}`) //Injecting the data dynamically

//Greater Than
let c = 5
let d = 3
console.log(` ${a} is greater than ${b} : ${a > b}`)


//***************  String Methods  ************************

//Length - length of a string
let str1 = 'JavaScript'
console.log(str1.length)

let str2 = 'Lets Learn'
console.log(str2.length)

//Accessing characters in a String  string[index]
let str3 = "javascript"
first_char = str3[0]
console.log(first_char)

let lastindex = str3.length - 1
console.log(lastindex)
console.log(str3[lastindex])


//toUpperCase() - convert string to upper case.

console.log(str3.toUpperCase())

//toLowerCase() - convert string to lower case

str4 = "JAVASCRIPT"
console.log(str4.toLowerCase())

//substr - string[index, no. of char to access]
console.log(str4.substr(4,6))

//substring - string[starting index, stopping index(not included) just like a slicing in python]
console.log(str4.substring(1,6))

//split() - splits the string into object
str5 = "30 Days of JavaScript"
console.log(str5.split())
console.log(str5.split(' '))

str6 = 'JavaScript'
console.log(str6.split())
console.log(str6.split(''))

//trim - removes blank spaces
let str7 = '  30 Days of JavaScript   '
console.log(str7)
console.log(str7.trim(' '))
console.log(str7.trim())


//includes() - Check if a string is in the main string
console.log(str5.includes("Days"))
console.log(str5.includes("of"))
console.log(str5.includes("python"))

//replace() - Replace the words in a string
console.log(str5)
console.log(str5.replace('JavaScript','Python'))
console.log(str6)
console.log(str6.replace('Java', 'Type'))


//charAt() - Returns characters located at the index
console.log(str5.charAt(5))

let lastindex1 = str5.length - 1
console.log(str5.charAt(lastindex1))

//charCodeAt() - returns ASCII value of the character present in the index 
console.log(str5.charCodeAt(5))
console.log(str5.charCodeAt(lastindex1))

//indexOf() - Returns the first position of the string if string is present. And if it does not it returns -1

console.log(str5.indexOf('D'))
console.log(str5.indexOf('Days'))
console.log(str5.indexOf('Java'))
console.log(str5.indexOf('Script'))

//lastIndexOf() - Returns the last position of the string if string is present and if string is not present then returns -1

console.log(str5.lastIndexOf('D'))
console.log(str5.lastIndexOf('Java'))
console.log(str5.lastIndexOf('t'))


//concat() - It takes two or more strings
let str8 = '30'
console.log(str8.concat("\tDays\t","OF\t","JavaScript"))

let country1 = 'Fin'
console.log(country1.concat('land'))

//startsWith() - Checks if a passed string is the first word of the main string.
str9 = "Hi I am Learning JavaScript."
console.log(str9.startsWith('Hi'))
console.log(str9.startsWith("Days"))
console.log(str9.startsWith("30"))


//endsWith() - Checks if a passed string is the last word of the main string.
console.log(str9.endsWith("JavaScript."))
console.log(str9.endsWith('Days'))

//search() - It takes the passed string and returns the the first match. Search value can be string or regular expression.

let string1 = "I am loving JavaScript and I am following the 30 Days of JavaScript. Right now, I am on Day 2."

//g means searching the whole text and i means case insensitive.

console.log(string1.search('loving'))
console.log(string1.search(/javascript/gi))


//match() - it takes the passed string or regular expression and returns the first match, if there is no match returns Null.

console.log(string1.match(/right/i))
console.log(string1.match('loving'))
console.log(string1.match(/JavaScript/gi))

// [^a-zA-Z ] - All special characters
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

regEx = /\+d/
console.log(string1.match(regEx))
console.log(string1.match(/\d+/g))


//repeat() - It takes a number as argument and it returns the repeated version of the string.

console.log(str6.repeat(10))

// Converting String to Int //parseInt() //Number() //Plus sign (+)

let num = '10'
let numInt = parseInt(num)
console.log(numInt)

let number2 = '20'
let numberInt = Number(number2)
console.log(numberInt)

let number3 = '30'
let number3Int = +number3
console.log(number3Int)


// Converting String to Float //parseFloat() //Number() //Plus sign (+)
let numberFloat = '9.81'
console.log(parseFloat(numberFloat))

