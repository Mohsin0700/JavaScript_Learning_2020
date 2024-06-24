document.getElementById("options").style.visibility = "hidden";
document.getElementById("winV").style.visibility = "hidden";
document.getElementById("lossPu").style.visibility = "hidden";
document.getElementById("dLine").style.visibility = "hidden";
document.getElementById("fLine").style.visibility = "hidden";
document.getElementById("winR").style.visibility = "hidden";
document.getElementById("lossR").style.visibility = "hidden";
document.getElementById("lossPc").style.visibility = "hidden";
document.getElementById("winPc").style.visibility = "hidden";






// *******First Screen Functions**********//

function start() {
    document.getElementById("startScn").style.visibility = "hidden";
    document.getElementById("options").style.visibility = "visible";
}

//******Computer Output***********//

let pcNum = Math.floor((Math.random() * 3) + 1);


let pcWinPic = document.getElementById("winPc");
if (pcNum === 1) {
    pcWinPic.src = "stone.jpg";
}
else if (pcNum === 2) {
    pcWinPic.src = "scissor.jpg";
}
else if (pcNum === 3) {
    pcWinPic.src = "paper.jpg"
}

//********Player Input ***********//


function stone() {
    playerNum = 1;
    document.getElementById("options").style.visibility = "hidden";
    if (playerNum === 1 && pcNum === 2 || playerNum === 2 && pcNum ===3 || playerNum === 3 && pcNum === 1) {
        document.getElementById("winV").style.visibility = "visible";
        document.getElementById("winR").style.visibility = "visible";
        document.getElementById("dLine").style.visibility = "visible";
        document.getElementById("winPc").style.visibility = "visible";
        document.getElementById("winPic").src = pcPic;
    } else {
        document.getElementById()
    }
}
function scissor() {
    playerNum = 2;
}
function paper() {
    playerNum = 3;
    console.log(playerNum);
}
