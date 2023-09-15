//using tag
var a =document.querySelectorAll("h1");
//console.log(a);
a[0].innerHTML="Learn html";
a[1].style.color="red";

//using class names
var b=document.querySelectorAll(".hclass");
// console.log(b);
a[0].style.color="green";

//using id
var c=document.querySelectorAll("#head1");
console.log(c);
a[0].innerHTML="Learn";
// id use cheyth cheyyuvanel, vere oru option und ..see below
var d=document.querySelector("#head1");
d.innerHTML="Hi";
