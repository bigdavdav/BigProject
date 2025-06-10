export function getCookieValue(name) {
  const decodedCookies = decodeURIComponent(document.cookie)
  const decodedCookiesArray = decodedCookies.split(';')
  let result = null

  decodedCookiesArray.forEach((cookie) => {
    if ( cookie.replace(' ', '').indexOf(name) == 0 ) {
      result = cookie.replace(' ', '').substring(name.length + 1)
    }
  })

  return result
}

export function setCookie(name, value, daysToDeletion) {
  let expiryDate = (new Date())

  // (current date) + (date in a year in milliseconds)
  expiryDate.setTime(expiryDate.getTime() + (daysToDeletion * 24 * 60 * 60 * 1000))
  const formattedExpiryDate = "expires=" + expiryDate.toUTCString()
  document.cookie = `${name}=${value}; ${formattedExpiryDate}`
}

export function deleteCookie(name) {
  setCookie(name, null, null)
}