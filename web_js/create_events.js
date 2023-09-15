var heading=document.getElementById("head1");
var btn=document.getElementById("btn");
btn.addEventListener("click",changecolor);
heading.addEventListener("mouseover",changebg);
function changecolor()
{
    heading.style.color="red";
}
function changebg()
{
    heading.style.backgroundColor="green";
}