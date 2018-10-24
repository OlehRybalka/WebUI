var rows = document.querySelector('.rows');
var cols = document.querySelector('.cols');
var symbol = document.querySelector('.symbol');
var resultFieldT1 = document.querySelector('.resultFieldT1');

var showResult = document.querySelector('.resultT1');
if(showResult){
    showResult.addEventListener('click', createTable);
}

function validateTable(value){
    if(value <= 0 || value === '' || isNaN(value)){
        return false
    }
    return true
}
function validateSymbol(symbol){
    if(symbol === ''){
        return false
    }
    return true
}

function createTable(){
    if(!validateTable(rows.value) || 
       !validateTable(cols.value) || 
       !validateSymbol(symbol.value)){
        resultFieldT1.innerHTML = 'Sorry, value can\'t be empty or have invalid value';
        return false
    }

    var table = document.createElement("table");
    for (var i = 1; i <= rows.value; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= cols.value; j++) {
            var td = document.createElement('td');
            if (i%2 == j%2) {
                td.innerHTML = symbol.value;
            } else {
                td.innerHTML = '';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    resultFieldT1.appendChild(table);
}

