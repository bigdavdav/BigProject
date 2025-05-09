// ---------------------- Fetching users --------------------------

let users = []

fetch('./users.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      users.push(element)
    });
  })

  
// ------------------ Setting Form Variables ----------------------
  
const submitButton = document.getElementById('submit-button')
  
// -------------------- Creating Validation -----------------------
console.log(users)
  
function formValidation(event) {
  const userEmail = document.getElementById('user-email').value
  const userPassword = document.getElementById('password').value
    
  for ( i = 0; i < users.length; i++ ) {
    if ( userEmail != users[i].userEmail ) {
      console.log("L")
    } else if ( userPassword != users[i].userPassword ) {
      console.log("L")
    } else {
      console.log("W")
      return("yay")
    }
  }

  event.preventDefault()
}

//setcustomvalidity



submitButton.addEventListener('click', formValidation)