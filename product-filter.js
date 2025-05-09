// ------------------ Setting Variables ----------------------

const buttonList = document.getElementsByClassName("category-button")
const buttonListArray = []

for ( let i = 0; i < buttonList.length; i++ ) {
  buttonListArray.push(buttonList[i])
}

function changeFilter() {
  newFilter = event.target

  for( i = 0; i < buttonListArray; i++ ) {
    console.log(buttonListArray[i])
  }
}