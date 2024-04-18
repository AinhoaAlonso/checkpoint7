function operacion(num1, num2, num3, num4){
    const resultado = (num1 + num2) * (num3 + num4);
    
    if(resultado>50){
      console.log("¡El número es mayor que 50!");
    } else{
      console.log("¡El número es menor que 50!");
    }
  }
  operacion(2, 2 , 10, 2);