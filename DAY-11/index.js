
// Output

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();  // counter now holds inner.fn returned to outer
counter();  // output = 1
counter();  // output = 2




// Output 

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());  // testClosure is called twice here

// first call returns fn() to testClosure()
// second call prints fn()... output = 1




// Create button dinamically

function dynamicButton() {
    let clickCount = 0

    document.getElementById('button').addEventListener('click', function() {
        clickCount++

        console.log(`Button clicked ${clickCount} times`)
    })
}

dynamicButtonButton()




// Function

function createMultiplier(multiplier) {
    return function(number) {
        return multiplier * number
    }
}

const double = createMultiplier(2)
console.log(double(5))




// Closure references an object

// The object remains in memory as long as the closure exists


// On reflexion
// Function factory

function factoryOfCounter() {
    let count = 0

    return {
        'increment': () => {
            count++
            console.log(count)
        },

        'decrement': () => {
            count--
            console.log(count)
        },

        'reset': () => {
            count = 0
            console.log(count)
        }
    }
}
const counter1 = factoryOfCounter()
counter1.increment()
counter1.increment()
counter1.decrement()
counter1.reset()

