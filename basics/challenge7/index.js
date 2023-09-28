
    var nombre, inverse1, inverse2, inverse3;

    nombre= parseInt(prompt("eneter the number betwen 100 and 999"));


    if (nombre >= 100 && nombre <= 999) {
        inverse1 = (nombre % 10);          
        inverse2 = ((nombre / 10) % 10);   
        inverse3 = (nombre / 100);         

        console.log("result : %d%d%d\n", inverse1, inverse2, inverse3);
    } else {
        console.log("there is an error plaise thre numbers.\n");
    }

 