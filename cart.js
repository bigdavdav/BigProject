import { getCookieValue, setCookie } from './cookieFunctions.js'

// ----------------- Creating Variables ------------------------

const cartList = JSON.parse(getCookieValue("cartList"))
console.log(cartList)

//
//    cartList = [{
//      itemName: "name",
//      itemPrice: 01234,
//      itemAmount: 1
//     }]
//

const tableBody = document.querySelector("tbody")
const totalPriceCounter = document.getElementById("total-amount")
const purchaseButton = document.getElementById("purchase-button")
let totalPrice = 0

// ----------------- Creating Functions ------------------------

function addItemsToTable(name, amount, price, tbody) {
  let tableRow = document.createElement('tr')

  let itemName = document.createElement("td")
  const itemNameText = document.createTextNode(name)
  itemName.appendChild(itemNameText)

  let itemAmount = document.createElement("td")
  const itemAmountText = document.createTextNode(amount)
  itemAmount.appendChild(itemAmountText)

  let itemPrice = document.createElement("td")
  const itemPriceText = document.createTextNode(Number(price) * Number(amount))
  itemPrice.appendChild(itemPriceText)

  tableRow.appendChild(itemName)
  tableRow.appendChild(itemAmount)
  tableRow.appendChild(itemPrice)
  tbody.appendChild(tableRow)

  totalPrice += (Number(price) * Number(amount))
}

// ------------- Adding Items to Cart Table --------------------

if ( cartList.length == 0 ) {
  let emptyMessage = document.createElement('p')
  const emptyMessagetext = document.createTextNode('The cart is empty!')

  emptyMessage.classList.add("empty-message")
  emptyMessage.appendChild(emptyMessagetext)
  table.after(emptyMessage)
} else {
  cartList.map((item) => {
    addItemsToTable(item.itemName, item.itemAmount, item.itemPrice, tableBody)
  })
}

totalPriceCounter.innerHTML = `${totalPrice}`
