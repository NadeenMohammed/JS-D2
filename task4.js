//&RADIUS&AREA
let radius = Number(prompt("enter the redius"));
let area = radius * radius * 3.14;
let result = window.alert("area="+area);
//&SQUARE ROOT
let value = Number(prompt("enter the value"));
let squarRoot = Math.sqrt(value);
let root = window.alert("squarRoot="+squarRoot);
//&ANGEL
let angel = Number(prompt("enter the angel"));
let cos_of_angel = (Math.cos(angel*Math.PI/180));
 document.write("cos="+cos_of_angel.toFixed(3));