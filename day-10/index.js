
// Output 

// First line output = inner() = Bob
// Second line output = outer() = Alice




// Mistake


let total = 0;    // let total = 0 is initialisation for starting a Loop
                  // But here, a function is starting instead of a loop

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);




// Create function...


function outer() {
    
    let name = 'Martin'

    console.log(name)
    console.log(country)  // Unreachable variable from parent function

    function inner() {

        let city = 'London'
        let country = 'England'

        console.log(city)
    }
    inner()
}
outer()




// Loop inside a function


function scale() {
    for (let i=3; i<=7; i++) {
        console.log(i)

        let ask = 'What is it?'
           
    }
        
}
scale()

console.log(ask)    // Inside the loop, variable is unaccessible from outside




// Function trying to access another function's variable


function first() {

    let brand1 = 'Mercedes'
    console.log(brand1)

    console.log(brand3)    // fn(second) variable is unaccessible from fn(first)
}
first()

function second() {

    let brand2 = 'BMW'
    console.log(brand2)

    let brand3 = 'Toyota'
}
second()



// Output

console.log(a);   // Output will be a not initialized
let a = 10;



// Variable ccessibility

function showAge() {
    let age = 25;
    console.log(age);  // B.Only inside showAge
}

console.log(age);   // age will not be accessible here



// Output 

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();   // Output = Hi

// Because inner fn  has access to variables in the bloc



// Output

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();    // Output will be  inner 

// Because inner() executes the variable declared by fn inner()




// Output

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);   // Output will be -1  -2  -3
    };
}

const reduce = counter();
reduce();
reduce();    // reduce here is not a fonction






