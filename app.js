/*Node por defecto trabaja de forma síncriona/secuencial
NO de forma asíncrona*/
// Los imports se ordenan: 
// primero los de terceros
// luego las nuestras
require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();


const main = async() => {
  // Almacenamos el input consola en un 'let opt;'
  // Ejecutamos un 'do while' para esperar
  // rpta del input de la consola
  let opt = "";
  do {
    // Aqui decimos q espere el input
    // del mostrarMenu y lo almacenamos
    // en el let opt
    opt = await mostrarMenu(); 
    // Test
    console.log({opt});
    await pausa();
  } while(opt !== 0)

  
};


main();
