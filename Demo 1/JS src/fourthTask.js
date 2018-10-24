var newArray = [];
var quantity = document.querySelector('.quantity');
var sqrtNumber = document.querySelector('.squareNumber');
var resultFieldT6 = document.querySelector('.resultFieldT6');

var btnResultT6 = document.querySelector('.resultT6');
if(btnResultT6){
  btnResultT6.addEventListener('click', getLine);
}

function validateLine(value) {
  if(value <= 0 || value === '' || isNaN(value)){
    return false
  }
  return true
}

function getLine() {
  if(!validateLine(quantity.value) || !validateLine(sqrtNumber.value)){
    resultFieldT6.innerHTML = 'Sorry, value can\'t be empty or have invalid value';
    return false
  }

  var first = Math.round(Math.sqrt(sqrtNumber.value));
  for (var i = first; i < first + Number(quantity.value); i++) {
    newArray.push(i);
  }
  resultFieldT6.innerHTML = newArray;
}


