// ------------------ Setting Variables ----------------------

import { getProduct } from './products.js'
import { listItems } from './productItemDisplay.js'

// category containers
const categoryContainers = document.getElementsByClassName("products-container")

// what each category should have as content in order
const categoryProductList = [
  [
    getProduct(0),
    getProduct(1),
  ],
  [
    getProduct(1),
    getProduct(1),
  ],
  [
    getProduct(0),
    getProduct(0),
  ],
]

//------------------- Displaying Items ----------------------

let i = 0
Array.from(categoryContainers).map((item) => {
  // handleCreatingObjects(item, categoryProductList, i)
  listItems(item.id, categoryProductList[i], null)

  i += 1
})
