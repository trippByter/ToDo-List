/*Node por defecto trabaja de forma síncriona/secuencial
NO de forma asíncrona*/
// Los imports se ordenan: 
// primero los de terceros
// luego las nuestras
require("colors");
const { inquirerMenu } = require("./helpers/inquirer");

console.clear();


const main = async() => {
  // Almacenamos el input consola en un 'let opt;'
  // Ejecutamos un 'do while' para esperar
  // rpta del input de la consola
  let opt = "";
  do {
    
    opt = await inquirerMenu();
    // Test
    console.log({opt});
  } while(opt !== "0");

  
};


main();
