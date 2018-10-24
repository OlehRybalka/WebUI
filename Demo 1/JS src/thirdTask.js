// add name of triangular and 3 sides 
var formT3 = document.querySelectorAll('input[type="text"]');
var inpName = document.querySelector('.name');
var inpASide = document.querySelector('.aSide');
var inpBSide = document.querySelector('.bSide');
var inpCSide = document.querySelector('.cSide');
var resultFieldT3 = document.querySelector('.resultFieldT3');

// add adding and showing buttons
var btnAdd = document.querySelector('.add');
if(btnAdd){
    btnAdd.addEventListener('click', addToList);
}

var btnShow = document.querySelector('.show');
if(btnShow){
    btnShow.addEventListener('click', showSorted)
}

// lists for collecting triangs
var list = [];
var finalList = [];

// validation of triangulars
function validateTriangulars(value){
    if(value <= 0 || value === '' || isNaN(value)){
        return false
    }
    if(Number(inpASide.value) > Number(inpBSide.value) + Number(inpCSide.value) || Number(inpBSide.value) > Number(inpASide.value) + Number(inpCSide.value) || Number(inpCSide.value) > Number(inpBSide.value) + Number(inpASide.value)){
        resultFieldT3.innerHTML = 'Sorry, triangular doesn\'t exist';
        return false
    }
    return true
}
function validateName(name){
    if(name === ''){
        return false
    }
    return true
}

function addToList() {
    if(!validateTriangulars(inpASide.value) || 
       !validateTriangulars(inpBSide.value) || 
       !validateTriangulars(inpCSide.value) || 
       !validateName(inpName.value)){
        resultFieldT3.innerHTML = 'Sorry, value can\'t be empty or have invalid value';
        return false
    }

    list.push({Name: inpName.value, a: Number(inpASide.value), b: Number(inpBSide.value), c: Number(inpCSide.value)})

    // clearification of input fields after adding them to the list
    formT3.forEach(function(item){
        item.value = '';
    })
  
    list.forEach(function(item){
        chosenName = item.Name,
        sideA = item.a,
        sideB = item.b,
        sideC = item.c, // still three sides, but in the certain triangular
        p = (sideA + sideB + sideC) * 0.5, // find half-perimeter
        s = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC)); // find the square according to Heron's law
    })
    finalList.push({Name: chosenName, Square: s})
}

// Sort triangulars from top to bottom
function showSorted(){
    finalList.sort(function (obj1, objN) { 
        if (obj1.Square < objN.Square) {
            return 1;
        }
        if (obj1.Square > objN.Square) {
            return -1;
        }
        return 0;
    });
    
    finalList.forEach(function(item){
        resultFieldT3.innerHTML += item.Name + ' ' + item.Square + '</br>';
    })
}




