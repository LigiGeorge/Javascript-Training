const user={
    name:'Ligi',
    age:20,
    isMarried:true,
};
console.log(user);
//Add
user.email='ligi@gmail.com';
console.log(user);
user['phone']='56549595';
console.log(user);
//update
user.isMarried=false;
user.age=user.age+5;
console.log(user);
//delete
delete user.age;
console.log(user);
