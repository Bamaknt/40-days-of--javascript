
//Pyramid


let nr = 5

for (let i=1; i<=nr; i++) {
  let row = ''

  for (let j=0; j<0; j++) {
    row += '*'
  }

  console.log(row)
}



// Multiplcation table


let n = 3

for (let i=1; i<=10; i++)
  console.log(`${n} * ${i} = ${(n * i)}`)



//Summation odd numbers


let sum = 0

for (let i=1; i<=500; i++)
  if (i % 2 !== 0) {
    sum += i
    
  }
  console.log(sum)



// Skipping multiple of 3


  for (let i=1; i<=20; i++) {
    if (i % 3 === 0) continue
      
    console.log(i)
  }



// Reverse number


function reverseNum(num) {
  let reversed = num.toString().split('').reverse().join('')
  return Number(reversed)
}
console.log(reverseNum(6789))



//Understanding differences

// for loop

   for (let i=1; i<=5; i++) {
    console.log(i)
   }

   // while loop

   let j=1

   while(j<=5) {
    console.log(j)
    j++
   }

   // do while loop

   let i=1

   do {
    console.log(i)
    i++
   } while(i<=5)
    