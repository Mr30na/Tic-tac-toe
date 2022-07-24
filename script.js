let oTurn = true;
let buttons = document.querySelectorAll(".buttons");
let refreshButton = document.querySelector("#refresh");
let turn = document.querySelector("#turndisplayer");
turndisplay();
buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (oTurn == true && item.textContent == "") {
      item.textContent = "O";
      item.classList.remove("x");
      item.classList.add("o");
      oTurn = false;
      turndisplay();
      checkWinner();
    } else if (oTurn == false && item.textContent == "") {
      item.textContent = "X";
      item.classList.remove("o");
      item.classList.add("x");
      oTurn = true;
      turndisplay();
      checkWinner();
    } 
  });
});
refreshButton.addEventListener("click", function () {
  reStart(buttons);
});
function checkWinner() {
  //identify winner by checking rows
  if (buttons[0].textContent == buttons[1].textContent && buttons[1].textContent == buttons[2].textContent && buttons[2].textContent != "") {
    gameover(buttons[0].textContent);
  }
  else if(buttons[3].textContent == buttons[4].textContent && buttons[4].textContent == buttons[5].textContent && buttons[5].textContent != ""){
    gameover(buttons[3].textContent);
  }
  else if(buttons[6].textContent == buttons[7].textContent && buttons[7].textContent == buttons[8].textContent && buttons[8].textContent != ""){
    gameover(buttons[6].textContent);
  }
  //identify winner by checking columns
  else if(buttons[0].textContent == buttons[3].textContent && buttons[3].textContent == buttons[6].textContent && buttons[6].textContent != ""){
    gameover(buttons[0].textContent);
  }
  else if(buttons[1].textContent == buttons[4].textContent && buttons[4].textContent == buttons[7].textContent && buttons[7].textContent != ""){
    gameover(buttons[1].textContent);
  }
  else if(buttons[2].textContent == buttons[5].textContent && buttons[5].textContent == buttons[8].textContent && buttons[8].textContent != ""){
    gameover(buttons[2].textContent);
  }
  //diagonally check
  else if(buttons[0].textContent == buttons[4].textContent && buttons[4].textContent == buttons[8].textContent && buttons[8].textContent != ""){
    gameover(buttons[0].textContent);
  }
  else if(buttons[2].textContent == buttons[4].textContent && buttons[4].textContent == buttons[6].textContent && buttons[6].textContent != ""){
    gameover(buttons[2].textContent);
  }
  else if(buttons[0].textContent != "" && buttons[1].textContent != "" && buttons[2].textContent != ""&&buttons[3].textContent != ""&&buttons[4].textContent != ""&&buttons[5].textContent != ""&&buttons[6].textContent != ""&&buttons[7].textContent != ""&&buttons[8].textContent != "" ){
    gameover("draw");
  }
 

}
function reStart(Arr){
    Arr.forEach((item) => {
    oTurn = true;
    item.textContent = "";
    item.classList.remove("o");
    item.classList.remove("x");
  });
  turndisplay();
}
function turndisplay() {
  if (oTurn == true) {
    turn.classList.remove("x");
    turn.classList.add("o");
    turn.textContent = "O";
  }
  else{
    turn.classList.remove("o");
    turn.classList.add("x");
    turn.textContent = "X";
  }
}
function gameover(result) {
  let wrapper = document.querySelector(".popup-wrapper");
  let box = document.querySelector(".popup");
  let restart = document.querySelector(".popup-close");
function displaypopup(){
  wrapper.classList.add("show")
box.classList.add("show")
restart.addEventListener("click",()=>{
    wrapper.classList.remove("show");
    box.classList.remove("show");
    reStart(buttons);
})
}
let message = document.querySelector(".message");
if(result == "O"){
  message.textContent = result + " " + "won!";
  message.classList.remove("x");
  message.classList.add("o");
  displaypopup();

}
else if(result == "X"){
  message.textContent = result + " " + "won!";
  message.classList.remove("o");
  message.classList.add("x")
  displaypopup();
}
else{
  message.classList.remove("x");
  message.classList.remove("o");
  message.textContent = "It's tied!";
 displaypopup();
}

  
}