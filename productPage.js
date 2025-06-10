import { getCookieValue, setCookie } from "./cookieFunctions.js"

// ------------------ Setting Variables ----------------------

// image list
const imageList = []

for ( let i = 0; i < document.getElementsByClassName("image-list-item").length; i++ ) {
  imageList.push(document.getElementsByClassName("image-list-item")[i].children[0])
}

console.log(imageList)

// item amount control buttons and display

const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const amountInput = document.getElementById("item-amount")
const addToCartButton = document.getElementById("add-to-cart-button")

const itemName = document.getElementById("item-name").innerHTML
const itemPrice = document.getElementById("item-price").innerHTML.replace("£", "").replace(",", "").replace(".", "")

// --------------------- Functions ---------------------------

function handleChangingImage(targetImage) {
  const currentSelectedImage = document.getElementsByClassName("selected")[0]
  
  currentSelectedImage.classList.toggle("selected")
  targetImage.classList.toggle("selected")
}

function handleApplyingImage(targetImageTag) {
  const mainDisplayImage = document.getElementById("main-display-image")
  const newImageURL = targetImageTag.getAttribute("src")
  
  mainDisplayImage.setAttribute("src", newImageURL)
}

function findingExistingProductListing(list, productName) {
  for ( let i = 0; i < list.length; i++ ) {
    if ( list[i].itemName == productName ) {
      return i
    }
  }

  return null
}

function addToCart(productName, productPrice, amountOfItemsToAdd) {
  // adding items to cart list
  let cartList = JSON.parse(getCookieValue("cartList"))
  const productExists = findingExistingProductListing(cartList, productName)

  if ( productExists != null ) {
    cartList[productExists].itemAmount = Number(cartList[productExists].itemAmount) + Number(amountOfItemsToAdd)
  } else {
    cartList.push({
      itemName: productName,
      itemPrice: productPrice,
      itemAmount: amountOfItemsToAdd,
    },)
  }

  // adding items to cookies
  console.log(cartList)
  setCookie("cartList", JSON.stringify(cartList), 365)
  window.location.replace("./orderPlaced.html");
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
plusButton.addEventListener("click", () => {
  amountInput.value = Number(amountInput.value) + 1 
})

minusButton.addEventListener("click", () => {
  if (Number(amountInput.value) > 1) {
    amountInput.value = Number(amountInput.value) - 1 
  }
})

// add to cart button event listener
addToCartButton.addEventListener("click", () => {
  addToCart(itemName, itemPrice, amountInput.value)
})