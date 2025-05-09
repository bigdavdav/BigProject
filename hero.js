// --------------------------- Variables -------------------------------

const heroImages = document.getElementsByClassName("hero-image-container")
const amountOfImages = heroImages.length
const heroImagesArray = []

let i = 0 // place in the array when looping it

const leftArrow = document.getElementById("left-hero-button")
const rightArrow = document.getElementById("right-hero-button")

for ( let i = 0; i < amountOfImages; i++ ) {
  heroImagesArray.push(heroImages[i])
}

// --------------------------- Functions -------------------------------

function cycleArray() {
  if ( i == (amountOfImages - 1 ) ) {
    i = 0
  } else {
    i++
  }
  
  imageSwitchFowards()
}

function imageSwitchFowards() {
  heroImagesArray[i].classList.toggle("hidden")

  if ( i == 0 ) {
    heroImagesArray[amountOfImages - 1].classList.toggle("hidden")
  } else {
    heroImagesArray[i - 1].classList.toggle("hidden")
  }
}

function imageSwitchBackwards() {
  heroImagesArray[i].classList.toggle("hidden")

  if ( i == amountOfImages - 1 ) {
    heroImagesArray[0].classList.toggle("hidden")
  } else {
    heroImagesArray[i + 1].classList.toggle("hidden")
  }
}
// ------------ Creating interval for image switching -----------------

const interval = setInterval(cycleArray, 2000)

// ---------------- Adding function to the buttons --------------------

rightArrow.addEventListener("click", () => {
  if ( i == (amountOfImages - 1 ) ) {
    i = 0
  } else {
    i++
  }

  imageSwitchFowards()
})

leftArrow.addEventListener("click", () => {
  if ( i == 0 ) {
    i = (amountOfImages - 1 )
  } else {
    i--
  }

  imageSwitchBackwards()
})