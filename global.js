import { getCookieValue, setCookie } from "./cookieFunctions.js";

// making a cart list if there isn't one
if ( getCookieValue("cartList") == null ) {
  setCookie('cartList', "[]", 365)
}

// making the cart counter equal to 0 if there are no items registered
if ( getCookieValue("cartItems") == null ) {
  setCookie('cartItems', "0", 365)
}

// getting the amount of items on the cart
const cartList = JSON.parse(getCookieValue("cartList"))
let totalAmountOfitems = 0

if ( cartList.length != 0 ) {
  for ( let i = 0; i < cartList.length; i++ ) {
    totalAmountOfitems += Number(cartList[i].itemAmount)
  }
}

setCookie("cartItems", totalAmountOfitems, 365)

// displaying the amount of items on the cart

const cartButtonCounter = document.getElementById("cart").querySelector("span")

cartButtonCounter.innerHTML = `${getCookieValue("cartItems")}`