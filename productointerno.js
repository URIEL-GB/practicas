/*  PRODUCTO INTERNO
   Escriba un programa que entregue el producto interno de a y b:
   Añada al programa si a y b son ortogonales:
   */
   let numero=prompt("ingrese el numero de elementos que tendran los vectore");
   let vector1=[];
   let vector2=[];
   let resultado=0;
   console.log("Ingrese el vector a:")
   for( let n=0; n<numero; n++)
   {
     let elemento=prompt();
     let int1=parseInt(elemento);
     console.log(int1);
     vector1.push(int1);  
    }
    console.log("a: "+vector1);
    console.log("Ingrese el vector b:")
    for( let i=0; i<numero; i++)
   {
     let elemento=prompt();
     let int2=parseInt(elemento);
     console.log(int2);
     vector2.push(int2);  
    }
    console.log("b :"+vector2);
    for (let j= 0; j<numero; j++) {

     resultado += vector1[j] * vector2[j];
    }
    console.log("Producto interno entre a y b:")
    console.log(resultado);
    if(resultado!=0){
       console.log("a y b no son ortagonales")
    }
    else{
       console.log("a y b son ortagonales")
    }