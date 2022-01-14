// function display(val){
//   document.getElementById("result").value += val;
// }
//
// function solve() {
//   let x = document.getElementById("result").value
//   let y = eval(x);
//   document.getElementById("result").value = y
// }
//
// function clearScreen() {
//   document.getElementById("result").value = ""
// }

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
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
