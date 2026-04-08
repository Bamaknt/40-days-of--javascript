








// Explain and Fix problem

const user = {
  name: "tapaScript",
// greet: () => {   Here, Arrow Fn don't have their own 'this'
  greet: function() {  // So, we shall use Regular Fn to fix the issue
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet()

// Or by Arrow Fn

const use = {
  name: "tapaScript",
  greet: function () {
    return () => `Hello, ${this.name}!`
  }
}

const greetFn = use.greet()
console.log(greetFn())




// Explain and Fix problem

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// const greetFn = obj.greet;
// greetFn();

obj.greet()  // We are in implicit biding case here





// Explain and Fix problem

const usr = {
  name: "Alex",
  greet: function () {
    const inner = () => {  // Shift from Regular to Arrow to reach scope parent as usr{}
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};


usr.greet()





// Constructor Fn with arguments

function Sports(name, number) {
  this.name = name,
  this.number = number
  this.play = function() {
    console.log(`${this.name} plays number ${this.number}`)
  }
}

const footBall = new Sports('Messi', 10)
const golf = new Sports('Tiger Wood', 1)

footBall.play()
golf.play()





// Attacching method to object

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2)
car1.describe.apply(car2)

const newFn = car1.describe.bind(car2)
newFn()





// Explain and Fix problem

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {  // Here Arrow Fn don't have their own 'this'
    console.log(this.name);
  },
};

person.sayHello();  // Output = Charlie
persn.sayHelloArrow();  // Output = empty screen 