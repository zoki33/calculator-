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
    if (b == 0) {
        return "ERROR"
    }
    else {
        return (a / b);
    }
}

var temp = "";
var firstNum;
var scndNum;
var operator;
var result; 

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return multi(a, b);
        case '/':
            return div(a, b);
    }

}

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener('click', () => {
    document.querySelector(".calculate").innerHTML = "";
    document.querySelector(".result").innerHTML = "";
    temp = "";
    firstNum = 0;
    scndNum = 0;
    operator = "";
    counter = 0;
    result = 0;
})

const numbers = document.querySelectorAll('.number');
numbers.forEach((num) => num.addEventListener(('click'), () => {
    temp += num.innerHTML;
    document.querySelector(".calculate").innerHTML = JSON.parse(JSON.stringify(temp));
}));


const ops = document.querySelectorAll('.op');
var counter = 0;
ops.forEach((op) => op.addEventListener(('click'),() =>{
    document.querySelector(".calculate").innerHTML += op.innerHTML;
    operator = op.innerHTML;
    if(counter === 0){
    firstNum = +temp;
    temp = "";
    counter++;
    }
    else{
        
        firstNum = +result;
        scndNum = +JSON.parse(JSON.stringify(temp));;
        document.querySelector(".calculate").innerHTML = `${operator}`;
        calculate();
    }
    
    
}
))

const equals = document.querySelector('.equal');
equals.addEventListener(('click'), calculate);

function calculate() {

    scndNum = +JSON.parse(JSON.stringify(temp));

    result = (operate(firstNum, scndNum, operator));
    
    document.querySelector(".result").innerHTML = result;

    temp = "";




}





