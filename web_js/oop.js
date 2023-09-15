// let employee={
//     name:"ligi",
//     position:"developer",
//     salary:30000,
//     getSalary:function(){
//         document.write("salary of "+this.name+ "is"+this.salary);
//         }
// }
// document.write(employee.name);
// employee.getSalary();

class Employee{
    constructor(name,position,salary)
    {
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getsalary()
    {
        document.write("salary of "+this.name+ "is"+this.salary);
    }
}
let e1=new Employee("ligi","Accountant",30000);
e1.getsalary();
document.write(e1.salary);