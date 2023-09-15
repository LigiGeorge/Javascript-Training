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
class Manager extends Employee
{

}
let m1=new Manager("Smith","HR",25566);
console.log(m1);
m1.getsalary();