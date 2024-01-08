/*  SUMA DE FRACCIONES
Desarrolle un programa que permita trabajar con las potencias fraccionales de dos, es decir:
1/2,1/4,1/8,1/16,1/32,1/64,…
en forma decimal:
0.5,0.25,0.125,0.0625,0.03125,0.015625,… 
*/
i=1;
let suma=0;
console.log("Potencia     Fraccion            Suma");
do{
  var fraccion = 1 / Math.pow(2, i);
  suma=suma+fraccion;
  console.log(i+"            "+fraccion+"                 "+suma);
  i++;
}while(fraccion>=0.00001)