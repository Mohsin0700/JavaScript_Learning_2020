// Bismillah...
// let scn1 = document.getElementById('scn1');
// let scn2 = document.getElementById('scn2');
// let val1 = 0;
// let val2 = 0;
// let result;

// const nums = (n) => {
//     scn2.innerHTML += n;
// }

// const reset = () => {
//     document.getElementById('scn1').innerHTML = '';
//     document.getElementById('scn2').innerHTML = '';
// }

// const sum = () => {
//     let sVal1 = Number(document.getElementById('scn2').innerHTML);
//     document.getElementById("scn1").innerHTML = `${sVal1} +`    
    
    
    
    
    
    
    
    
    
    // val1 = Number(document.getElementById("scn2").innerHTML);
    // scn1.innerHTML = `${val1}+`;
    // scn2.innerHTML = '';
// }










let screen = document.getElementById('scn2');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            scn.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
















