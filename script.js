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

console.log(div(5,6));