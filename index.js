let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1)
  console.log(computerNumber)
}


function newGame(){
  window.location.reload()
}
function compareNumbers() {

  const userNumber = Number(document.getElementById("inputBox").value)

  userNumbers.push(" " + userNumber)

  document.getElementById("guesses").innerHTML = userNumbers;

  if (attempts < maxguesses) {
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML = "Seu numero esta alto"
      document.getElementById("inputBox").value = '';
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML = "Seu numero esta baixo"
      document.getElementById("inputBox").value = '';
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else {
      document.getElementById("textOutput").innerHTML = "ACERTOU!!!"
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    }
  } else {
    document.getElementById("textOutput").innerHTML = "Você perdeu!! tentativas: " + maxguesses;
    document.getElementById("inputBox").setAttribute("Readonly", "Readonly")

  }

}
