let allButtons = document.getElementById('colorful-buttons').querySelectorAll('button'); // select all buttons of container-4
let copyAllButtons = [];

// keep a copy of initial button colors classes
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
} 

// main function called on changing options
function buttonColorChange(yourOption) {
    console.log(yourOption);
    console.log(yourOption.value);

    let yourOptionValue = yourOption.value;

    if (yourOptionValue==='red') {
        buttonRed();
    }else if (yourOptionValue==='green') {
        buttonGreen();
    } else if (yourOptionValue==='reset') {
        buttonResetColors();
    } else if (yourOptionValue==='random') {
        buttonRandomColors();
    }
}

// this fn changes buttons color to red
function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

// changes color to green
function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonResetColors() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    let randomChoice = choices[Math.floor(Math.random()*4)];

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomChoice);
    }
}