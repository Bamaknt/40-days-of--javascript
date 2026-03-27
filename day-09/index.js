
// TDZ

// Each console.log ends it's TDZ when accessing it's variable. 

{
    
    console.log(country)  

    console.log(area)
    
    console.log(city)


    let city = 'Abidjan'


    let country = 'Ivory Coast'


    let area = 'West Africa'


}




// Variable hoisting

// here a variable memory is created

speech()

const speech = function() {
    console.log('Give the introduction speech')
}




// Function hoisting

// here a function memory is created

take()


function take() {
    console.log('Take the cup')

    drink()
}

function drink() {
    console.log('and drink')
}
   