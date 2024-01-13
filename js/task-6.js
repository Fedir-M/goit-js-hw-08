const input = document.querySelector(".js-input-task-6");
const btnCreate = document.querySelector(".btnCreate");
const btnDestroy = document.querySelector(".btnDestroy");
const elementsBox = document.querySelector('#boxes');



btnCreate.addEventListener("click", collectionCreation);
btnDestroy.addEventListener("click", destroyElements);

function collectionCreation () {
  const amountElements = Number(input.value);

  if (amountElements < 1 || amountElements > 100) {
    input.value = ''
    return
  }
  
  elementsBox.innerHTML = "";
  elementsBox.append(...createBoxes(amountElements));
  input.value = ''
}

function createBoxes(amount){
  const elementsList = [];

  let elWidth = 30;
  let elHeight = 30;

  for (let i = 1; i <= amount; i++) {
    const newEl = document.createElement('div')

    
    newEl.style.width = `${elWidth}px`
    newEl.style.height = `${elHeight}px`
    newEl.style.backgroundColor = getRandomHexColor()

    elementsList.push(newEl)

    elWidth += 10
    elHeight += 10
  }
  
  return elementsList
}

// Після натискання btnDestroy колекція елементів очищається.
function destroyElements() {
  elementsBox.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}