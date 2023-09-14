const salaries={
    ligi:2000,
    moby:3000,
    serah:5000,

};
let sum=0;
// for(let key in salaries)
// {
//     console.log(key,salaries[key]);
//     // sum=sum+salaries[key];
//     sum+=salaries[key];
// }
// console.log(sum);

console.log(Object.values(salaries));
for(let val of Object.values(salaries))
{
    sum+=val;
}
console.log(sum);