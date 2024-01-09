 /*  MAYORES QUE
  Escriba un programa en el que dada una lista de n números escriba cuantos números
  son mayores que x: 
  */
  let numeros=prompt("ingresa cuanto numeros quieres leer:");
  console.log("ingresa cuanto numeros quieres leer:");
  console.log(numeros);
  console.log("ingresa los numeros:");
  let num=[];
  let contador=0;
  for(let n=0; n<numeros; n++)
  {
    let elemento=prompt();
    console.log(elemento);
    num.push(elemento);  
   }
   let comparar=prompt("ingresa el valor x con cual comparar:");
   console.log("ingresa el valor x con cual comparar:");
   console.log(comparar);
   for (let i = 0; i < num.length; i++) {
  if (num[i] > comparar) {
    contador++;
  }
}
  console.log("De tus lista "+ contador +" valores son mayores a "+ comparar);