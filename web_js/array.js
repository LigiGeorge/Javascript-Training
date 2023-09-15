var animal=["lion","cat","dog"];
document.write(animal+"<br>");
document.write(animal[2]+"<br>");
animal[0]="elephant";
//push
animal.push("fox","horse");
document.write(animal+"<br>");
var x=animal.length;
document.write(x+"<br>");
for(var i=0;i<x;i++){
    document.write((animal[i])+"<br>");
}