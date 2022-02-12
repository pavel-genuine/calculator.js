
const visible = document.getElementsByClassName('visiible')

for (const item of visible) {
    item.addEventListener('Click', function () {

        const display = document.getElementById('display')
        display.value = display.value + item.innerText

    })

}