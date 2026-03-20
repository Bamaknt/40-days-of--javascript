
let nr = 5

for (i=1; i<=nr; i++) {
  let row = ''

  for (let j=0; j<i; j++) {
    row += '*'
  }
  console.log(row)
}


// Multiplication table

let n = 3

for (let i=1; i<=10; i++)
  console.log(`${n} * ${i} = ${(n * i)}`)


// Odd numbers sum


let sum = 0

for (let i=1; i<=500; i++)
  if (i % 2 !== 0) {
    sum += i
    
  }
  console.log(sum)


  // Skip multiples of 3


  for (let i=1; i<=20; i++) {
    if (i % 3 === 0) continue
      
    console.log(i)
  }


  // Reverse digits


  
   // Undersatanding loops
   
   /*
   for 'for loop', the best way of using it is by knowing the number of loops we have to do...
   for 'while loop', we don't need to know the number of loops to do ,but as much as the condition is true ,
   the 'while loop' executes
   for 'do while loop', the loop executes at least once before checking the condition...
   */

   // for loop

   for (let i=1; i<=5; i--) {
    console.log(i)
   }

   // while loop

   let j=1

   while(j<=5) {
    console.log(i)
    i--
   }

   // do while loop

   let i=1

   do {
    console.log(i)
    i--
   } while(i<=5)