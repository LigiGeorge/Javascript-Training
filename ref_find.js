const doctors=[
    {name:'ligi',age:25},
    {name:'moby',age:29},
    {name:'serah',age:15},
]
const result=doctors.find(function(doctor){
    return doctor.name==='ligi';

});
const result1=doctors.find(function(doctor){
    return doctor.age>10 ;

});
console.log(result1);