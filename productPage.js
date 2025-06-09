// ------------------ Setting Variables ----------------------

// image list
const imageList = document.getElementsByClassName("image-list-item")

// item amount control buttons and display

const plusButton = document.getElementById('plus-button')
const minusButton = document.getElementById('minus-button')
const amountInput = document.getElementById('item-amount')
const addToCartButton = document.getElementById('add-to-cart-button')

// --------------------- Functions ---------------------------

function handleChangingImage(targetImage) {
  const currentSelectedImage = document.getElementsByClassName("selected")[0]
  
  currentSelectedImage.classList.toggle("selected")
  targetImage.classList.toggle("selected")
}

function handleApplyingImage(targetImageTag) {
  const mainDisplayImage = document.getElementById("main-display-image")
  const newImageURL = targetImageTag.getAttribute('src')
  
  mainDisplayImage.setAttribute('src', newImageURL)
}

// ---------- Adding event listeners to buttons --------------

// image list event listeners
for ( let i = 0; i < imageList.length; i++ ) {
  imageList[i].addEventListener("click", () => {
    handleChangingImage(event.target.parentElement)
    handleApplyingImage(event.target)
  })
}

// item amount event listeners
plusButton.addEventListener('click', () => {
  amountInput.value = Number(amountInput.value) + 1 
})

minusButton.addEventListener('click', () => {
  if (Number(amountInput.value) > 0) {
    amountInput.value = Number(amountInput.value) - 1 
  }
})

// add to cart button event listener
addToCartButton.addEventListener('click', () => {
  const itemsInCart = getCookie('itemsInCart')
  setCookie('itemsInCart', Number(itemsInCart) + 1)

  console.log(getCookie('itemsInCart'))
})