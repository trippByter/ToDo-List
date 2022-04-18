/*Node por defecto trabaja de forma síncriona/secuencial
NO de forma asíncrona*/
// Los imports se ordenan: 
// primero los de terceros
// luego las nuestras
require("colors");
const { inquirerMenu, 
        pausa,
        leerInput 
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

// console.clear();


const main = async() => {
  // Almacenamos el input consola en un 'let opt;'
  // Ejecutamos un 'do while' para esperar
  // rpta del input de la consola
  let opt = "";

  // Crear tareas.
  // Se realiza fuera del do-while para 
  // evitar crear tareas cada vez que inicie la app
  const tareas = new Tareas();

  do {
    
    opt = await inquirerMenu();
    // Test
    // console.log({opt});

    // Trabajamos con 'switch' porque 
    // hay opciones controladas
    switch(opt){
      case "1": 
        // Crear tarea
        // Prompt para ingreso de datos
        const desc = await leerInput("Descripcion:");
        // Creamos tarea y agregamos al listado
        tareas.crearTarea(desc);
        // console.log(desc);
      break;
      case "2": 
        // Listar tareas
        console.log(tareas._listado);
      break;
    }

    await pausa();
  } while(opt !== "0");

  
};


main();
