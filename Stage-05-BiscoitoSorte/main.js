const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnBiscuit = document.querySelector("#btnBiscuit")
const btnAgain = document.querySelector("#btnAgain")

const luckMessages = ["A vida trará coisas boas se tiver paciência.", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "Defeitos e virtudes são apenas dois lados da mesma moeda."]

const randomElement = luckMessages[Math.floor(Math.random() * luckMessages.length)]

function handleTryClick(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  printLuck()
}

function printLuck(){
  screen2.querySelector('span').innerText = randomElement
}

btnBiscuit.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', function(){
  window.location.reload(true)
})