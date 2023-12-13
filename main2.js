function operaciones (num1,num2,cadena){
    try{
        return new Promise((resolve, reject) => {
          // Simula una operación asincrónica
          let resultado;
            if(cadena==="sumar"&&Number.isInteger(num1)&&Number.isInteger(num2)){
                resultado=num1+num2;
                resolve(resultado);
            }else if(cadena==="restar"&&Number.isInteger(num1)&&Number.isInteger(num2)){
                resultado=num1-num2;
                resolve(resultado);
            }else if(cadena==="multiplicar"&&Number.isInteger(num1)&&Number.isInteger(num2)){
                resultado=num1*num2;
                resolve(resultado);
            }else if(cadena==="dividir"&&Number.isInteger(num1)&&Number.isInteger(num2)){
                if(num1===0||num2===0){
                    reject("No se puede dividir entre 0")
                }
                resultado=num1/num2;

                resolve(resultado);
            }else{
                reject("Error de introducción de número o acción");
            }
        });
    
      }catch(error){
        console.log("Error: ", error);
      }
}

operaciones(3,8,"dividir")
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });