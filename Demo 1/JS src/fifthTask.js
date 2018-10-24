var fiboNumbers = [1,1]
var inpQuantityT7 = document.querySelector('.inpQuantityT7');
var showResultT7 = document.querySelector('.showResultT7');
var resultFieldT7 = document.querySelector('.resultFieldT7');

if(showResultT7){
  showResultT7.addEventListener('click', showFibonacci);
}

function validateFibo(value){
  if(value <= 0 || value === '' || isNaN(value)){
      return false
  }
  return true
}

function showFibonacci(){
  if(!validateFibo(inpQuantityT7.value)){
    resultFieldT7.innerHTML = 'Sorry, quantity value can\'t be empty or have invalid value';
    return false
  }

  for(var i = 0; i < inpQuantityT7.value-2; i++){
    fiboNumbers.push(fiboNumbers[i] + fiboNumbers[i + 1]);
  }
  
  inpQuantityT7.value = '';
  resultFieldT7.innerHTML = fiboNumbers;
}
