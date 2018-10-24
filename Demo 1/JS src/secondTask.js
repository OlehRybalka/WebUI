var firstWidth = document.querySelector('.first-envelope-width');
var firstLength = document.querySelector('.first-envelope-length');
var secondWidth = document.querySelector('.second-envelope-width');
var secondLength = document.querySelector('.second-envelope-length');
var resultFieldT2 = document.querySelector('.resultFieldT2');

var btnResults = document.querySelector('.resultT2');
if(btnResults){
    btnResults.addEventListener('click', showResult);
}

function Envelopes(width, length){
  this.width = width;
  this.length = length;
}

function validateEnvelope(width, length){
    if(width <= 0 || width === '' || isNaN(width)){
        return false
    }
    if(length <= 0 || length === '' || isNaN(length)){
        return false
    }
    return true
}

function showResult() {
    if(!validateEnvelope(firstWidth.value, firstLength.value) || 
       !validateEnvelope(secondWidth.value, secondLength.value)){
        resultFieldT2.innerHTML = 'Sorry, value can\'t be empty or have invalid value';
        return false
    }                           

    var firstEnvelope = new Envelopes(Number(firstWidth.value), Number(firstLength.value));
    var secondEnvelope = new Envelopes(Number(secondWidth.value), Number(secondLength.value));
        
    var a = firstEnvelope.width;
    var b = firstEnvelope.length;
    var c = secondEnvelope.width;
    var d = secondEnvelope.length;
    
    if (a>c && b>d || c > a && b >= (2*c*d*a + (c*c-d*d) * Math.sqrt(c*c+d*d-a*a)) / (c*c+d*d)) {
        resultFieldT2.innerHTML = ('The second envelope can be put into the first one');
    } else {
        resultFieldT2.innerHTML = 0;
    }
}

