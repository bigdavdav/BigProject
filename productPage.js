import { getCookieValue, setCookie } from "./cookieFunctions.js"
import { equipmentProducts, getProduct } from "./products.js"

// ------------------ Setting Variables ----------------------

// getting product data from query parameters
const searchParams = new URL(window.location.href).searchParams
const entries = new URLSearchParams(searchParams).entries()
const entriesArray = Array.from(entries)

const queryProductId = Number(entriesArray[0][1])
const product = getProduct(queryProductId)

// display image containers
const imageListItems = document.getElementsByClassName('image-list-item')
const mainDisplayImage = document.getElementById("main-display-image")

// display name and price
const itemName = product.name
const itemPrice = product.price
const itemNameElement = document.getElementById('item-name')
const itemPriceElement = document.getElementById('item-price-span')

// item amount control buttons and display
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const amountInput = document.getElementById("item-amount")
const addToCartButton = document.getElementById("add-to-cart-button")

// product information element
const productInformation = document.getElementById('product-information')

// --------------------- Functions ---------------------------

function handleChangingImage(targetImage) {
  const currentSelectedImage = document.getElementsByClassName("selected")[0]
  
  currentSelectedImage.classList.toggle("selected")
  targetImage.classList.toggle("selected")
}

function handleApplyingImage(targetImageTag) {
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

  // adding items to cookies
  console.log(cartList)
  setCookie("cartList", JSON.stringify(cartList), 365)
  window.location.replace("./addedToCart.html");
}

// ---------- Adding event listeners to buttons --------------

// // image list event listeners
// for ( let i = 0; i < imageList.length; i++ ) {
//   imageList[i].addEventListener("click", () => {
//     handleChangingImage(event.target.parentElement)
//     handleApplyingImage(event.target)
//   })
// }

// // item amount event listeners
// plusButton.addEventListener("click", () => {
//   amountInput.value = Number(amountInput.value) + 1 
// })

// minusButton.addEventListener("click", () => {
//   if (Number(amountInput.value) > 1) {
//     amountInput.value = Number(amountInput.value) - 1 
//   }
// })

// // add to cart button event listener
// addToCartButton.addEventListener("click", () => {
//   addToCart()
// })


// --------------------------------------------------

for ( let i = 0; i < imageListItems.length; i++ ) {
  let imageElement = document.createElement('img')
  imageElement.setAttribute('src', product.photos[i])

  imageListItems[i].appendChild(imageElement)
}

mainDisplayImage.setAttribute('src', product.photos[0])
itemNameElement.innerHTML = itemName
itemPriceElement.innerHTML = itemPrice

product.description.map((item) => {
  let divContent = item.content
  let mainDiv = document.createElement('div')
  mainDiv.setAttribute('id', item.divID)

  divContent.map((content) => {
    let mainElement = document.createElement(content.elementType)

    if ( content.elementType == 'ul' ) {
      let ulContent = content.listContent

      ulContent.map((listItem) => {
        let li = document.createElement('li')
        li.innerHTML = listItem

        mainElement.appendChild(li)
      })

      mainDiv.appendChild(mainElement)
    } else {
      mainElement.innerHTML = content.elementContent
      mainDiv.appendChild(mainElement)
    }
  })


  productInformation.appendChild(mainDiv)
})