let users = []

fetch("./users.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      users.push(element)
    });
  })

  
// ------------------ Setting Form Variables ----------------------

const logInForm = document.getElementById("form-container")
const signUpForm = document.getElementById("sign-up-form")
const userName = document.getElementById("user-name")
const userEmail = document.getElementById("user-email")
const userPassword = document.getElementById("password")
const dbUserCheck = document.getElementById("dbCheckMessage")
const submitButton = document.getElementById("submit-button")
  
// ---------------- Creating DB User Functions --------------------

function dbAddUser(name, email, password) {
  const userData = new Object({
    userID: (users.length) + 1,
    userName: name,
    userEmail: email,
    userPassword: password,
})

  console.log(userData)

  fetch('users.json', {
    method: 'PUT',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => processResponseObject(response))
    .then(console.log(response))
    .catch(error => console.log(error))

  event.preventDefault()
}

function dbLoginDetailValidation() {
  const emailInput = userEmail.value
  const passwordInput = userPassword.value
  let validity = false
  
  for ( i = 0; i < users.length; i++ ) {
    if ( emailInput == users[i].userEmail && passwordInput == users[i].userPassword ) {
      validity = true
    }
  }

  if ( validity == false ) {
    if ( dbUserCheck.classList.contains("hidden") == true ) {
      dbUserCheck.classList.toggle("hidden")
    }
  } else {
    window.location.href = "./home.html"
  }
}

// ---------------------- Event Listeners --------------------------

logInForm.addEventListener("submit", () => {
  event.preventDefault()

  dbLoginDetailValidation()
})

signUpForm.addEventListener("submit", () => {
  const userNameInput = userName.value
  const userEmailInput = userEmail.value
  const userPasswordInput = userPassword.value
  let valid = true

  for ( i = 0; i < users.length; i++ ) {
    if ( userEmailInput == users[i].userEmail || userNameInput == users[i].userName ) {
      if ( dbUserCheck.classList.contains("hidden") == true ) {
        dbUserCheck.classList.toggle("hidden")
      }
      valid = false
    } else [
      valid = true
    ]
  }

  if ( valid == true ) {
    dbAddUser(userNameInput, userEmailInput, userPasswordInput)
  } 

  event.preventDefault()
})