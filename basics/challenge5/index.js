var x1;
var x2;
var y1;
var y2;
var distance;

x1 = parseFloat(prompt("Enter the x1 number: "));
x2 = parseFloat(prompt("Enter the x2 number: "));
y1 = parseFloat(prompt("Enter the y1 number: "));
y2 = parseFloat(prompt("Enter the y2 number: "));

distance = Math.sqrt((y1 - x1) * (y1 - x1) + (y2 - x2) * (y2 - x2));
console.log("Distance =", distance);
