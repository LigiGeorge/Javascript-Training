let numbers=[1,2,3,4];
// let mulByTwo=[];
// for(let num of numbers){
//     mulByTwo.push(num*2);
// }
// console.log(mulByTwo);
const mulByTwo=numbers.map(function(num){
    return num*2;
})
const mulByTwo1=numbers.map((num)=>num*2);

console.log(mulByTwo1);
let doctor=[
    {name:'ligi',age:20},
    {name:'moby',age:30},
    {name:'serah',age:30},
];
const docName=doctor.map((doc)=>doc.name);
console.log(docName);