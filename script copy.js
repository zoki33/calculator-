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
var doubleDot = false;

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
    doubleDot = false;
 
}
function deleteCharacter(){

    isError = false;
    let last = temp[temp.length-1];
    if(typeof +last === "number" && !Number.isNaN(+last)){
    temp = temp.slice(0, temp.length - 1);
    document.querySelector(".calculate").innerHTML = temp;
    }
    else if(last === "."){
        temp = temp.slice(0, temp.length - 1);
        document.querySelector(".calculate").innerHTML = temp;
        doubleDot = false;
        doubleop = false;
    }
    else if (operators.includes(last))
    {
        temp = temp.slice(0, temp.length - 1);
        document.querySelector(".calculate").innerHTML = temp;
        doubleop = false;
        counter = 0;
        
        
    }
    
    

}

const delbutton = document.querySelector(".delete");
delbutton.addEventListener('click', deleteCharacter);

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener('click', clear);

const numbers = document.querySelectorAll('.number');
numbers.forEach((num) => num.addEventListener(('click'), () => {
    
    
    if(num.innerHTML === "." && doubleDot === false){
        temp += num.innerHTML;
        document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
        doubleDot = true;
        doubleop = true;
        
        
    }
    else if(num.innerHTML !== "."){
        temp += num.innerHTML;
        document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
        doubleop = false;
        
    }
    
    
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
        doubleDot = false;
        
    }
    else if(doubleop === false && isError === false){
        calculate();
        temp = `${result}${op.innerHTML}`;
        document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
        doubleop = true;
        doubleDot = false;
        
        
        
    }
   


}));


const equals = document.querySelector('.equal');
equals.addEventListener(('click'), calculate);

function calculate() {

    stripper();
    if (scndNum === "" || scndNum === "."){
        document.querySelector(".result").innerHTML = "error";
        isError = true;
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
            if (Number.isInteger(result)){
            document.querySelector(".result").innerHTML = result;
            doubleop = false;
            isError = false;
            }
            else{
                result = (Number.parseFloat(+result.toFixed(9)));
                document.querySelector(".result").innerHTML = result;
                doubleop = false;
                isError = false;
            }
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





