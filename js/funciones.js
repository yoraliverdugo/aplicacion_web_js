  
        // clase 11 - enero - 2023
      /* cundo solo deseas mandar una sola variable no se necesitan los parentesis ni las llaves, 
    si sonmas variables se hace todo como esta*/
   // const saludo = (nombre) => {
        // return nombre;
        
        //}
       //const nombre = saludo('Yorali');
      // console.log(nombre);
       //------------------------------ 
     

         

       const edad  = prompt('Introduzca su edad');
       const calculaedad = (edad) => {
           if(edad<0 || edad>100){
               console.log('Datos no aceptados')
           } 
           else if( edad >=18) {
           console.log('Bien por ti'); 
       } 
       else if(edad <= 17) {
               console.log('Nah Creo(8')
           }
       
       }
          calculaedad(edad);