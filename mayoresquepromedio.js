/*  MAYORES QUE EL PROMEDIO
  Escriba un programa que pregunte a usuario cuantos datos ingresara, a continuacion le pida que 
  ingrese los datos uno por uno, y finalmente entregue como salida cuantos datos de los datos 
  ingresados son mayores que el promedio
  */
  let datos=prompt("Cuantos datos ingresara:");
    console.log("Cuantos datos ingresara: "+ datos);
    let suma=0;
    let num=[];
    let contador=0;
    for(let n=1; n<=datos; n++)
    {
      let elemento=prompt();
      suma+=parseInt(elemento);
      console.log("Dato "+n+": " +elemento);
      num.push(elemento);  
     }
     let promedio=suma/datos;
     for (let i = 0; i < num.length; i++) {
    if (num[i] > promedio) {
      contador++;
     }
    }
    console.log(contador+" datos son mayores que el promedio ");