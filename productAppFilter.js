// ------------------ Setting Variables ----------------------

const buttonList = document.getElementsByClassName("category-button")

// --------------------- Functions ---------------------------

function handleChangingFilter(targetButton) {
  const currentSelectedButton = document.getElementsByClassName("selected")[0]
  
  currentSelectedButton.classList.toggle("selected")
  targetButton.classList.toggle("selected")
}

function findingClassFilterFromButton(classList) {
  for ( i = 0;  i < classList.length; i++ ) {
    if ( classList[i] != "category-button" && classList[i] != "selected" ) {
      return classList[i]
    } else if ( typeof(classList[i] != "category-button" && classList[i] != "selected") != "stringzs" ) {
      return "all"
    }
  }
}

function handleApplyingFilter(targetButton) {
  const productsList = document.getElementsByClassName("item-container")
  const buttonClass = findingClassFilterFromButton(targetButton.classList)
  
  console.log(buttonClass)
  
  for ( let i = 0; i < productsList.length; i++ ) {
    console.log(productsList[i].classList)
  }
}

// ---------- Adding event listeners to buttons --------------

for ( let i = 0; i < buttonList.length; i++ ) {
  buttonList[i].addEventListener("click", () => {
    handleChangingFilter(event.target)
    handleApplyingFilter(event.target)
  })
}
