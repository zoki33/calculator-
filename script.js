function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}

function div(a,b){
    if(b == 0){
        return "ERROR"
    }
    else {
        return (a/b).toFixed(5);
    }
}

var firstNum;
var scndNum;
var operator;

function operate(a,b,operator){
    switch(operator){
        case "+":
            add(a,b);
            break;
        case "-":
            sub(a,b);
            break;
        case "*":
            multi(a,b);
        case "/":
            div(a,b);
    }

}