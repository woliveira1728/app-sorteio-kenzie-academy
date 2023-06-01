const raffleBtn = document.querySelector('.raffleButton')
const textarea = document.querySelector('textarea')
const resultTag = document.querySelector('.result p')
const resultPopUp = document.querySelector('.result')
const closeBtn = document.querySelector('.close')

function formGetData(){
    const fieldValue = textarea.value
    const listNames = fieldValue.split(",")
    const arraySize = listNames.length
    const namePosition = genRandomNumber(arraySize)
    const name = listNames[namePosition]
    showResult(name)

    textarea.value = ""
}

raffleBtn.addEventListener("click", formGetData)

function genRandomNumber(arraySize){
    return Math.floor(Math.random() * (arraySize - 0) + 0)
}

function showResult(name){
    resultTag.innerText = `Resultado: ${name}`
    resultPopUp.classList.add("showResult")
}

function closePopUp(){
    resultPopUp.classList.remove("showResult")
}

closeBtn.addEventListener("click", closePopUp)