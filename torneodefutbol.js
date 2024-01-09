/* TORNEO DE FUTBOL
    Escriba un programa para simular un campeonato de futbol.
    Primero, debe pedir al usuario que ingrese los nombres de ocho equipos. A
    continuación, debe pedir los resultados de los partidos juntando los equipos de dos en
    dos. El ganador de cada partido avanza a la ronda siguiente.
    El programa debe continuar preguntando ganadores de partidos hasta que quede un
    único jugador, que es el campeón del torneo.
    */
    let nombres=[]; let nombres2=[]; let nombres3=[]; let nombres4=[]; let encuentro1=[]; let encuentro2=[]; let encuentro3=[];
    let encuentro4=[]; let encuentro5=[]; let encuentro6=[]; let encuentro7=[];
    
    function elegirAlAzar(encuentro1) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro1.length);
     return encuentro[indiceAleatorio];
    }
    for(let i=0;i<8;i++){
        let equipo=prompt("ingrese el nombre de los ocho equpos que participaran ");
        console.log("Equipo "+(i+1)+": "+equipo);
        nombres.push(equipo);
    }
    console.log("Cuartos");
    var elementosMovidos =nombres.splice(0, 2);
    encuentro1.push(...elementosMovidos);
    const selec1= elegirAlAzar(encuentro1);
    if(selec1==encuentro1[0]){
        console.log("a. "+encuentro1[0]+" - b. "+encuentro1[1]+": a");
    }else{
        console.log("a. "+encuentro1[0]+" - b. "+encuentro1[1]+": b");
    }
    nombres2.push(selec1);
    // partido 2
    function elegirAlAzar(encuentro2) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro2.length);
     return encuentro2[indiceAleatorio];
    }
    var elementosMovidos =nombres.splice(0, 2);
    encuentro2.push(...elementosMovidos);
    const selec2 = elegirAlAzar(encuentro2);  
    if(selec2==encuentro2[0]){
        console.log("a. "+encuentro2[0]+" - b. "+encuentro2[1]+": a");
    }else{
        console.log("a. "+encuentro2[0]+" - b. "+encuentro2[1]+": b");
    }
    nombres2.push(selec2);
    // partido3
    function elegirAlAzar(encuentro3) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro3.length);
     return encuentro3[indiceAleatorio];
    }
    var elementosMovidos =nombres.splice(0, 2);
    encuentro3.push(...elementosMovidos);
    const selec3 = elegirAlAzar(encuentro3); 
    if(selec3==encuentro3[0]){
        console.log("a. "+encuentro3[0]+" - b. "+encuentro3[1]+": a");
    }else{
        console.log("a. "+encuentro3[0]+" - b. "+encuentro3[1]+": b");
    }
    nombres2.push(selec3);
    // partido4
    function elegirAlAzar(encuentro4) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro4.length);
     return encuentro4[indiceAleatorio];
    }
    var elementosMovidos =nombres.splice(0, 2);
    encuentro4.push(...elementosMovidos);
    const selec4 = elegirAlAzar(encuentro4);
    if(selec4==encuentro4[0]){
        console.log("a. "+encuentro4[0]+" - b. "+encuentro4[1]+": a");
    }else{
        console.log("a. "+encuentro4[0]+" - b. "+encuentro4[1]+": b");
    }
    nombres2.push(selec4);
    console.log("Semifinales:")
    // partido5
    function elegirAlAzar(encuentro5) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro5.length);
     return encuentro5[indiceAleatorio];
    }
    var elementosMovidos =nombres2.splice(0, 2);
    encuentro5.push(...elementosMovidos);
    const selec5 = elegirAlAzar(encuentro5);
    if(selec5==encuentro5[0]){
        console.log("a. "+encuentro5[0]+" - b. "+encuentro5[1]+": a");
    }else{
        console.log("a. "+encuentro5[0]+" - b. "+encuentro5[1]+": b");
    }
    nombres3.push(selec5);
    //partido6
    function elegirAlAzar(encuentro6) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro6.length);
     return encuentro6[indiceAleatorio];
    }
    var elementosMovidos =nombres2.splice(0, 2);
    encuentro6.push(...elementosMovidos);
    const selec6 = elegirAlAzar(encuentro6);  
    if(selec6==encuentro6[0]){
        console.log("a. "+encuentro6[0]+" - b. "+encuentro6[1]+": a");
    }else{
        console.log("a. "+encuentro6[0]+" - b. "+encuentro6[1]+": b");
    }
    nombres3.push(selec6);
    console.log("Final")
    // partido 7
    function elegirAlAzar(encuentro7) {
    const indiceAleatorio = Math.floor(Math.random() * encuentro7.length);
     return encuentro7[indiceAleatorio];
    }
    var elementosMovidos =nombres3.splice(0, 2);
    encuentro7.push(...elementosMovidos);
    const selec7 = elegirAlAzar(encuentro7);  
    if(selec7==encuentro7[0]){
        console.log("a. "+encuentro7[0]+" - b. "+encuentro7[1]+": a");
    }else{
        console.log("a. "+encuentro7[0]+" - b. "+encuentro7[1]+": b");
    }
    nombres4.push(selec7);
    console.log("El campeon es: "+nombres4);