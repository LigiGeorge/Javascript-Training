const numbers=[6,8,-7,2,1,9];
const data=numbers.every(function(num){
    return num>0;
})
const data1=numbers.some(function(num){
    return num>0;
})
console.log(data1);