// output: It's a normal day.
// because Monday is different than monday




// ATM System

let amount = 100

let display = (amount % 100 === 0) ? 'Withdrawal successful' : 'Invalid amount'

console.log(display)



//Calculator

let a = 10
let b = 2
let calculator = 'divide'

switch(calculator) {
  case 'add':
    console.log(a + b)
    break
  case 'substract':
    console.log(a - b)
    break
  case 'divide':
    console.log(a / b)
    break
  case 'remainder':
    console.log(a % b)
    break   
}



// Movie ticket

let age = 34

if (age < 18) {
    console.log('Pay $3')
} else if (age >= 18 && age <= 60) {
    console.log('Pay $10')
} else if (age > 60) {
    console.log('Pay $8')
}



// Horoscope sign 

let mounth = 'August'

switch(mounth) {
    case 'March':
    case 'April':
        console.log('Aries')
        break
    case 'May':
    case 'June':
        console.log('Taurus')
        break
    case 'July':
    case 'August':
        console.log('Lion')
        break
    case 'September':
    case 'October':
        console.log('Gemini')
        break
    default:
        console.log('Sorry')
}



// Triangle

let sides = 'All different'

switch(sides) {
    case 'Equal':
        console.log('Equilqteral')
        break
    case 'Two sides equal':
        console.log('Isoceles')
        break
    case 'All different':
        console.log('Scalene')
}