export async function loadAsync(src) {

  document.body.innerHTML += 'LOADING...';
  try{
    return new Promise((resolve, reject) => {
      // Simula una operación asincrónica
      setTimeout(() => {
        const exito = true; // Cambia a false para simular un rechazo
        if (exito) {
          resolve("La Promesa se ha cumplido.");
          const imagen = document.createElement("img");

          // Asigna la ruta de la imagen al atributo src
          imagen.src = src;
      
          // Agrega la imagen al contenedor
          document.getElementById("app").appendChild(imagen);
        } else {
          reject("La Promesa ha sido rechazada.");
        }
      }, 2000);
    });

  }catch(error){
    console.log("Error: ", error);
  }
}

loadAsync("assets/2.jpg");