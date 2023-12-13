async function paso1() {
    return new Promise((resolve) => {
      const app = document.getElementById('app');
  
      setTimeout(() => {
        const newSpan = document.createElement('span');
        app.appendChild(newSpan);
        resolve(); // Resuelve la promesa para indicar que el paso 1 ha terminado
      }, 1000);
    });
  }
  
  async function paso2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const elemento = document.querySelector('span');
        if (elemento) {
          elemento.style.color = 'red';
        }
        resolve(); // Resuelve la promesa para indicar que el paso 2 ha terminado
      }, 1000);
    });
  }
  
  async function paso3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const elemento = document.querySelector('span');
        if (elemento) {
          elemento.textContent = 'Hola mundo';
        }
        resolve(); // Resuelve la promesa para indicar que el paso 3 ha terminado
      }, 1000);
    });
  }
  
  // Utiliza async/await para ejecutar los pasos en orden
  async function ejecutarSecuencia() {
    await paso1();
    await paso2();
    await paso3();
    console.log('Secuencia completada');
  }
  
  // Llama a la función que ejecuta la secuencia
  ejecutarSecuencia();
  