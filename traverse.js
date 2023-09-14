const user={
    name:'Ligi',
    'age':20,
    'gender':'female',
    'phone':'655666',
    'email':'ligi@gmail.com',
};
//one way
for(let key in user)
{
    console.log(key,user[key]);
}
//two way
console.log(Object.keys(user));
console.log(Object.values(user));

for(let val of Object.values(user))
{
    console.log(val);
}