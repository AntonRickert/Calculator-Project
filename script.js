
let button = document.getElementsByClassName('button');
let display = document.getElementById('displayValue');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        console.log(button[i].innerHTML);
        display.innerHTML = button[i].innerHTML;
    });
}