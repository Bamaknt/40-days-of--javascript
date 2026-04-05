 
// Output


const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // Output = Not provided
// this is nullish coalescing, providing default value when something is null or undefined




// Frozen object

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // frozen object keeps it's initial variables, properties 
// and values always unchanged




// Extract properties using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company, address} = person
console.log(person)




// Student management system

const student = {
    name: 'Martin',
    age: 28,
    grades: {
        A: 100,
        B: 80,
        C: 50
    },
    averageGrade() {
        if (grades === 100) {
            console.log(`AverageGrade ${grades}`)
        } else if (grades === 80) {
            console.log(`AverageGrade ${grades}`)
        } else if (grades === 50) {
            console.log(`AverageGrade ${grades}`)
        } else {
            console.log('You FAIL!, please try again')
        }
    }
    
}
student.averageGrade()



// Books availability

let book = {
   Biology: 'Bio',
   Chemistry: 'Chem',
   Physics: 'Phy',
   Deutsch: 'Deu',
   Mechanics: 'Mec',


  isAvailable(book) {
    return this[book] !== undefined
  }

}
console.log(book.isAvailable('Physics'))




// Object.keys() and Objects.entries()

// Object.keys() displays the list of all properties of the object

const user1 = {
    rank: 7,
    id: 123,
    alias: 'Tiger'
}

console.log(Object.keys(user1))

// Object.entries() displays the list of all properties with their values

console.log(Object.entries(user1))




// Checking object's properties

// We use the in operator

const meals= {
    'Pepper Soup': 12,
    'Fried Chicken': 12,
    'Cow meat': 16,
    'Hot Dog': 25
}

console.log('Fried Chicken' in meals)




//Output

const perso = { name: "John" };
const newPerso = perso;
newPerso.name = "Doe";
console.log(perso.name); // Output will be Doe because of object reference change




// Deeply copy best way

// The best way to use deeply copy is the use of structuredClone

const user2 = {
  firsName: 'Alice',
  settings: { theme: "dark" },
  tags: ["admin", "editor"]
};


const clone = structuredClone(user2)

clone.firstName = 'Martin'
clone.settings.theme = 'gray'

console.log(user2.firsName)
console.log(user2.settings.theme)





// Object destructuring printing values

const users = [
  {
      'nam': 'Alex',
      'adress': '15th Park Avenue',
      'age': 43
  },
  {
      'nam': 'Bob',
      'adress': 'Canada',
      'age': 53
  },
  {
      'nam': 'Carl',
      'adress': 'Bangalore',
      'age': 26
  }
];

for (let {nam, adress, age} of users) {
  console.log(nam, adress, age)
}


