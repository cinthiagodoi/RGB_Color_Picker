const redValue = document.getElementById('redValue')
const greenValue = document.getElementById('greenValue')
const blueValue = document.getElementById('blueValue')

window.addEventListener('load', init);

function init() {  
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.addEventListener('input', changeColor))
}

const changeColor = () => {
  const square = document.querySelector('#square ');
  const red = document.querySelector('#redInput');
  const green = document.querySelector('#greenInput');
  const blue= document.querySelector('#blueInput');
  
  redValue.value = red.value;
  greenValue.value = green.value;
  blueValue.value = blue.value
   
  square.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
}

