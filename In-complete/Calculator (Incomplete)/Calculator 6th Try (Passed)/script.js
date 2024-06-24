// Defining Important variables.
let screen = document.getElementById('output');




// On/Off Button
let onOf = 0;

const on_of = () => {
   if (onOf === 0) {
    screen.setAttribute('placeholder', '0');
    onOf++;
   } else if (onOf === 1) {
    screen.removeAttribute('placeholder');
    screen.value = '';
    onOf = 0;
   }
}


// To Write Numbers on Screen
const getNum = num => {
    screen.value += num;
}

const getRes = () => {
    screen.value = eval(screen.value);
}

// Clear All Button
const aC = () => {
    screen.value = '';
}

// Clear One Button
const cL = () => {
    screen.value = screen.value.slice(0, -1);
}