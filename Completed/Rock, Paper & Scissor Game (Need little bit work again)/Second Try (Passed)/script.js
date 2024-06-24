


// Hiding 2nd, 3rd & 4th screens....
document.getElementById("options").style.visibility = "hidden";
document.getElementById("winScreen").style.visibility = "hidden";
document.getElementById("lossScreen").style.visibility = "hidden";


// Showing options after pressing start button
function start() {
    document.getElementById("startScn").style.visibility = "hidden";
    document.getElementById("options").style.visibility = "visible";
}

// Creating Functions for image for onclick & user selection...
let userSelection;
function stone() {
    if (computerSelection === 1) {
        alert("Draw");
    } else if (computerSelection === 2) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("winScreen").style.visibility = "visible";
        document.getElementById("winImg").src = "scissor.jpg";
    } else if (computerSelection === 3) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("lossScreen").style.visibility = "visible";
        document.getElementById("lossImg").src = "paper.jpg";

    }
}

function scissor() {
    if (computerSelection === 2) {
        alert("Draw");
    } else if (computerSelection === 3) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("winScreen").style.visibility = "visible";
        document.getElementById("winImg").src = "paper.jpg";
    } else if (computerSelection === 1) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("lossScreen").style.visibility = "visible";
        document.getElementById("lossImg").src = "stone.jpg";
    }
}

function paper() {
    if (computerSelection === 3) {
        alert("Draw");
    } else if (computerSelection === 1) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("winScreen").style.visibility = "visible";
        document.getElementById("winImg").src = "stone.jpg";
    } else if (computerSelection === 2) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("lossScreen").style.visibility = "visible";
        document.getElementById("lossImg").src = "scissor.jpg";
    }
}

// Creating functions for game...
let computerSelection = Math.floor((Math.random() * 3) + 1);

// Comparing both Selections.
