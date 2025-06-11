import { getCookieValue, setCookie, deleteCookie } from "./cookieFunctions.js"
import { getProduct } from "./products.js"

// ----------------- Creating Variables ------------------------

const cartList = JSON.parse(getCookieValue("cartList"))

//
//    Cart list layout
//
//    cartList = [{
//      itemId: 0,
//      itemAmount: 1
//     }]
//

const tableElement = document.querySelector("table")
const tableBody = document.querySelector("tbody")
const totalPriceCounter = document.getElementById("total-amount")
const purchaseButton = document.getElementById("purchase-button")
let totalPrice = 0

// ----------------- Creating Functions ------------------------

function deleteItemFromCart(id) {
  const newList = cartList.filter(
    (item) => {
      return item.itemID != id   
    },
    getProduct(id)
  )

  setCookie("cartList", JSON.stringify(newList), 365)
  location.reload()
}

function addItemsToTable(name, amount, price, tbody, id) {
  let tableRow = document.createElement("tr")

  let itemName = document.createElement("td")
  const itemNameText = document.createTextNode(name)
  itemName.appendChild(itemNameText)

  let itemAmount = document.createElement("td")
  const itemAmountText = document.createTextNode(amount)
  itemAmount.appendChild(itemAmountText)

  let itemPrice = document.createElement("td")
  const itemPriceText = document.createTextNode(Number(price) * Number(amount))
  itemPrice.appendChild(itemPriceText)

  let itemDelete = document.createElement("td")
  let deleteButton = document.createElement("button")
  let trashIcon = document.createElement("i")

  trashIcon.classList.add("ph", "ph-trash")
  deleteButton.setAttribute("name", id)
  deleteButton.classList.add("delete-button")
  deleteButton.appendChild(trashIcon)
  itemDelete.appendChild(deleteButton)

  tableRow.appendChild(itemName)
  tableRow.appendChild(itemAmount)
  tableRow.appendChild(itemPrice)
  tableRow.appendChild(itemDelete)
  tbody.appendChild(tableRow)

  totalPrice += (Number(price) * Number(amount))
}

function completePurchase() {
  deleteCookie("cartList")
  window.location.href = "./orderPlaced.html"
}

// ------------- Adding Items to Cart Table --------------------

if ( cartList.length == 0 ) {
  let emptyMessage = document.createElement("p")
  const emptyMessagetext = document.createTextNode("The cart is empty!")

  emptyMessage.classList.add("empty-message")
  emptyMessage.appendChild(emptyMessagetext)
  tableElement.after(emptyMessage)

  purchaseButton.disabled = true
} else {
  cartList.map((item) => {
    const product = getProduct(item.itemID)
    addItemsToTable(product.name, item.itemAmount, product.price, tableBody, item.itemID)
  })
}

// ----------------- Displaying Price --------------------------

totalPriceCounter.innerHTML = `${totalPrice}`

// ----------- Adding Event Listeners to Buttons ---------------

const deleteButtons = document.getElementsByClassName("delete-button")

Array.from(deleteButtons).map((button) => {
  button.addEventListener("click", () => {
    const IDToDelete = button.getAttribute('name')
    deleteItemFromCart(Number(IDToDelete))
  })
})

purchaseButton.addEventListener("click", () => {
  completePurchase()
})