
const buttons = document.getElementsByClassName('visible');

for (const button of buttons) {

    button.setAttribute('style', 'font-size:20px; font-weight:400; color:white;  text-align:center; background-color:slate; cursor: pointer; ')

    button.addEventListener('click', function () {
        const value = button.innerText;
        const display = document.getElementById('display');
        if (value == 'AC') {
            display.innerText = '';
        }
        else if (value == 'C') {
            display.innerText = display.innerText.slice(0, -1);
        }
        else if (value == '=') {

            if (display.innerText == '') {
                display.innerText = '';
            }
            else {
                display.innerText = eval(display.innerText);
            }
        }
        else if (value == '√') {
            if (display.innerText > 0 && typeof display.innerText != 'number') {

                display.innerText = parseFloat(Math.sqrt(display.innerText).toFixed(3));

            }
            else {

                display.innerText = "Error!"
                display.style.color = "red"
            }
        }
        else {
            display.innerText = display.innerText + button.innerText;
        }
    })
}
