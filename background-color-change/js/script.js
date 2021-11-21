const button = document.querySelector('button')
const body = document.querySelector('body')

const backgroundColors = ['green', 'yellow', 'purple', 'red', 'pink', 'blue']

button.addEventListener('click', randomBackground)

function randomBackground(){
    //randomize index to pick color
    randomIndex = parseInt (Math.random()*backgroundColors.length)
    body.style.backgroundColor = backgroundColors[randomIndex]
    button.innerText = "Click me for next Color"
}