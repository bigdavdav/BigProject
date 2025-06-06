// ------------------ Setting Variables ----------------------

const buttonList = document.getElementsByClassName("category-button")

// --------------------- Functions ---------------------------

function handleChangingFilter(targetButton) {
  const currentSelectedButton = document.getElementsByClassName("selected")[0]
  
  currentSelectedButton.classList.toggle("selected")
  targetButton.classList.toggle("selected")
}

function handleApplyingFilter(targetButton) {
  const productsList = document.getElementsByClassName("item-container")
  const buttonClass = targetButton.classList[1]
  
  for ( let i = 0; i < productsList.length; i++ ) {
    const productClass = productsList[i].classList

    if ( productClass.contains("hidden")  ) {
      productClass.toggle("hidden")
    }

    if ( !productClass.contains(buttonClass) && buttonClass != "all" ) {
      productClass.toggle("hidden")
    } 
  }
}

// ---------- Adding event listeners to buttons --------------

for ( let i = 0; i < buttonList.length; i++ ) {
  buttonList[i].addEventListener("click", () => {
    handleChangingFilter(event.target)
    handleApplyingFilter(event.target)
  })
}
