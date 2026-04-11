
// Output


try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);  // An error occurred: ReferenceError
}





// Process Payment


function processPayment(amount, balance) {
  try {
    if (amount < 0) {
      throw new Error('Amount is negative')
    }
    if (amount > balance) {
      throw new Error('amount exceeds balance')
    }
    if (amount < balance) {
      console.log('Payment successfull !!!')
    }

  } catch (error) {
      console.error('Payment error:', error.message)
  }


}
processPayment(300, 100)






// Custom Errors


// UserError

function UserError(message) {
  this.name = 'UserError'
  this.message = message
}

function userValidate(account) {
  if (!account) {
    throw new UserError('Please create your account')
  }
  return 'You are Welcome!'  
}

try {
  const message = userValidate(a)
  console.log(message)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}


// PaymentError

function PaymentError(message) {
  this.name = 'PaymentError'
  this.message = message
}

function PaymentValidate(amount, balance) {
  if (amount > balance) {
    throw new PaymentError('Payment Fail! Check balance')
  }
  return 'Payment successfull !!!'
}

try {
  const message = PaymentValidate(550, 1000)
  console.log(message)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}



// ServerError

function ServerError(message) {
  this.name = 'ServerError'
  this.message = message
}

function serverValidate(access) {
  if (!access) {
    throw new ServerError('Server not available, try later')
  }
  return 'Welcome to the e-shop'
}

try {
  const message = serverValidate(a)
  console.log(message)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}



// EmailError

function EmailError(message) {
  this.name = 'EmailError'
  this.message = message
}

function emailValidate(emadrs) {
  if (!emadrs) {
    throw new EmailError('Please enter a valid email address')
  }
  return 'Valid email address'
}

try {
  const message = emailValidate()
  console.log(message)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}







// Constructor Fn - Form Validation

function ValidationError(message) {
  this.name = 'ValidationError'
  this.message = message
}

function validateUser(username, age) {
  if (username === '') {
    throw new ValidationError('Username cannot be empty')
  }
  if (age < 0) {
    throw new ValidationError('Age must be a positive number')
  }
  return 'User is valid'
}

try {
  const message = validateUser('Martin', 20)
  console.log(message)
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}







// Fn ReadFile


function readFile(filePath) {
  try {
    if (!filePath) {
      throw new Error('File not found')
    }
  } catch (error) {
      console.error('Read error', error.message)
  }
}
readFile()







// Purpose of throwin JS

// It creates a new Error manually






// finally block in try...catch

// Stops the execution of the script