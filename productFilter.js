// ------------------ Setting Variables ----------------------

const buttonList = document.getElementsByClassName("category-button")

// --------------------- Functions ---------------------------

function handleChangingCategories(targetButton) {
  const currentSelectedButton = document.getElementsByClassName("selected")[0]
  
  currentSelectedButton.classList.toggle("selected")
  targetButton.classList.toggle("selected")
}

// ---------- Adding event listeners to buttons --------------

for ( let i = 0; i < buttonList.length; i++ ) {
  buttonList[i].addEventListener("click", () => {
    handleChangingCategories(event.target)
  })
}
