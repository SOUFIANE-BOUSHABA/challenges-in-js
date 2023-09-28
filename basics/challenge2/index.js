
var F;

F = parseInt(prompt("Write your temperateur:"));

var C= (F - 32) / 1.8;

console.log("temperateur en clisiues is: " + C);
   
    if (C < 0) {
        console.log(" Very cold\n");
    } else if (C >= 0 && C < 10) {
        console.log(" cold\n");
    } else if (C >= 10 && C < 25) {
        console.log(" hot\n");
    } else {
        console.log("Very hot\n");
    }
