/*Node por defecto trabaja de forma síncriona/secuencial
NO de forma asíncrona*/
// Los imports se ordenan: 
// primero los de terceros
// luego las nuestras
require("colors");
const { mostrarMenu } = require("./helpers/mensajes");

console.clear();


const main = async() => {
    console.log("Kunamasta".rainbow);
    mostrarMenu();
};


main();