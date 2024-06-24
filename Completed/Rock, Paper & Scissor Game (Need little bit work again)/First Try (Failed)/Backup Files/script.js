document.getElementById("options").style.visibility = "hidden";
document.getElementsById("result").s

let computerNum = Math.floor((Math.random() * 3) + 1);
let computerTurn;
let playerNum;

let computerPic = document.getElementById("computerPic");
if (computerNum === 1) {
    computerPic.src = "stone.jpg";
}
else if (computerNum === 2) {
    computerPic.src = "scissor.jpg";
} else {
    computerPic.src = "paper.jpg";
}
computerPic.style.visibility = "hidden";

function start() {
    document.getElementById("startBtn").style.visibility = "hidden";
    document.getElementById("gameName").style.visibility = "hidden";
    document.getElementById("options").style.visibility = "visible";
}

function stone() {
    document.getElementById("options").style.visibility = "hidden";
}
function scissor() {
    document.getElementById("options").style.visibility = "hidden";
    playerTurn = "scissor";
}
function paper() {
    document.getElementById("options").style.visibility = "hidden";
    playerTurn = "paper";
}
