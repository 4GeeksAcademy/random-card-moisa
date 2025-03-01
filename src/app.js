import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
document.querySelector("#newcardBtn").addEventListener("click", generateCard)
  // generateCard ()
};

const generateCard = () => {
  const iconDiv = document.querySelector(".top")
  const iconEl =  document.querySelector(".bottom")
  let icon = ["♦", "♥", "♠", "♣"]
  let number = ["7", "9", "10", "J", "Q", "K", "A"]

  let iconIndex = Math.floor(Math.random() * icon.length)
  let numberIndex = Math.floor(Math.random() * number.length)
  
  let randomIcon = icon[iconIndex]
  let randomNumber = number[numberIndex]

  if(randomIcon == "♥") {
    iconDiv.style.color = "red"
  }

else if(randomIcon == "♦") {
   iconDiv.style.color = "red"
}


  else {
    iconDiv.style.color = "black"
  }

  if(randomIcon == "♥") {
    iconEl.style.color = "red"
  }

  else if (randomIcon == "♦") {
    iconEl.style.color = "red"
  }

  else {
    iconEl.style.color = "black"
  }
  




  iconDiv.innerHTML = randomIcon
  document.querySelector(".number").innerHTML = randomNumber
  iconEl.innerHTML = randomIcon
  
}


