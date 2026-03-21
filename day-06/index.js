// Convert celsius

function convertTemp(celsius) {
  console.log(`${celsius * 9 / 5 + 32} Fahrenheit`)
}
convertTemp(33)

// Max of 2

function findMax(num1, num2) {
  console.log(Math.max(num1, num2))
}
findMax(-7, -9)

// Check palindrome

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('')
  return str === reversed
}

console.log(isPalindrome('wow'))
console.log(isPalindrome('Hello'))

// Find factorial

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

console.log(factorial(5))

// Count vowels

function countVowels(str) {
  let count = 0
  let vowels = 'a,e,i,o,u'

  str = str.toLowerCase()

  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }  
  }

  return count
}

console.log(countVowels('reactive'))


// IIFE

(function() {
    console.log('Hello, Javascript!')
})()


// callback

function greet(name, callback) {
    console.log(`'Happy to meet you!' ${name}`)

    callback()
}

function travel() {
    console.log('Wish you a nice fly')

}
greet('Jordan', travel)


//Call stack

// Please find the diagrams link below...

https://lucid.app/lucidspark/42e186eb-3263-4632-8c39-312a6c99703a/view