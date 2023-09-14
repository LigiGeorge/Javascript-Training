function multiply(num1,num2,num3){
    return num1*num2*num3;
}
function multiply(...args){
    console.log(args);
    
    let mulp=1;
    for(let num of args){
        mulp=mulp*num;
    }
    return mulp;
}
console.log(multiply(2,3,1,2,5));