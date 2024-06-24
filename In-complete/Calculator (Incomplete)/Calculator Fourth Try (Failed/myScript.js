// // Number input on main screen.
// function getNumber(number) {
//     let output = document.getElementById('output');
//     return output.value += number;
// }

// // AC button
// function reset() {
//     document.getElementById("output").value = "";
// }

// //Single C button.
// function delOne() {
//     let memory = document.getElementById("output").value;
//     let removeOneValue = memory.slice(0, -1)
//     return output.value = removeOneValue;
// }


var scr = document.querySelector("#screen");
var numpad = document.querySelectorAll("nbtn");

for (item of numpad){
item.addEventlistener("click" , (e)=>{
    numpadtext = e.target.innerText
    if (numpad === "x") {
        numpadtext = "*"
    }
    scr.value += numpadtext;
})
}









































