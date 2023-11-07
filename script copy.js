function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}

function div(a, b) {
    
        return (a / b);
    
}

var firstNum;
var scndNum;
var operator;
var result;
var temp ="";
const operators = "+-/*";
var doubleop = false;
var isError = false;

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return multi(a, b);
        case '/':
            if(b === 0){
                return "error";
            }
            else{
            return div(a, b);
            }
    }

}

function clear(){

    document.querySelector(".calculate").innerHTML = "";
    document.querySelector(".result").innerHTML = "";
    temp = "";
    counter = 0;
    doubleop = false;
    isError = false;
    result = 0;
 
}
function deleteCharacter(){
    let last = +temp[temp.length-1];
    if(typeof last === "number" && !Number.isNaN(last)){
    temp = temp.slice(0, temp.length - 1);
    document.querySelector(".calculate").innerHTML = temp;
    }
    else{
        temp = temp.slice(0, temp.length - 1);
        document.querySelector(".calculate").innerHTML = temp;
        doubleop = false;
    }
    

}

const delbutton = document.querySelector(".delete");
delbutton.addEventListener('click', deleteCharacter);

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener('click', clear);

const numbers = document.querySelectorAll('.number');
numbers.forEach((num) => num.addEventListener(('click'), () => {
    
    temp += num.innerHTML;
    document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
    doubleop = false;
})

);

var counter = 0;
const ops = document.querySelectorAll('.op');
ops.forEach((op) => op.addEventListener(('click'), () => {

    if(counter === 0 && doubleop === false && isError === false){
        temp += op.innerHTML;
        document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
        counter++;
        doubleop = true;
        
    }
    else if(doubleop === false && isError === false){
        calculate();
        temp = `${result}${op.innerHTML}`;
        document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
        
        
        
    }
   


}));


const equals = document.querySelector('.equal');
equals.addEventListener(('click'), calculate);

function calculate() {

    stripper();
    if (scndNum === ""){
        document.querySelector(".result").innerHTML = "error";
    }
    else{
        scndNum = +scndNum;
        result = operate(firstNum,scndNum,operator);
        if(result === "error" || result === undefined){
            document.querySelector(".calculate").innerHTML = temp;
            document.querySelector(".result").innerHTML = "error";
            isError = true;
            

        }
        else{
            result = +result;
            document.querySelector(".result").innerHTML = result;
            doubleop = false;
            isError = false;
        }
        
    }
    
    

}

function stripper() {
    var strip;
    for(var i = 0 ;i < operators.length; i++)
    {
        if (temp.includes(operators[i])){
            strip = temp.indexOf(operators[i])
            operator = operators[i];
        }
    }
    firstNum = +temp.slice(0, strip);
    scndNum = temp.slice(strip+1);

}





