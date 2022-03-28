/*Node por defecto trabaja de forma síncriona/secuencial
NO de forma asíncrona*/
// Los imports se ordenan: 
// primero los de terceros
// luego las nuestras
require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

// console.clear();


const main = async() => {
  // Almacenamos el input consola en un 'let opt;'
  // Ejecutamos un 'do while' para esperar
  // rpta del input de la consola
  let opt = "";
  do {
    
    // opt = await inquirerMenu();
    // // Test
    // console.log({opt});

    const tareas = new Tareas();
    const tarea = new Tarea("Comprar comida");
    
    // En este listado, que es un objeto, tengo
    // la llave de la tarea y la info de la tarea
    // Es como se usa en NoSQL DB
    tareas._listado[tarea.id] = tarea;
    console.log(tareas);

    await pausa();
  } while(opt !== "0");

  
};


main();
