let n = 3

for (let i=1; i<=10; i++)
  console.log(`${n} * ${i} = ${(n * i)}`)


let sum = 0

for (let i=1; i<=500; i++)
  if (i % 2 !== 0) {
    sum += i
    
  }
  console.log(sum)


  for (let i=1; i<=20; i++) {
    if (i % 3 === 0) continue
      
    console.log(i)
  }


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
    