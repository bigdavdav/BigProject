// ------------------ Setting Variables ----------------------

const itemList = document.querySelector('main')

// ---------------------- Function ---------------------------

export function listItems(productListing, digital) {
  productListing.map((product) => {
    if ( product.digitalProduct == digital ) {
      let itemContainer = document.createElement('a')
      let itemImage = document.createElement('img')
      let itemName = document.createElement('h3')
    
      itemContainer.classList.add('item-container', `${product.type}`)
      itemContainer.setAttribute('href', `./productPage.html?product=${product.id}`)
    
      itemImage.classList.add('product-image')
      itemImage.setAttribute('src', product.photos[0])
    
      itemName.innerHTML = product.name
    
      itemContainer.appendChild(itemImage)
      itemContainer.appendChild(itemName)
      itemList.appendChild(itemContainer)
    }
  })

}