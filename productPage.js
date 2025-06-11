import { getCookieValue, setCookie } from "./cookieFunctions.js"
import { getProduct } from "./products.js"

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

function findingExistingProductListing(list, id) {
  for ( let i = 0; i < list.length; i++ ) {
    if ( list[i].itemID == id ) {
      return i
    }
  }

  return null
}

function addToCart(itemAmountToAdd, id) {
  // adding items to cart list
  let cartList = JSON.parse(getCookieValue("cartList"))
  const productExists = findingExistingProductListing(cartList, id)

  if ( productExists != null ) {
    const currentItemAmount = cartList[productExists].itemAmount
    cartList[productExists].itemAmount = currentItemAmount + itemAmountToAdd
  } else {
    cartList.push({
      itemID: id,
      itemAmount: itemAmountToAdd
    })
  }

  // adding items to cookies
  console.log(cartList)
  setCookie("cartList", JSON.stringify(cartList), 365)
  window.location.replace("./addedToCart.html");
}

// ---------- Adding event listeners to buttons --------------

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
  addToCart(Number(amountInput.value), product.id)
})

// ------------------ Applying images ------------------------

for ( let i = 0; i < imageListItems.length; i++ ) {
  let imageElement = document.createElement('img')
  imageElement.setAttribute('src', product.photos[i])

  imageListItems[i].appendChild(imageElement)
}

mainDisplayImage.setAttribute('src', product.photos[0])
itemNameElement.innerHTML = itemName
itemPriceElement.innerHTML = itemPrice

// ----------------- Adding description ---------------------

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