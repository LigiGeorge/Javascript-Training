
const numbers=[6,8,3,1,9];
numbers.sort();
numbers.reverse();
console.log(numbers);

let doctors=[
    {name:'ligi',age:25},
    {name:'boby',age:30}
];
doctors.sort(function(d1,d2){
    if(d1.age>d2.age) return +1;
    if(d1.age===d2.age) return 0;
    if(d1.age<d2.age) return -1;
}).reverse();
console.log(doctors);