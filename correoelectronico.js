    /*  CORREO ELECTRONICO
    Elaboa un programa que lea una cadena de texto y determine si es un correo
    electronico o no, esta cadena debera evaluar si cotiene el carcater @ y con 
    las terminaciones: .com, .com.mx y .mx 
    */
    let correo=prompt("Ingresa tu correo electronico")
    let validarCorreo =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com,com.mx,mx]{2,4}$/;
    let valido =validarCorreo.test(correo);
    if(valido==true){
        console.log("Si es un correo electronico");
    }else{
    console.log("No es un correo electronico");
    }