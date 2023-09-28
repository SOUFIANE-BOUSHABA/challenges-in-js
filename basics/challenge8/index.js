
    var nombre;
    nombre= parseInt(prompt("eneter the number"));
    var binary=[];
    var hex=[];
    var i = 0;
    var j ;
    
// ***************************
    var temp = nombre;
    while (temp != 0) {
        binary[i] = temp % 2;
        temp = Math.floor(temp / 2);
        i++;
    }
   console.log("The binary representation is: " + binary.reverse().join(""));
