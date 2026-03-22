
// odd or even


let number = 5
let result = ((number % 2) === 0) ? 'num is even' : 'num is odd'

console.log(number, result)




// driving license


let age = 15

let result1 = (age >= 18) ? 'You are eligible for a driving license' : 'You are too young for driving'

console.log(age, result1)




//bonus calculate


let mounthlySalary = 12.300
let annualSalary = (mounthlySalary * 12)
let ctc = ((mounthlySalary * 12) + (annualSalary * 0.12))

console.log(ctc)

/*
let salr = 100000
anlsalr = salr * 10%
console.log(anlsalr)
*/



// traffic light


let color = 'Red Light'
color = 'Green Light'

let result3 = ('Green Light' || 'Red Light') ? 'GO' : 'STOP'

console.log(result3)




//BILL


let units = 10
dailyCost = units * 150
mounthlyCost = dailyCost * 30
annualCost = (mounthlyCost * 12)
annualPayment = annualCost - (annualCost * 0.2)

console.log('AnnualBill', annualPayment)



// Leap Year

// LeapYear is divisible by 4
// except years divisible by 100 are not leapYears
// but years divisible by 400 are leapYears

let year = 2026

let result4 = (year % 4 === 0 && year % 400 === 0) ? 'leapYear' : 'commonYear'

console.log(year, result4)




// Max number

/*
if (p > q && q > r) {
  return p
} else if (q > p && p > r) {
  return q
} else {
  return r
}
*/

let p = 9
q = 4
r = 7

let max = Math.max(p, q, r)
console.log(max)




//Bitwise

// shifting left once ( n * 2 ) is like multiplying by 2


let count = 5
result = count << 1

console.log(result)