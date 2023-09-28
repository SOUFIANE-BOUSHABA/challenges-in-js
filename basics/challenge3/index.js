
    var a;
    var b;
    var sum , less , multiple , division ,rest ;
    
    a = parseFloat(prompt("first number :"));
    b = parseFloat(prompt("second number :"));
    
    sum = a+b;
    less = a-b;
    multiple = a*b;
    if (b>0){
    	 division = a/b;
	}
	else console.log("eror plaise enter number > 0");
	
   
    rest =a%b ;
   
    console.log(" the sum is : ", sum);
    console.log(" the less is : ", less);
    console.log(" the multiple is : ", multiple);
    console.log(" the division is : ", division);
    console.log( a+ " %%  "+b+" = ", rest);